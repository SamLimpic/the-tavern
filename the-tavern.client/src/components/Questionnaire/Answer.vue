<template>
  <!-- ANCHOR Displays the answers to the current Active Question -->
  <div class="col-md-6 col-12 px-4 py-md-4 py-2">
    <button type="button" class="btn btn-lg btn-dark shadow rounded font-xs w-100 text-shadow p-lg-2 p-md-3 px-md-5 py-3 px-2" @click="select(answerProp.value, state.activeQuestion.type)">
      {{ answerProp.body }}
    </button>
  </div>
</template>

<script>
import { computed, onMounted, reactive } from 'vue'
import { AppState } from '../../AppState'
import { questionsService } from '../../services/QuestionsService'
import Notification from '../../utils/Notification'

export default {
  name: 'Answer',
  props: {
    answerProp: {
      type: Object,
      required: true
    }
  },
  setup() {
    const state = reactive({
      activeQuestion: computed(() => AppState.activeQuestion)
    })
    onMounted(async() => {

    })
    return {
      state,
      async select(value, type) {
        try {
          // quizService.nextQuestion(answer, state.question.number)
          await questionsService.buildCharacter(value, type)
        } catch (error) {
          Notification.toast('Error: ' + error, 'error')
        }
      }
    }
  },
  components: {}
}
</script>

<style lang="scss" scoped>
.btn {
  height: 100%;
}
</style>
