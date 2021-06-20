<template>
  <div class="results container-fluid">
    <div class="row justify-content-center h-100">
      <div class="col-lg-8 col-12 p-md-4">
        <div class="shadow rounded bg-light text-center m-4 p-md-4 p-3" v-if="state.loading">
          <h2 class="font-xl">
            <u>Loading your Character</u><br>
            <i class="fas fa-dice-d20 fa-spin text-warning font-xxl mt-3"></i>
          </h2>
        </div>
        <div class="shadow rounded bg-light text-center m-4 p-sm-4 p-3" v-else>
          <h2 class="font-lg">
            <u> You have selected a {{ state.character.race }} {{ state.character.job }}!</u>
          </h2>
          <div v-if="state.skills < state.job.proficiencies.skills.choose">
            <h3 class="font-sm">
              Choose {{ state.job.proficiencies.skills.choose }} of your available Skills!
            </h3>
            <div class="row justify-content-center">
              <SkillsComponent v-for="s in state.job.proficiencies.skills.from" :key="s" :skill-prop="s" />
            </div>
          </div>
          <div v-else-if="state.equipment < state.job.equipment[0].choices.length">
            <h3 class="font-sm">
              Choose from these sets of available Equipment
            </h3>
            <div>
              <ChoicesComponent v-for="(c, key) in state.job.equipment[0].choices" :key="key" :choice-prop="c" :index-prop="key" />
            </div>
          </div>
          <div v-else-if="state.chooseAbilities && state.chooseAbilities.length > state.abilities">
            <h3 class="font-sm">
              Time to choose some of your abilities!
            </h3>
            <div class="row justify-content-around">
              <AbilityComponent v-for="(a, index) in state.chooseAbilities" :key="index" :ability-prop="a" :index-prop="index" />
            </div>
          </div>
          <div v-else-if="state.chooseScores && state.mods > state.modChoice">
            <h3 class="font-sm">
              Now assign your {{ state.mods }} Ability Modifiers!
            </h3>
            <div class="row justify-content-around">
              <AbilityModsComponent v-for="m in state.chooseScores" :key="m" :mod-prop="m" />
            </div>
          </div>
          <div v-else-if="state.score < 6">
            <AbilityScore />
          </div>
          <div class="col-12 text-center" v-else>
            <i class="fas fa-dice-d20 text-success fa-7x text-shadow mt-3 mb-4" @click="saveCharacter"></i>
            <h3 class="font-sm">
              Congratulations!<br>Click the dice above to save your Character!
            </h3>
          </div>
        </div>
      </div>
      <div class="col-4 d-lg-block d-none bg-primary h-100 p-md-4">
        <div class="shadow rounded bg-light text-center m-4 p-md-4 p-3" v-if="state.loading">
          <h2 class="font-lg">
            <u>Character Profile</u><br>
            <i class="fas fa-dice-d20 fa-spin text-warning font-xxl mt-3"></i>
          </h2>
        </div>
        <div class="shadow rounded bg-light text-left m-4 p-md-4 p-3" v-else>
          <h2 class="font-lg">
            <u>Your Profile</u>
          </h2>
          <h3 class="font-sm">
            Party Role: <span :class="state.colors[state.character.role.toLowerCase()] + ' font-xs'"><i>{{ state.character.role }}</i> </span>
          </h3>
          <!-- <h3 class="font-sm d-xl-none d-block">
            Role: <span :class="state.colors[state.character.role.toLowerCase()] + ' font-xs'"><i>{{ state.character.role }}</i> </span>
          </h3> -->
          <h3 class="font-sm">
            Play Style: <span :class="state.colors[state.character.style.toLowerCase()] + ' font-xs'"><i>{{ state.character.style }}</i></span>
          </h3>
          <!-- <h3 class="font-sm d-xl-none d-block">
            Style: <span :class="state.colors[state.character.style.toLowerCase()] + ' font-xs'"><i>{{ state.character.style }}</i></span>
          </h3> -->
          <h3 class="font-sm">
            Race: <span class="font-xs"><i>{{ state.character.race }}</i></span>
          </h3>
          <h3 class="font-sm">
            Class: <span class="font-xs"><i>{{ state.character.job }}</i></span>
          </h3>
          <h3 class="font-sm" v-if="state.character.subJob !== undefined">
            Sub-Class: <span class="font-xs"><i>{{ state.character.subJob }}</i></span>
          </h3>
          <h3 class="font-sm">
            Background: <span class="font-xs"><i>{{ state.character.background }}</i></span>
          </h3>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { computed, onMounted, reactive } from 'vue'
import { AppState } from '../AppState'
import { resultsService } from '../services/ResultsService'
import { charactersService } from '../services/CharactersService'
import Notification from '../utils/Notification'

export default {
  name: 'Results',
  setup() {
    const state = reactive({
      loading: true,
      character: computed(() => AppState.character),
      activeCharacter: computed(() => AppState.activeCharacter),
      job: computed(() => AppState.job),
      chooseScores: computed(() => AppState.chooseScores),
      chooseAbilities: computed(() => AppState.chooseAbilities),
      skills: computed(() => AppState.count.skills),
      equipment: computed(() => AppState.count.equipment),
      languages: computed(() => AppState.count.languages),
      mods: computed(() => AppState.count.mods),
      modChoice: computed(() => AppState.count.modChoice),
      score: computed(() => AppState.count.score),
      abilities: computed(() => AppState.count.abilities),
      from: computed(() => AppState.languages),
      colors: {
        tank: 'text-danger',
        damage: 'text-warning',
        support: 'text-success',
        utility: 'text-info',
        weapons: 'text-danger',
        spells: 'text-info',
        balance: 'text-success'
      }
    })
    onMounted(async() => {
      if (AppState.built === 'true') {
        charactersService.createCharacter()
      } else {
        resultsService.loadBuild()
      }
      AppState.activeCharacter = AppState.character
      setTimeout(function() { state.loading = false }, 1000)
    })
    return {
      state,
      user: computed(() => AppState.user),
      async saveCharacter() {
        try {
          await Notification.multiModal()
          await charactersService.saveCharacter()
        } catch (error) {
          Notification.toast('Error' + error, 'error')
        }
      }
    }
  }
}
</script>

<style scoped lang="scss">

</style>
