<template>
  <!-- ANCHOR Displays all Toggle Buttons to specify further Information -->
  <div class="col-lg-12 col-6 text-center mb-3">
    <button type="button" class="btn btn-dark py-2" title="classes" @click="toggle('classes')">
      Classes
    </button>
  </div>
  <div class="col-lg-12 col-6 text-center mb-3">
    <button type="button" class="btn btn-dark py-2" title="DnD races" @click="toggle('races')">
      Races
    </button>
  </div>
  <div class="col-lg-12 col-6 text-center mb-3">
    <button type="button" class="btn btn-dark py-2" title="backgrounds" @click="toggle('backgrounds')">
      Backgrounds
    </button>
  </div>
  <div class="col-lg-12 col-6 text-center mb-3">
    <button type="button" class="btn btn-dark py-2" title="equipment" @click="toggle('equipment')">
      Equipment
    </button>
  </div>
  <div class="col-lg-12 col-8 text-center mb-1">
    <button type="button" class="btn btn-dark py-2" title="basic rules" @click="toggle('resources')">
      Links & Resources
    </button>
  </div>
</template>

<script>
import { reactive } from '@vue/reactivity'
import { AppState } from '../../AppState'
export default {
  name: 'AboutNavigation',
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
/* SECTION Establishes Media Queries for responsive font sizing */

@media (min-width: 0) {
  .btn {
    width: 100%;
    font-size: 1.25rem;
  }
}

@media (min-width: 576px) {
  .btn {
    width: 75%;
    font-size: 1.25rem;
  }
}

@media (min-width: 768px) {
  .btn {
    width: 75%;
    font-size: 1.5rem;
  }
}

@media (min-width: 992px) {
  .btn {
    width: 100%;
    font-size: 1.5rem;
  }
}

@media (min-width: 1200px) {
  .btn {
    width: 100%;
    font-size: 1,75rem;
  }
}

</style>
