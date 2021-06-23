<template>
  <!-- ANCHOR Displays Character Skills -->
  <div class="col-lg-4 col-sm-4 col-10 text-center my-2 ">
    <button :id="skillProp" type="button" class="btn btn-secondary no-hover text-shadow h-100 w-100">
      <h3 class="font-xs p-0 m-0">
        {{ skillProp }}
      </h3>
    </button>
  </div>
</template>

<script>
import { onMounted, reactive } from 'vue'

export default {
  name: 'SkillList',
  props: {
    skillProp: {
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
.btn {
  height: 100%;
}
</style>
