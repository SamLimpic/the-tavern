<template>
  <!-- ANCHOR Displays the randomly-generated Ability Score rolls -->
  <div class="col-md-2 col-4 text-center mt-3 px-xl-2 px-lg-1 px-md-2 px-sm-4">
    <div class="btn-group dropup w-100">
      <button :id="indexProp" type="button" class="btn bg-white dice-roll btn-outline-dark rounded p-0" data-toggle="dropdown">
        <h3 class="font-xxl" :class="diceProp > 11 ? 'text-success' : diceProp < 9 ? 'text-danger' : 'text-muted'">
          {{ diceProp === 0 ? null : diceProp }}
        </h3>
      </button>
      <div class="dropdown-menu font-sm">
        <DiceDropDown v-for="d in state.stats" :key="d" :drop-prop="d" :dice-prop="diceProp" :index-prop="indexProp" />
      </div>
    </div>
  </div>
</template>

<script>
import { AppState } from '../../AppState'
import { computed, reactive } from 'vue'

export default {
  name: 'DiceRoll',
  props: {
    diceProp: {
      type: Number,
      required: true
    },
    indexProp: {
      type: String,
      required: true
    }
  },
  setup() {
    const state = reactive({
      stats: computed(() => AppState.stats)
    })
    return {
      state
    }
  }
}

</script>

<style scoped>
.dice-roll{
 border: 3px solid var(--dark);
}

/* SECTION Establishes Media Queries for responsive font sizing */

@media (min-width: 0) {
.dice-roll{
 height: 4rem;
  }
.font-xxl {
      font-size: 3.5rem;
  }
}

@media (min-width: 576px) {
.dice-roll{
 height: 4.5rem;
  }
.font-xxl {
      font-size: 4rem;
  }
}

@media (min-width: 768px) {
.dice-roll{
 height: 4.5rem;
  }
.font-xxl {
      font-size: 4rem;
  }
}

@media (min-width: 992px) {
.dice-roll{
 height: 4rem;
  }
.font-xxl {
      font-size: 3.5rem;
  }
}

@media (min-width: 1200px) {
.dice-roll{
 height: 4.5rem;
  }
.font-xxl {
      font-size: 4rem;
  }
}

</style>
