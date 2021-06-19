<template>
  <a class="dropdown-item font-sm" @click="addStat(dropProp, diceProp, indexProp)">{{ dropProp }}</a>
</template>

<script>
import { computed, onMounted, reactive } from 'vue'
import { AppState } from '../AppState'
import Notification from '../utils/Notification'

export default {
  name: 'DropDown',
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
      stats: computed(() => AppState.stats)
    })
    onMounted(async() => {

    })
    return {
      state,
      addStat(stat, num, index) {
        try {
          AppState.stats = AppState.stats.filter(s => s !== stat)
          AppState.character.scores[stat.toLowerCase()].value = num
          AppState.activeScores[index] = 0
          AppState.count.score++
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
