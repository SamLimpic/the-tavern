<template>
  <div class="questions container-fluid">
    <div class="row justify-content-center" v-if="state.activeQuestion && !state.loading">
      <div class="col-md-8 col-12 p-md-5">
        <QuestionComponent />
      </div>
      <div class="col-4 d-md-block d-none bg-primary p-5 pt-5">
        <div class="shadow rounded bg-light text-center m-3 p-5">
          <h2><u>Progress</u></h2>
          <!-- The value of the 'Style' & aria-valuenow attributes will be tied to the Index of our question Array at current question -->
          <div id="questions results" class="progress mb-4" style="height: 2rem">
            <div class="progress-bar bg-primary"
                 role="progressbar"
                 :style="`width: ${(state.count.question * 10) + 2}%`"
                 :aria-valuenow="`${(state.count.question * 10) + 2}`"
                 aria-valuemin="0"
                 aria-valuemax="100"
            ></div>
          </div>

          <div v-if="state.role !== null">
            <h3 class="text-left">
              {{ state.role }}
            </h3>
            <!-- The value of the 'Style' & aria-valuenow attributes will be tied to the Index of our question Array at current question -->
            <div id="questions results" class="progress mb-4" style="height: 2rem">
              <div :class="'progress-bar ' + state.colors[state.role.toLowerCase()]"
                   role="progressbar"
                   :style="`width: ${state.attributes.role[state.role.toLowerCase()] * 33}%`"
                   :aria-valuenow="`${state.attributes.role[state.role.toLowerCase()] * 33}`"
                   aria-valuemin="0"
                   aria-valuemax="100"
              ></div>
            </div>
          </div>

          <div v-if="state.style !== null">
            <h3 class="text-left">
              {{ state.style }}
            </h3>
            <!-- The value of the 'Style' & aria-valuenow attributes will be tied to the Index of our question Array at current question -->
            <div id="questions results" class="progress mb-4" style="height: 2rem">
              <div :class="'progress-bar ' + state.colors[state.style.toLowerCase()]"
                   role="progressbar"
                   :style="`width: ${state.attributes.style[state.style.toLowerCase()] * 33}%`"
                   :aria-valuenow="`${state.attributes.style[state.style.toLowerCase()] * 33}`"
                   aria-valuemin="0"
                   aria-valuemax="100"
              ></div>
            </div>
          </div>

          <div v-if="state.role === null">
            <ProgressComponent v-for="(a, key, index) in state.attributes.role" :key="index" :attribute-prop="key" />
          </div>

          <div v-else-if="state.style === null">
            <ProgressComponent v-for="(a, key, index) in state.attributes.style" :key="index" :attribute-prop="key" />
          </div>
        </div>
      </div>
    </div>

    <div class="row justify-content-center m-5" v-else>
      <h2><i class="fas fa-dice-d20 fa-spin text-warning"></i></h2>
    </div>
  </div>
</template>

<script>
import { computed, onMounted, reactive } from 'vue'
import { AppState } from '../AppState'
import { questionsService } from '../services/QuestionsService'
import Notification from '../utils/Notification'

export default {
  name: 'QuestionsPage',
  setup() {
    const state = reactive({
      loading: true,
      activeQuestion: computed(() => AppState.activeQuestion),
      attributes: computed(() => AppState.attributes),
      count: computed(() => AppState.count),
      role: computed(() => AppState.role),
      style: computed(() => AppState.style),
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
        state.loading = false
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
h2 {
   font-size: 3rem;
}

h3 {
    font-size: 2rem;
}

p {
   font-size: 2rem;
}

</style>
