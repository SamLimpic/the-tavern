<template>
  <!-- ANCHOR Displays the Progress Bar, which changes dynamically based on user input -->
  <h3 class="mb-0 text-left">
    {{ attributeProp[0].toUpperCase() + attributeProp.slice(1) }}
  </h3>
  <div class="progress mb-3">
    <div :class="'progress-bar ' + state.colors[attributeProp]"
         role="progressbar"
         :style="`width: ${state.role * 33}%`"
         :aria-valuenow="`${state.role * 33}`"
         aria-valuemin="0"
         aria-valuemax="100"
         v-if="state.role"
    ></div>
    <div :class="'progress-bar ' + state.colors[attributeProp]"
         role="progressbar"
         :style="`width: ${state.style * 33}%`"
         :aria-valuenow="`${state.style * 33}`"
         aria-valuemin="0"
         aria-valuemax="100"
         v-if="state.style"
    ></div>
  </div>
</template>

<script>
import { computed, onMounted, reactive } from 'vue'
import { AppState } from '../../AppState'

export default {
  name: 'ProgressBar',
  props: {
    attributeProp: {
      type: String,
      required: true
    }
  },
  setup(props) {
    const state = reactive({
      loading: true,
      activeQuestion: computed(() => AppState.activeQuestion),
      role: computed(() => AppState.attributes.role[props.attributeProp]),
      style: computed(() => AppState.attributes.style[props.attributeProp]),
      count: computed(() => AppState.count),

      // NOTE determines the Progress Bar Color depending on Role / Style Prop
      colors: {
        tank: 'bg-danger',
        damage: 'bg-warning',
        support: 'bg-success',
        utility: 'bg-info',
        weapons: 'bg-danger',
        spells: 'bg-info',
        balance: 'bg-success'
      }
    })
    onMounted(async() => {

    })
    return {
      state
    }
  }
}
</script>

<style>
.progress {
 border: 3px solid var(--dark);
 height: 2rem;
}
</style>
