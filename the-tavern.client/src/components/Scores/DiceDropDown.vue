<template>
  <!-- ANCHOR Mobile Dropdown Menu in place of the Desktop Drag and Drop -->
  <a class="dropdown-item font-sm" :class="state.job.proficiencies.saves.includes(dropProp) ? 'text-success' : state.job.proficiencies.fails.includes(dropProp) ? 'text-danger' : ''" @click="addStat(dropProp, diceProp, indexProp)">{{ dropProp }}</a>
</template>

<script>
import { computed, reactive } from 'vue'
import { AppState } from '../../AppState'
import Notification from '../../utils/Notification'

export default {
  name: 'DiceDropDown',
  props: {
    dropProp: {
      type: String,
      required: true
    },
    diceProp: {
      type: Number,
      required: true
    },
    indexProp: {
      type: String,
      required: true
    }
  },
  setup() {
    const state = reactive({
      stats: computed(() => AppState.stats),
      job: computed(() => AppState.job),
      character: computed(() => AppState.character)
    })
    return {
      state,
      async addStat(stat, num, index) {
        try {
          const title = stat.toLowerCase()
          const mod = AppState.character.scores[title].mod
          AppState.scores[title].value = num + mod
          AppState.scores[title].mod = Math.floor((AppState.scores[title].value - 10) / 2)
          AppState.stats = AppState.stats.filter(s => s !== stat)
          AppState.activeRolls[index] = 0
          document.getElementById(index).disabled = true
          AppState.count.score++
          if (AppState.count.score === 6) {
            AppState.confirm = true
          }
        } catch (error) {
          Notification.toast('Error' + error, 'error')
        }
      }
    }
  },
  components: {}
}
</script>

<style lang="scss" scoped>

</style>
