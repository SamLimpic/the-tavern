<template>
  <!-- ANCHOR Displays Ability Scores & Modifiers for Active Character -->
  <div class="col-2 hoverable d-sm-flex d-none p-1 text-center">
    <!-- SECTION Desktop Column Layout
    Toggles between Raw Scores & Modifiers on Click -->
    <div class="stat-box rounded position-relative bg-light" @click="toggle(false)" v-if="state.show">
      <i class="fas fa-adjust icon icon-show"></i>
      <h3 class="font-xl m-0 pt-2 pb-1">
        <u>{{ statProp.title.substring(0,3).toUpperCase() }}</u>
      </h3>
      <h4 class="text-success font-md m-0" v-if="statProp.mod > 0">
        +{{ statProp.mod }}
      </h4>
      <h4 class="text-muted strike-through font-md m-0" v-else-if="statProp.mod === 0">
        &nbsp;{{ statProp.mod }}&nbsp;
      </h4>
      <h4 class="text-danger font-md m-0" v-else>
        {{ statProp.mod }}
      </h4>
    </div>
    <div class="stat-box rounded position-relative bg-light" @click="toggle(true)" v-else>
      <i class="fas fa-adjust icon icon-hide"></i>
      <h3 class="font-xl m-0 pt-2">
        <u>{{ statProp.title.substring(0,3).toUpperCase() }}</u>
      </h3>
      <h5 class="text-success font-lg m-0" v-if="statProp.mod > 0">
        {{ statProp.value }}
      </h5>
      <h5 class="text-muted font-lg m-0" v-else-if="statProp.mod === 0">
        {{ statProp.value }}
      </h5>
      <h5 class="text-danger font-lg m-0" v-else>
        {{ statProp.value }}
      </h5>
    </div>
  </div>
  <div class="col-4 hoverable d-sm-none d-flex px-1 text-center">
    <!-- SECTION Mobile Column Layout
    Toggles between Raw Scores & Modifiers on Click -->
    <div class="stat-box rounded position-relative bg-light" @click="toggle(false)" v-if="state.show">
      <i class="fas fa-adjust icon icon-show"></i>
      <h3 class="font-xl m-0 pt-2 pb-1">
        <u>{{ statProp.title.substring(0,3).toUpperCase() }}</u>
      </h3>
      <h4 class="text-success font-md m-0" v-if="statProp.mod > 0">
        +{{ statProp.mod }}
      </h4>
      <h4 class="text-muted strike-through font-md m-0" v-else-if="statProp.mod === 0">
        &nbsp;{{ statProp.mod }}&nbsp;
      </h4>
      <h4 class="text-danger font-md m-0" v-else>
        {{ statProp.mod }}
      </h4>
    </div>
    <div class="stat-box rounded position-relative bg-light" @click="toggle(true)" v-else>
      <i class="fas fa-adjust icon icon-hide"></i>
      <h3 class="font-xl m-0 pt-2">
        <u>{{ statProp.title.substring(0,3).toUpperCase() }}</u>
      </h3>
      <h5 class="text-success font-lg m-0" v-if="statProp.mod > 0">
        {{ statProp.value }}
      </h5>
      <h5 class="text-muted font-lg m-0" v-else-if="statProp.mod === 0">
        {{ statProp.value }}
      </h5>
      <h5 class="text-danger font-lg m-0" v-else>
        {{ statProp.value }}
      </h5>
    </div>
  </div>
</template>
<script>
import { AppState } from '../../AppState'
import { computed, reactive, onMounted } from 'vue'

export default {
  name: 'CharacterStats',
  props: {
    statProp: {
      type: Object,
      required: true
    }
  },
  setup() {
    const state = reactive({
      show: computed(() => AppState.showStats),
      character: computed(() => AppState.character),
      abilityScore: computed(() => AppState.abilityScore),
      activeNum: computed(() => AppState.activeNum),
      activeScore: computed(() => AppState.activeScore)
    })
    onMounted(async() => {

    })
    return {
      state,
      toggle(bool) {
        AppState.showStats = bool
      }
    }
  }
}

</script>

<style scoped>
.stat-box{
 border: 3px solid var(--dark);
 margin:auto;
 margin-top: 1rem;
 width: 100%;
}

/* SECTION Establishes Media Queries for responsive font sizing */

@media (min-width: 0) {
.stat-box{
 height: 7.75rem;
  }
.font-md {
    font-size: 2.75rem;
  }
.font-lg {
    font-size: 3rem;
  }
.font-xl {
      font-size: 2.5rem;
  }
}

@media (min-width: 576px) {
.stat-box{
 height: 7rem;
  }
.font-md {
    font-size: 2.5rem;
  }
.font-lg {
    font-size: 3rem;
  }
.font-xl {
      font-size: 2rem;
  }
}

@media (min-width: 768px) {
.stat-box{
 height: 7.75rem;
  }
.font-md {
    font-size: 2.5rem;
  }
.font-lg {
    font-size: 3rem;
  }
.font-xl {
      font-size: 2.5rem;
  }
}

@media (min-width: 992px) {
.stat-box{
 height: 6.5rem;
  }
.font-md {
    font-size: 2.25rem;
  }
.font-lg {
    font-size: 2.75rem;
  }
.font-xl {
      font-size: 1.75rem;
  }
}

@media (min-width: 1200px) {
.stat-box{
 height: 9rem;
  }
.font-md {
    font-size: 3.5rem;
  }
.font-lg {
    font-size: 4rem;
  }
.font-xl {
      font-size: 2.75rem;
  }
}

</style>
