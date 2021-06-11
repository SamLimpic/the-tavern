<template>
  <div class="col-md-2 col-4 text-center my-3 ">
    <button :id="choiceProp" type="button" class="btn btn-dark" @click="choose(choiceProp, abilityProp)">
      <h4 class="p-0 m-0">
        {{ choiceProp }}
      </h4>
    </button>
  </div>
</template>

<script>
import { computed, onMounted, reactive } from 'vue'
import { AppState } from '../AppState'
import Notification from '../utils/Notification'

export default {
  name: 'AbilityChoiceComponent',
  props: {
    choiceProp: {
      type: String,
      required: true
    },
    abilityProp: {
      type: Object,
      required: true
    }
  },
  setup() {
    const state = reactive({
      character: computed(() => AppState.character)
    })
    onMounted(async() => {

    })
    return {
      state,
      choose(choice, ability) {
        Notification.toast(`You chose ${choice}!`, 'success')
        ability.title += `: ${choice}`
        document.getElementById(choice).disabled = true
        AppState.count.abilities++
      }
    }
  },
  components: {}
}
</script>

<style lang="scss" scoped>

</style>
