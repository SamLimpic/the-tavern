<template>
  <!-- ANCHOR The Ability Score Roll Function -->
  <div class="row">
    <div class="col-12 text-center">
      <h3 class="font-sm">
        <span v-if="!state.roll">Now you just need to roll your Ability Scores!</span>
        <span v-else-if="state.score < 6">Now assign them accordingly!</span>
        <span v-else>Congratulations!</span>
      </h3>
      <i class="fas fa-dice-d20 fa-7x text-shadow mt-2 mb-4" :class="!state.roll ? 'text-warning hoverable' : state.score < 6 ? 'text-danger' : 'text-success hoverable'" @click="diceHandler()"></i>
      <h3 class="font-sm">
        <span v-if="!state.roll">Click the dice to generate your Scores below:</span>
        <span v-else-if="state.score < 6">Select your Scores and assign them to your ideal Abilities!</span>
        <span v-else>Click the dice again to save your Character!</span>
      </h3>
    </div>
  </div>
  <div class="row align-items-center mx-xl-1 mx-lg-0 mx-md-1 mx-sm-3 mx-1" v-if="state.roll && state.score < 6">
    <!-- SECTION Displays the randomly-generated Ability Score rolls -->
    <DiceRoll v-for="(d, key) in state.activeRolls" :key="key" :dice-prop="d" :index-prop="key" />
  </div>
  <div class="row mt-2 text-center mx-xl-1 mx-lg-0 mx-md-1 mx-sm-3 mx-1 mb-1">
    <!-- SECTION Displays Ability Scores & Stat Modifiers -->
    <Stat v-for="(s, key) in state.character.scores" :key="key" :stat-prop="s" />
  </div>
</template>

<script>
import { AppState } from '../../AppState'
import { computed, reactive } from 'vue'
import { charactersService } from '../../services/CharactersService'
import Notification from '../../utils/Notification'

export default {
  name: 'Score',
  setup() {
    const state = reactive({
      roll: false,
      confirm: computed(() => AppState.confirm),
      character: computed(() => AppState.character),
      activeRolls: computed(() => AppState.activeRolls),
      score: computed(() => AppState.count.score)
    })
    return {
      state,
      async diceHandler() {
        if (!state.roll) {
          this.diceRoll()
        }
        if (state.confirm) {
          await this.saveCharacter()
        }
      },
      diceRoll() {
        const finalRolls = []
        for (let i = 0; i < 6; i++) {
          const subRolls = []
          for (let j = 0; j < 4; j++) {
            let num = Math.floor(Math.random() * 6 + 1)
            if (num === 1) {
              num++
            }
            subRolls.push(num)
          }
          subRolls.sort((a, b) => b - a)
          subRolls.pop()
          finalRolls.push(subRolls.reduce((a, v) => { return a + v }, 0))
        }
        AppState.abilityScore.push(...finalRolls)
        for (let i = 0; i < AppState.abilityScore.length; i++) {
          AppState.activeRolls[i] = AppState.abilityScore[i]
        }
        state.roll = true
      },
      async saveCharacter() {
        try {
          await Notification.multiModal()
          if (AppState.save) {
            await charactersService.saveCharacter()
            Notification.notify('success', 'Well Done!', `${state.character.name}, the ${state.character.race} ${state.character.job} has been saved successfully!`)
          } else {
            Notification.notify('warning', "You haven't saved your character yet!", 'If you navigate away from this page without saving, your character will be lost!')
          }
        } catch (error) {
          Notification.toast('Error' + error, 'error')
        }
      }
    }
  }
}
</script>

<style>

</style>
