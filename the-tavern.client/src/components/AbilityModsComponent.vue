<template>
  <div class="col-xl-2 col-lg-3 col-md-2 col-sm-3 col-6 text-center my-3 ">
    <button :id="modProp" type="button" class="btn btn-dark w-100" @click="addMod(modProp)">
      <h4 class="font-md p-0 m-0">
        {{ modProp.substring(0,3).toUpperCase() }}
      </h4>
    </button>
  </div>
</template>

<script>
import { computed, onMounted, reactive } from 'vue'
import { AppState } from '../AppState'
import Notification from '../utils/Notification'

export default {
  name: 'AbilityModsComponent',
  props: {
    modProp: {
      type: String,
      required: true
    }
  },
  setup() {
    const state = reactive({
      character: computed(() => AppState.character),
      job: computed(() => AppState.job)
    })
    onMounted(async() => {

    })
    return {
      state,
      addMod(str) {
        Notification.toast(`You chose ${str}!`, 'success')
        AppState.character.scores[str.toLowerCase()].mod++
        AppState.count.modChoice++
        document.getElementById(str).disabled = true
      }
    }
  },
  components: {}
}
</script>

<style lang="scss" scoped>

</style>
