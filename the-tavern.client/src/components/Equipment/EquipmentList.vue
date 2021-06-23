<template>
  <!-- ANCHOR Displays specific Equipment options to be selected -->
  <div class="col-md-4 col-10 mb-3">
    <button type="button" class="btn btn-secondary no-hover text-shadow h-100 w-100">
      <h3 class="font-xs p-0 m-0">
        {{ equipmentProp }}
      </h3>
    </button>
  </div>
</template>

<script>
import { onMounted, reactive } from 'vue'

export default {
  name: 'EquipmentList',
  props: {
    equipmentProp: {
      type: String,
      required: true
    }
  },
  setup() {
    const state = reactive({

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
