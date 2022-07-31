<template>
  <!-- ANCHOR Displays available Equipment Choices to be selected -->
  <div class="mt-4 py-1" v-if="state.equipment === indexProp">
    <h3 class="text-center font-md pt-3">
      <u> Choose 1</u>
    </h3>
    <div class="row justify-content-around m-2">
      <!-- SECTION Displays specific Equipment options to be selected -->
      <Equipment v-for="(e, index, key) in choiceProp" :key="key" :equipment-prop="e" />
    </div>
  </div>
</template>

<script>
import { computed, onMounted, reactive } from 'vue'
import { AppState } from '../../AppState'

export default {
  name: 'EquipmentChoice',
  props: {
    choiceProp: {
      type: Object,
      required: true
    },
    indexProp: {
      type: Number,
      required: true
    }
  },
  setup() {
    const state = reactive({
      character: computed(() => AppState.character),
      job: computed(() => AppState.job),
      equipment: computed(() => AppState.count.equipment)
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
