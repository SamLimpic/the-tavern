<template>
  <div class="about container-fluid">
    <div class="row justify-content-center position-relative h-100">
      <button type="button" class="btn btn-outline-dark btn-overlay d-md-block d-none m-md-3 m-0" @click="toggle('basics')" v-if="state.show !== 'basics'">
        <i class="fas fa-backward font-lg"></i>
      </button>
      <div class="col-lg-8 col-12 p-md-4 p-2" v-if="state.show === 'basics'">
        <StartingComponent />
      </div>
      <div class="col-lg-8 col-12 p-md-4 p-2" v-if="state.show === 'classes'">
        <ClassesAboutComponent />
      </div>
      <div class="col-lg-8 col-12 p-md-4 p-2" v-if="state.show === 'races'">
        <RaceComponent />
      </div>
      <div class="col-lg-8 col-12 p-md-4 p-2" v-if="state.show === 'background'">
        <BackgroundComponent />
      </div>
      <div class="col-lg-8 col-12 p-md-4 p-2" v-if="state.show === 'equipment'">
        <EquipmentComponent />
      </div>
      <div class="col-lg-8 col-12 p-md-4 p-2" v-if="state.show === 'rec'">
        <RecComponent />
      </div>
      <div class="TavernKeeper col-4 d-lg-block d-none bg-primary p-md-4">
        <div class="shadow rounded bg-light text-center m-4 p-md-4 p-3">
          <h2 class="font-md mb-3">
            These tips might be of use to you!
          </h2>
          <div class="row justify-content-center">
            <TavernKeeper />
          </div>
        </div>
      </div>
      <div class="col-12 text-center d-lg-none d-block mt-auto mb-2">
        <button type="button" class="btn btn-dark font-lg mb-4" @click="toggle('basics')" v-if="state.show !== 'basics'">
          Back to Index
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { computed, reactive } from 'vue'
import { AppState } from '../AppState'
export default {
  name: 'AboutPage',
  setup() {
    const state = reactive({
      show: computed(() => AppState.show)
    })

    return {
      state,
      toggle(str) {
        AppState.show = str
      }
    }
  },
  components: {}
}
</script>

<style scoped lang="scss">
.btn-overlay {
  position: absolute;
  border: none;
  background: transparent;
  left: 45px;
  top: 45px;
  z-index: 10;
}
.btn-overlay:hover {
  color: var(--warning);
}
</style>
