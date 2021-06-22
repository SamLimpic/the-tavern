<template>
  <!-- ANCHOR Displays Ability Scores & Stat Modifiers -->
  <div class="col-2 d-md-block d-none px-xl-2 px-lg-1 px-md-2" dropzone="zone" @dragover.prevent @drop.prevent="moveNum(state.activeNum, statProp.title, statProp.mod)">
    <!-- SECTION Desktop Column Layout utilizing Drag and Drop-->
    <div class="stat-box text-center rounded bg-light">
      <h3 class="font-md m-0">
        <u>{{ statProp.title.substring(0,3).toUpperCase() }}</u>
      </h3>
      <h4 class="font-xl text-danger" v-if="statProp.value > 0 && statProp.value < 11">
        {{ statProp.value + statProp.mod }}
      </h4>
      <h4 class="font-xl text-muted" v-else-if="statProp.value === 10">
        {{ statProp.value + statProp.mod }}
      </h4>
      <h4 class="font-xl text-success" v-if="statProp.value > 11">
        {{ statProp.value + statProp.mod }}
      </h4>
      <h5 class="font-lg text-success pt-1" v-if="statProp.mod > 0 && statProp.value < 1 ">
        +{{ statProp.mod }}
      </h5>
    </div>
  </div>

  <div class="col-4 d-md-none d-block mt-3 px-sm-4 px-2">
    <!-- SECTION Mobile Column Layout -->
    <div class="stat-box text-center rounded bg-light">
      <h3 class="font-md m-0 pt-2">
        <u>{{ statProp.title.substring(0,3).toUpperCase() }}</u>
      </h3>
      <h4 class="font-xl text-danger" v-if="statProp.value > 0 && statProp.value < 11">
        {{ statProp.value + statProp.mod }}
      </h4>
      <h4 class="font-xl text-muted" v-else-if="statProp.value === 10">
        {{ statProp.value + statProp.mod }}
      </h4>
      <h4 class="font-xl text-success" v-if="statProp.value > 11">
        {{ statProp.value + statProp.mod }}
      </h4>
      <h5 class="font-lg text-success pt-1" v-if="statProp.mod > 0 && statProp.value < 1 ">
        +{{ statProp.mod }}
      </h5>
    </div>
  </div>
</template>
<script>
import { AppState } from '../../AppState'
import { computed, reactive, onMounted } from 'vue'
export default {
  name: 'Stat',
  props: {
    statProp: {
      type: Object,
      required: true
    }
  },
  setup() {
    const state = reactive({
      character: computed(() => AppState.character),
      abilityScore: computed(() => AppState.abilityScore),
      activeNum: computed(() => AppState.activeNum),
      activeScore: computed(() => AppState.activeScore)
    })
    onMounted(async() => {

    })
    return {
      state,
      moveNum(num, title, mod) {
        AppState.character.scores[title.toLowerCase()].value = num
        AppState.scores[title.toLowerCase()].value = num + mod
        AppState.scores[title.toLowerCase()].mod = Math.floor((AppState.scores[title.toLowerCase()].value - 10) / 2)
        AppState.activeScores[state.activeScore] = 0
        AppState.count.score++
      }

    }
  }
}

</script>

<style scoped>
.stat-box{
 border: 3px solid var(--dark);
}

/* SECTION Establishes Media Queries for responsive font sizing */

@media (min-width: 0) {
.stat-box{
 height: 6.25rem;
  }
.font-md {
    font-size: 2rem;
  }
.font-lg {
    font-size: 2.25rem;
  }
.font-xl {
      font-size: 2.75rem;
  }
}

@media (min-width: 576px) {
.stat-box{
 height: 8rem;
  }
.font-md {
    font-size: 3rem;
  }
.font-lg {
    font-size: 2.75rem;
  }
.font-xl {
      font-size: 3.25rem;
  }
}

@media (min-width: 768px) {
.stat-box{
 height: 7.5rem;
  }
.font-md {
    font-size: 2.75rem;
  }
.font-lg {
    font-size: 3rem;
  }
.font-xl {
      font-size: 3.5rem;
  }
}

@media (min-width: 992px) {
.stat-box{
 height: 6rem;
  }
.font-md {
    font-size: 2.25rem;
  }
.font-lg {
    font-size: 2.5rem;
  }
.font-xl {
      font-size: 3rem;
  }
}

@media (min-width: 1200px) {
.stat-box{
 height: 8rem;
  }
.font-md {
    font-size: 3rem;
  }
.font-lg {
    font-size: 3.25rem;
  }
.font-xl {
      font-size: 3.75rem;
  }
}
</style>
