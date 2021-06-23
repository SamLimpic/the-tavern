<template>
  <!-- ANCHOR Displays the randomly-generated Ability Score rolls -->
  <div class="col-2 d-md-block d-none text-center px-xl-2 px-lg-1 px-md-2">
    <!-- SECTION Desktop Column Layout utilizing Drag and Drop-->
    <div class="bg-light dice-roll rounded" draggable="true" @dragstart="moveNum(diceProp, indexProp)">
      <h3 class="font-xxl text-danger" v-if="diceProp > 0 && diceProp < 10">
        {{ diceProp }}
      </h3>
      <h3 class="font-xxl text-success" v-else-if="diceProp > 10">
        {{ diceProp }}
      </h3>
      <h3 class="font-xxl text-muted" v-else-if="diceProp === 10">
        {{ diceProp }}
      </h3>
    </div>
  </div>

  <div class="col-4 d-md-none d-block text-center mt-3 px-sm-4 px-2">
    <!-- SECTION Mobile Column Layout -->
    <div class="btn-group dropup w-100">
      <button type="button" class="btn dice-roll btn-outline-dark rounded p-0" data-toggle="dropdown">
        <h3 class="font-xxl text-danger" v-if="diceProp > 0 && diceProp < 11">
          {{ diceProp }}
        </h3>
        <h3 class="font-xxl text-muted" v-else-if="diceProp === 10">
          {{ diceProp }}
        </h3>
        <h3 class="font-xxl text-success" v-else-if="diceProp > 10">
          {{ diceProp }}
        </h3>
      </button>
      <div class="dropdown-menu font-sm">
        <!-- SECTION Mobile Dropdown Menu in place of the Desktop Drag and Drop -->
        <DiceDropDown v-for="d in state.stats" :key="d" :drop-prop="d" :dice-prop="diceProp" :index-prop="indexProp" />
      </div>
    </div>
  </div>
</template>

<script>
import { AppState } from '../../AppState'
import { computed, reactive, onMounted } from 'vue'

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
