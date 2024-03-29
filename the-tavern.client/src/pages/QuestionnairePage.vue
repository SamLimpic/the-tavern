<template>
  <!-- ANCHOR The main Questionnaire page, loads Question and Answer components. -->
  <div class="questionnaire container-fluid">
    <div class="row justify-content-center h-100">
      <div class="col-lg-8 col-12 p-md-4 p-2">
        <div class="shadow rounded row justify-content-center bg-light text-center m-4 p-md-4 p-3">
          <!-- SECTION Loads the Active Question and Answers -->
          <div v-if="state.activeQuestion && !state.loading && state.quiz">
            <Question />
          </div>
          <div v-else-if="!state.loading && !state.quiz">
            <div class="col-12" v-if="state.count.select < 2">
              <h2 class="font-md">
                <u>First, choose your character's Class!</u><br>
                <span class="font-sm" v-if="state.count.select === 1">As well as your Sub-Class</span>
              </h2>
              <div class="row justify-content-center">
                <Selection v-for="(s, index) in state.jobs" :key="index" :selection-prop="s" type-prop="Job" />
              </div>
            </div>
            <div class="col-12" v-else-if="state.count.select > 1 && state.count.select < 4">
              <h2 class="font-md">
                <u>Next, choose your character's Race!</u><br>
                <span class="font-sm" v-if="state.count.select === 3">As well as your Sub-Race</span>
              </h2>
              <div class="row justify-content-center">
                <Selection v-for="(s, index) in state.races" :key="index" :selection-prop="s" type-prop="Race" />
              </div>
            </div>
            <div class="col-12" v-else-if="state.count.select > 3">
              <h2 class="font-md">
                <u>Last, choose your character's Background!</u><br>
              </h2>
              <div class="row justify-content-center">
                <Selection v-for="(s, index) in state.backgrounds" :key="index" :selection-prop="s" type-prop="Background" />
              </div>
            </div>
          </div>
          <div class="col-12" v-else>
            <h2 class="font-md">
              <u>Loading your Questionnaire</u>
            </h2>
            <i class="fas fa-dice-d20 fa-spin text-warning font-xxl mt-3"></i>
          </div>
        </div>
      </div>
      <div class="col-4 d-lg-block d-none bg-secondary h-100 p-md-4">
        <div class="shadow rounded bg-light text-center m-4 p-md-4 p-3">
          <h2 class="font-lg">
            <u>Progress</u>
          </h2>
          <!-- SECTION General Progress Bar for Questionnaire -->
          <div class="progress mb-4">
            <div class="progress-bar bg-primary"
                 role="progressbar"
                 :style="`width: ${(state.count.question * 10)}%`"
                 :aria-valuenow="`${(state.count.question * 10)}`"
                 aria-valuemin="0"
                 aria-valuemax="100"
            ></div>
          </div>

          <!-- SECTION The established Character Role -->
          <div v-if="state.role !== null">
            <h3 class="text-left font-md">
              {{ state.role }}
            </h3>
            <div class="progress mb-4">
              <div :class="'progress-bar ' + state.colors[state.role.toLowerCase()]"
                   role="progressbar"
                   :style="`width: ${state.attributes.role[state.role.toLowerCase()] * 33}%`"
                   :aria-valuenow="`${state.attributes.role[state.role.toLowerCase()] * 33}`"
                   aria-valuemin="0"
                   aria-valuemax="100"
              ></div>
            </div>
          </div>

          <!-- SECTION The established Character Style -->
          <div v-if="state.style !== null">
            <h3 class="text-left font-md">
              {{ state.style }}
            </h3>
            <div class="progress mb-4">
              <div :class="'progress-bar ' + state.colors[state.style.toLowerCase()]"
                   role="progressbar"
                   :style="`width: ${state.attributes.style[state.style.toLowerCase()] * 33}%`"
                   :aria-valuenow="`${state.attributes.style[state.style.toLowerCase()] * 33}`"
                   aria-valuemin="0"
                   aria-valuemax="100"
              ></div>
            </div>
          </div>

          <!-- SECTION The Progress Bar for Potential Character Roles -->
          <div v-if="state.role === null">
            <ProgressBar v-for="(a, key, index) in state.attributes.role" :key="index" :attribute-prop="key" />
          </div>

          <!-- SECTION The Progress Bar for Potential Character Styles -->
          <div v-else-if="state.style === null">
            <ProgressBar v-for="(a, key, index) in state.attributes.style" :key="index" :attribute-prop="key" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { computed, onMounted, reactive } from 'vue'
import { AppState } from '../AppState'
import { questionsService } from '../services/QuestionsService'
import Notification from '../utils/Notification'

export default {
  name: 'Questionnaire',
  setup() {
    const state = reactive({
      loading: true,
      activeQuestion: computed(() => AppState.activeQuestion),
      attributes: computed(() => AppState.attributes),
      jobs: computed(() => AppState.jobs),
      races: computed(() => AppState.races),
      backgrounds: computed(() => AppState.backgrounds),
      count: computed(() => AppState.count),
      role: computed(() => AppState.role),
      style: computed(() => AppState.style),
      quiz: computed(() => AppState.quiz),

      // NOTE determines the Progress Bar Color depending on Selected Role / Style
      colors: {
        tank: 'bg-danger',
        damage: 'bg-warning',
        support: 'bg-success',
        utility: 'bg-info',
        weapons: 'bg-danger',
        spells: 'bg-info',
        balance: 'bg-success'
      }
    })
    onMounted(async() => {
      try {
        questionsService.resetAttributes()
        await questionsService.getQuestions()
        // NOTE This timeout ensures consistent loading time across all pages
        setTimeout(function() { state.loading = false }, 1500)
      } catch (error) {
        Notification.toast('Error: ' + error, 'error')
      }
    })
    return {
      state
    }
  }
}
</script>

<style scoped lang="scss">
.progress {
 border: 3px solid var(--dark);
 height: 2.5rem;
}
</style>
