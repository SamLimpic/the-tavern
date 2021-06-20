<template>
  <div class="row">
    <div class="col-12 text-center" v-if="state.bool">
      <h3 class="font-sm">
        Now you just need to roll your Ability Scores!
      </h3>
      <i class="fas fa-dice-d20 text-warning fa-7x text-shadow mt-2 mb-4" @click=" diceRoll()"></i>
      <h3 class="font-sm">
        Click the dice to generate your Scores below:
      </h3>
    </div>
    <div class="col-12 text-center" v-else-if="state.score < 6">
      <i class="fas fa-dice-d20 text-danger fa-7x text-shadow my-3"></i>
      <h3 class="font-sm d-lg-block d-none">
        Drag the numbers to your ideal Ability Scores to assign them!
      </h3>
      <h3 class="font-sm d-lg-none d-block">
        Click the numbers to assign them to your Ability Scores!
      </h3>
    </div>
  </div>
  <div class="row align-items-center mx-xl-1 mx-lg-0 mx-md-1 mx-sm-3 mx-1" v-if="state.score < 6">
    <DiceNum v-for="(d, key) in state.activeScores" :key="key" :dice-prop="d" :index-prop="key" />
  </div>
  <div class="row mt-2 text-center mx-xl-1 mx-lg-0 mx-md-1 mx-sm-3 mx-1 mb-1">
    <StatsComponent v-for="(s, key) in state.character.scores" :key="key" :stat-prop="s" />
  </div>
</template>

<script>
import { AppState } from '../AppState'
import { computed, reactive } from 'vue'

export default {
  name: 'AbilityScore',
  setup() {
    const state = reactive({
      bool: true,
      spin: true,
      character: computed(() => AppState.character),
      abilityScore: computed(() => AppState.abilityScore),
      activeScores: computed(() => AppState.activeScores),
      characterScores: computed(() => AppState.characterScores),
      chooseScores: computed(() => AppState.chooseScores),
      mods: computed(() => AppState.count.mods),
      modChoice: computed(() => AppState.count.modChoice),
      score: computed(() => AppState.count.score)
    })
    return {
      state,
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
          AppState.activeScores[i] = AppState.abilityScore[i]
        }
        state.bool = false
      }
    }
  }
}
</script>

<style>

</style>
