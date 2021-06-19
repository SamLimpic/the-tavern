<template>
  <div class="col-2 d-md-block d-none">
    <div class="stat-box text-center rounded bg-light">
      <h3 class="font-md m-0 pt-2">
        <u>{{ statProp.title.substring(0,3).toUpperCase() }}</u>
      </h3>
      <h4 class="font-md m-0">
        +{{ statProp.mod }}
      </h4>
      <h5 class="font-xxl m-0 p-0">
        {{ statProp.value }}
      </h5>
    </div>
  </div>
  <div class="col-4 d-md-none d-block mt-3">
    <div class="mobile-box text-center rounded bg-light">
      <h3 class="font-md m-0 pt-2">
        <u>{{ statProp.title.substring(0,3).toUpperCase() }}</u>
      </h3>
      <h4 class="font-md m-0">
        +{{ statProp.mod }}
      </h4>
      <h5 class="font-xxl m-0">
        {{ statProp.value }}
      </h5>
    </div>
  </div>
</template>
<script>
import { AppState } from '../AppState'
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
      character: computed(() => AppState.character),
      abilityScore: computed(() => AppState.abilityScore),
      activeNum: computed(() => AppState.activeNum),
      activeScore: computed(() => AppState.activeScore)
    })
    onMounted(async() => {

    })
    return {
      state
    }
  }
}

</script>

<style scoped>
.stat-box{
 border: 2px solid var(--dark);
 height: 10rem;
}
.mobile-box{
 border: 2px solid var(--dark);
 height: 8rem;
}

</style>
