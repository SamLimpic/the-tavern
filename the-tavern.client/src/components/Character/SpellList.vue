<template>
  <!-- ANCHOR Displays available Spells of the Active Character -->
  <div class="col-md-4 col-10 text-center mb-3">
    <button type="button" class="btn btn-primary text-shadow h-100 w-100" :id="spellProp.index" :disabled="state.disabled" @click="selectProp ? addSpell(spellProp) : expand(spellProp)">
      <h4 class="font-sm p-0 m-0">
        {{ spellProp.name }}
      </h4>
    </button>
  </div>
</template>

<script>
import { onMounted, reactive } from 'vue'
import { AppState } from '../../AppState'
import Notification from '../../utils/Notification'

export default {
  name: 'SpellList',
  props: {
    spellProp: {
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
      disabled: false
    })
    onMounted(async() => {

    })
    return {
      state,
      async addSpell(spell) {
        let type
        if (spell.level === 0) {
          type = 'cantrips'
        }
        if (spell.level === 1) {
          type = 'spells'
        }
        if (await Notification.confirmAction(spell.name, spell.desc[0], 'info', 'Select')) {
          Notification.toast(`You chose ${spell.name}!`, 'success')
          AppState.character.spellcasting[type].push(spell)
          AppState.count[`${type}`]++
          state.disabled = true
        }
      },
      expand(spell) {
        Notification.expand(spell.name, spell.desc[0])
      }
    }
  },
  components: {}
}
</script>

<style lang="scss" scoped>

</style>
