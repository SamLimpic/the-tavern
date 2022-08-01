<template>
  <!-- ANCHOR Renders available Character Abilities -->
  <div class="col-md-4 col-10 text-center mb-3">
    <button type="button" class="btn btn-primary text-shadow h-100 w-100" @click="expand(abilityProp)">
      <h4 class="font-sm p-0 m-0">
        {{ abilityProp.title }}
      </h4>
    </button>
  </div>
</template>

<script>
import { onMounted, reactive } from 'vue'
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

    })
    onMounted(async() => {

    })
    return {
      state,
      expand(ability) {
        Notification.expand(ability.title, ability.body)
      }
    }
  },
  components: {}
}
</script>

<style lang="scss" scoped>

</style>
