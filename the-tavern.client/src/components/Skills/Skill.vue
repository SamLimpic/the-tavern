<template>
  <!-- ANCHOR Displays available Skills to be selected -->
  <div class="col-lg-4 col-md-3 col-sm-4 col-10 text-center my-2 ">
    <button :id="skillProp" type="button" class="btn btn-lg btn-dark w-100" @click="addSkill(skillProp)">
      <h3 class="font-sm p-0 m-0">
        {{ skillProp }}
      </h3>
    </button>
  </div>
</template>

<script>
import { computed, onMounted, reactive } from 'vue'
import { AppState } from '../../AppState'
import Notification from '../../utils/Notification'

export default {
  name: 'Skill',
  props: {
    skillProp: {
      type: String,
      required: true
    }
  },
  setup() {
    const state = reactive({
      character: computed(() => AppState.character),
      job: computed(() => AppState.job),
      skills: computed(() => AppState.count.skills)
    })
    onMounted(async() => {

    })
    return {
      state,
      addSkill(str) {
        Notification.toast(`You chose ${str}`, 'success')
        AppState.character.proficiencies.skills.push(str)
        AppState.count.skills++
        document.getElementById(str).disabled = true
      }
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
