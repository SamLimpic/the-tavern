<template>
  <div class="col-12 text-center">
    <h2 class="p-0 m-0">
      {{ abilityProp.title }}: <i>Choose {{ abilityProp.choose }}</i>
    </h2>
    <div class="row justify-content-around">
      <AbilityChoiceComponent v-for="c in abilityProp.from" :key="c" :choice-prop="c" :ability-prop="abilityProp" />
    </div>
  </div>
</template>

<script>
import { computed, onMounted, reactive } from 'vue'
import { AppState } from '../AppState'

export default {
  name: 'AbilityComponent',
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
      state
    }
  },
  components: {}
}
</script>

<style lang="scss" scoped>

</style>
