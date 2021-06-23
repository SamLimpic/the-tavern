<template>
  <!-- ANCHOR Renders available Character Abilities -->
  <div class="col-md-4 col-10 text-center mb-3">
    <button type="button" class="btn btn-secondary no-hover text-shadow h-100 w-100">
      <h4 class="font-sm p-0 m-0">
        {{ abilityProp.title }}
      </h4>
    </button>
  </div>
</template>

<script>
import { computed, onMounted, reactive } from 'vue'
import { AppState } from '../../AppState'
import Notification from '../../utils/Notification'

export default {
  name: 'AbilityList',
  props: {
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
      expand(ability) {
        Notification.expand(ability)
      }
    }
  },
  components: {}
}
</script>

<style lang="scss" scoped>

</style>
