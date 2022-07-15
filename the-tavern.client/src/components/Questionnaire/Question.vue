<template>
  <!-- ANCHOR Displays the current Active Question -->
  <div class="col-12">
    <h2 class="font-md">
      <u>{{ state.activeQuestion.query }}</u><br>
      <span class="font-sm" v-if="state.activeQuestion.text">{{ state.activeQuestion.text }}</span>
    </h2>
    <div class="row justify-content-center">
      <!-- SECTION Displays the answers to the current Active Question -->
      <Answer v-for="a in state.activeQuestion.answers" :key="a.value" :answer-prop="a" />
    </div>
  </div>
</template>

<script>
import { computed, onMounted, reactive } from 'vue'
import { AppState } from '../../AppState'

export default {
  name: 'Question',
  setup() {
    const state = reactive({
      activeQuestion: computed(() => AppState.activeQuestion)
    })
    onMounted(async() => {

    })
    return {
      state
    }
  },
  components: {}
}
</script>

<style lang="scss" scoped>

</style>
