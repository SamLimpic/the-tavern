<template>
  <!-- ANCHOR Renders available Character Abilities -->
  <div class="col-md-4 col-10 text-center mb-3">
    <button type="button" class="btn btn-primary text-shadow h-100 w-100" @click="select(selectionProp, typeProp)">
      <h4 class="font-sm p-0 m-0">
        {{ selectionProp.title }}
      </h4>
    </button>
  </div>
</template>

<script>
import { onMounted, reactive } from 'vue'

import { AppState } from '../../AppState'
import Notification from '../../utils/Notification'
import { resultsService } from '../../services/ResultsService'
import router from '../../router'

export default {
  name: 'Selection',
  props: {
    selectionProp: {
      type: Object,
      required: true
    },
    typeProp: {
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
      state,
      async select(selection, type) {
        if (await Notification.confirmAction(selection.title, selection.description, 'info', 'Select')) {
          Notification.toast(`You chose ${selection.title}`, 'success')
          switch (type) {
            case 'Job':
              await resultsService.getJob(selection.title)
              console.log('Job:', AppState.job)
              break
            case 'Race':
              if (selection.subrace.length) {
                AppState.races = selection.subrace
              } else {
                await resultsService.getRace(selection.title)
              }
              console.log('Race:', AppState.race)
              break
            case 'Background':
              await resultsService.getBackground(selection.title)
              AppState.built = true
              router.push('Results')
              console.log('Background:', AppState.background)
              break
          }
          AppState.count.select++
        }
      }
    }
  },
  components: {}
}
</script>

<style lang="scss" scoped>

</style>
