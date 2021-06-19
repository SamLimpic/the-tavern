<template>
  <div class="col-2 d-md-block d-none text-center">
    <div class="bg-light dice-roll rounded" draggable="true" @dragstart="moveNum(diceProp, indexProp)">
      <h3 class="font-xxl" v-if="diceProp > 0">
        {{ diceProp }}
      </h3>
    </div>
  </div>

  <div class="col-4 d-md-none d-block text-center mt-3">
    <div class="btn-group dropup w-100">
      <button type="button" class="btn dice-roll btn-outline-dark rounded" data-toggle="dropdown">
        <h3 class="font-xxl" v-if="diceProp > 0">
          {{ diceProp }}
        </h3>
      </button>
      <div class="dropdown-menu font-sm">
        <DropDown v-for="d in state.stats" :key="d" :drop-prop="d" :dice-prop="diceProp" :index-prop="indexProp" />
      </div>
    </div>
  </div>
</template>

<script>
import { AppState } from '../AppState'
import { computed, reactive, onMounted } from 'vue'

export default {
  name: 'DiceNum',
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
      abilityScore: computed(() => AppState.abilityScore),
      stats: computed(() => AppState.stats)
    })
    onMounted(async() => {

    })
    return {
      state,
      async moveNum(num, index) {
        AppState.activeNum = num
        AppState.activeScore = index
      }

    }
  }
}

</script>

<style scoped>
.dice-roll{
 border: 2px solid var(--dark);
 height: 4rem;
}
</style>
