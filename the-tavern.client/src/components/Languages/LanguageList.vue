<template>
  <!-- ANCHOR Displays Character Languages -->
  <div class="col-md-4 col-10 text-center mb-3">
    <button type="button" class="btn btn-secondary no-hover text-shadow h-100 w-100">
      <h3 class="font-xs p-0 m-0">
        {{ languageProp }}
      </h3>
    </button>
  </div>
</template>

<script>
import { onMounted, reactive } from 'vue'

export default {
  name: 'LanguageList',
  props: {
    languageProp: {
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
