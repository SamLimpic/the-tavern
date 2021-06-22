<template>
  <!-- ANCHOR Displays available Spells of the Active Character -->
  <div class="col-md-4 col-10 text-center mb-3">
    <button :id="spellProp" type="button" class="btn btn-dark w-100">
      <h4 class="p-0 m-0">
        {{ spellProp }}
      </h4>
    </button>
  </div>
</template>

<script>
import { computed, onMounted, reactive } from 'vue'
import { AppState } from '../../AppState'

export default {
  name: 'SpellList',
  props: {
    spellProp: {
      type: String,
      required: true
    }
  },
  setup() {
    const state = reactive({
      character: computed(() => AppState.character)
    })
    onMounted(async() => {

    })
    return {
      state
    }
  },
  components: {}
}
</script>

<style lang="scss" scoped>

</style>
