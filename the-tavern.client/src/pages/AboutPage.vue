<template>
  <!-- ANCHOR This page is devoted to explaining the basics of Dungeons and Dragons for new players.
  It features separate components for each About section, which can be selected from the main menu. -->
  <div class="about container-fluid">
    <div class="row justify-content-center position-relative h-100">
      <button type="button" class="btn btn-outline-secondary btn-overlay d-md-block d-none m-md-3 m-0" @click="toggle('start')" v-if="state.show !== 'start'">
        <i class="fas fa-backward font-lg text-shadow"></i>
      </button>

      <div class="col-lg-8 col-12 p-md-4 p-2" v-if="state.show === 'start'">
        <!-- SECTION This is the introductory page, as well as the navigation page on mobile. -->
        <AboutStart />
      </div>
      <div class="col-lg-8 col-12 p-md-4 p-2" v-if="state.show === 'classes'">
        <!-- SECTION Breaks down the basics of Character Classes in D&D. -->
        <AboutClasses />
      </div>

      <div class="col-lg-8 col-12 p-md-4 p-2" v-if="state.show === 'races'">
        <!-- SECTION Breaks down the basics of Character Races in D&D. -->
        <AboutRaces />
      </div>

      <div class="col-lg-8 col-12 p-md-4 p-2" v-if="state.show === 'backgrounds'">
        <!-- SECTION Breaks down the basics of Character Backgrounds in D&D. -->
        <AboutBackgrounds />
      </div>

      <div class="col-lg-8 col-12 p-md-4 p-2" v-if="state.show === 'equipment'">
        <!-- SECTION Breaks down the basics of Equipment in D&D. -->
        <AboutEquipment />
      </div>

      <div class="col-lg-8 col-12 p-md-4 p-2" v-if="state.show === 'resources'">
        <!-- SECTION Offers links to additional resources about D&D. -->
        <AboutResources />
      </div>

      <div class="col-4 d-lg-block d-none bg-secondary p-md-4">
        <div class="shadow rounded bg-light text-center m-4 p-md-4 p-3">
          <h2 class="font-sm mb-3">
            These tips might be of use to you!
          </h2>
          <div class="row justify-content-center">
            <!-- SECTION Navigation Buttons to toggle visible About Sections. -->
            <AboutNavigation />
          </div>
        </div>
      </div>

      <!-- NOTE Button redirects back to Start on Small screens-->
      <div class="col-12 text-center d-lg-none d-block mt-auto mb-2">
        <button type="button" class="btn btn-dark font-sm mb-4" @click="toggle('start')" v-if="state.show !== 'start'">
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
  name: 'About',
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
