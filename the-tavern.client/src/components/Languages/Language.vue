<template>
  <!-- ANCHOR Displays available Languages to be selected -->
  <div class="col-md-4 col-sm-6 col-10 text-center mb-3 ">
    <button :id="languageProp" type="button" class="btn btn-lg btn-primary text-shadow w-100" :class="!selectProp ? 'no-hover' : 'bg-secondary'" @click="addLanguage(languageProp)">
      <h3 class="font-xs p-0 m-0">
        {{ languageProp }}
      </h3>
    </button>
  </div>
</template>

<script>
import { computed, onMounted, reactive } from 'vue'
import { AppState } from '../../AppState'
import Notification from '../../utils/Notification'

export default {
  name: 'Language',
  props: {
    languageProp: {
      type: String,
      required: true
    },
    selectProp: {
      type: Boolean,
      default: false
    }
  },
  setup() {
    const state = reactive({
      character: computed(() => AppState.character),
      job: computed(() => AppState.job),
      languages: computed(() => AppState.count.languages)
    })
    onMounted(async() => {

    })
    return {
      state,
      addLanguage(str) {
        Notification.toast(`You chose ${str}`, 'success')
        AppState.character.languages.push(str)
        AppState.count.languages++
        document.getElementById(str).disabled = true
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
