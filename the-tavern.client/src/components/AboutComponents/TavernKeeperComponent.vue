<template>
  <div class="col-lg-12 col-6 text-center mb-3">
    <button type="button" class="btn btn-dark w-100 font-sm py-2" title="classes" @click="toggle('classes')">
      Classes
    </button>
  </div>
  <div class="col-lg-12 col-6 text-center mb-3">
    <button type="button" class="btn btn-dark w-100 font-sm py-2" title="DnD races" @click="toggle('races')">
      Races
    </button>
  </div>
  <div class="col-lg-12 col-6 text-center mb-3">
    <button type="button" class="btn btn-dark w-100 font-sm py-2" title="backgrounds" @click="toggle('background')">
      Backgrounds
    </button>
  </div>
  <div class="col-lg-12 col-6 text-center mb-3">
    <button type="button" class="btn btn-dark w-100 font-sm py-2" title="equipment" @click="toggle('equipment')">
      Equipment
    </button>
  </div>
  <div class="col-lg-12 col-8 text-center mb-1">
    <button type="button" class="btn btn-dark w-100 font-sm py-2" title="basic rules" @click="toggle('rec')">
      Links & Resources
    </button>
  </div>
</template>

<script>
import { reactive } from '@vue/reactivity'
import { AppState } from '../../AppState'
export default {
  name: 'TavernKeeper',
  setup() {
    const state = reactive({
    })

    return {
      state,
      toggle(str) {
        AppState.show = str
      }
    }
  }
}
</script>

<style scoped lang="scss">

</style>
