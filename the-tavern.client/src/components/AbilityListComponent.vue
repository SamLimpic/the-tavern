<template>
  <div class="col-md-4 col-10 text-center mb-3">
    <button :id="abilityProp" type="button" class="btn btn-dark w-100" @click="expand(abilityProp)">
      <h4 class="p-0 m-0">
        {{ abilityProp.title }}
      </h4>
    </button>
  </div>
</template>

<script>
import { computed, onMounted, reactive } from 'vue'
import { AppState } from '../AppState'
import Notification from '../utils/Notification'

export default {
  name: 'AbilityListComponent',
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
