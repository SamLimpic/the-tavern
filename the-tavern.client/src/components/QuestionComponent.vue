<template>
  <div class="shadow rounded row justify-content-center bg-light text-center m-4 p-md-4 p-3">
    <div class="col-12">
      <h2 class="font-lg">
        <u>{{ state.activeQuestion.query }}</u>
      </h2>
      <div class="row justify-content-center">
        <AnswersComponent v-for="a in state.activeQuestion.answers" :key="a.value" :answer-prop="a" />
      </div>
    </div>
  </div>
</template>

<script>
import { computed, onMounted, reactive } from 'vue'
import { AppState } from '../AppState'

export default {
  name: 'QuestionComponent',
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
