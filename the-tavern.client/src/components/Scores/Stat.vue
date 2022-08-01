<template>
  <!-- ANCHOR Displays Ability Scores & Stat Modifiers -->
  <div class="col-md-2 col-4 px-xl-2 px-lg-1 px-md-2 mt-3">
    <div class="stat-box text-center rounded bg-white" :class="state.job.proficiencies.saves.includes(statProp.title) ? 'text-success border-success' : state.job.proficiencies.fails.includes(statProp.title) ? 'text-danger border-danger' : ''">
      <h3 class="font-md m-0">
        <u>{{ statProp.title.substring(0,3).toUpperCase() }}</u>
      </h3>
      <h4 class="font-xl" :class="selectProp ? '' : statProp.value > 11 ? 'text-success' : statProp.value < 10 ? 'text-danger' : 'text-muted'">
        <span class="text-muted" v-if="statProp.mod > 0 && statProp.value < 1">+{{ statProp.mod }}</span>
        <span v-if="statProp.value > 0">{{ statProp.value }}</span>
      </h4>
    </div>
  </div>
</template>

<script>
import { AppState } from '../../AppState'
import { computed, reactive } from 'vue'

export default {
  name: 'Stat',
  props: {
    statProp: {
      type: Object,
      required: true
    },
    selectProp: {
      type: Boolean,
      default: false
    }
  },
  setup() {
    const state = reactive({
      job: computed(() => AppState.job)
    })
    return {
      state
    }
  }
}

</script>

<style scoped>
.stat-box{
 border: 3px solid var(--dark);
}
.success-border{
  border: 3px solid var(--success) !important;
}
.warning-border{
 border: 3px solid var(--warning) !important;
}
.danger-border{
 border: 3px solid var(--danger) !important;
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
