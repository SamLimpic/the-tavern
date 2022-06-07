<template>
  <!-- ANCHOR Displays available Skills to be selected -->
  <div class="col-lg-4 col-md-3 col-sm-4 col-10 text-center my-2 ">
    <button :id="skillProp.name"
            type="button"
            class="btn btn-lg w-100"
            :class="!selectProp ? 'btn-secondary' : skillProp.pro.includes(state.character.job) ? 'btn-success' : skillProp.con.includes(state.character.job) ? 'btn-danger' : 'btn-dark'"
            :disabled="state.disabled"
            @click="addSkill(skillProp, selectProp)"
    >
      <h3 class="font-sm p-0 m-0">
        {{ skillProp.name }}
      </h3>
      <h4 class="font-xxs p-0 m-0">
        ( {{ skillProp.ability }} )
      </h4>
    </button>
  </div>
</template>

<script>
import { computed, onMounted, reactive } from 'vue'
import { AppState } from '../../AppState'
import Notification from '../../utils/Notification'

export default {
  name: 'SkillList',
  props: {
    skillProp: {
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
      character: computed(() => AppState.character),

      disabled: false,
      color: 'btn-dark'
    })
    onMounted(async() => {

    })
    return {
      state,
      async addSkill(skill, select) {
        if (select) {
          if (await Notification.confirmAction(skill.name, skill.desc, 'info', 'Select')) {
            Notification.toast(`You chose ${skill.name}`, 'success')
            AppState.character.proficiencies.skills.push(skill)
            AppState.count.skills++
            state.disabled = true
          }
        } else {
          Notification.expand(skill.name, skill.ability, skill.desc)
        }
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
