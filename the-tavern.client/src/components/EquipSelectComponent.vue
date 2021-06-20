<template>
  <div class="col-sm-6 col-10 my-2">
    <button type="button" class="btn btn-lg btn-light w-100" @click="addEquipment(equipmentProp)">
      <h4 class="font-sm mb-2" v-if="equipmentProp.weapon && equipmentProp.weapon.length > 1">
        <u class="font-md">Weapon</u> <br>  {{ equipmentProp.weapon[0] }} x {{ equipmentProp.weapon.length }}
      </h4>
      <h4 class="font-sm mb-2" v-else-if="equipmentProp.weapon">
        <u class="font-md">Weapon</u> <br>  {{ equipmentProp.weapon[0] }}
      </h4>
      <h4 class="font-sm mb-2" v-if="equipmentProp.armor && equipmentProp.armor.length > 1">
        <u class="font-md">Armor</u> <br> {{ equipmentProp.armor[0] }} x {{ equipmentProp.armor.length }}
      </h4>
      <h4 class="font-sm mb-2" v-else-if="equipmentProp.armor">
        <u class="font-md">Armor</u> <br> {{ equipmentProp.armor[0] }}
      </h4>
      <h4 class="font-sm mb-2" v-if="equipmentProp.tool && equipmentProp.tool.length > 1">
        <u class="font-md">Tool</u> <br> {{ equipmentProp.tool[0] }} x {{ equipmentProp.tool.length }}
      </h4>
      <h4 class="font-sm mb-2" v-else-if="equipmentProp.tool">
        <u class="font-md">Tool</u> <br> {{ equipmentProp.tool[0] }}
      </h4>
    </button>
  </div>
</template>

<script>
import { computed, onMounted, reactive } from 'vue'
import { AppState } from '../AppState'
import Notification from '../utils/Notification'

export default {
  name: 'EquipSelectComponent',
  props: {
    equipmentProp: {
      type: Object,
      required: true
    }
  },
  setup() {
    const state = reactive({
      character: computed(() => AppState.character),
      job: computed(() => AppState.job)
    })
    onMounted(async() => {
    })
    return {
      state,
      async addEquipment(obj) {
        if ((obj.weapon && obj.weapon[0] === 'Simple') || (obj.weapon && obj.weapon[0] === 'Martial')) {
          await Notification.weaponChoice(obj.weapon[0])
        } else if (obj.weapon && obj.weapon.length > 1) {
          Notification.toast(`You chose ${obj.weapon.length} ${obj.weapon[0]}s!`, 'success')
          obj.weapon.forEach(w => AppState.character.equipment.weapons.push(w))
        } else if (obj.weapon && obj.armor) {
          Notification.toast(`You chose a ${obj.weapon[0]} and ${obj.armor[0]}!`, 'success')
          obj.weapon.forEach(w => AppState.character.equipment.weapons.push(w))
        } else if (obj.armor) {
          Notification.toast(`You chose ${obj.armor[0]}!`, 'success')
          obj.armor.forEach(a => AppState.character.equipment.armor.push(a))
        } else {
          Notification.toast(`You chose a ${obj.weapon[0]}!`, 'success')
          obj.weapon.forEach(w => AppState.character.equipment.weapons.push(w))
        }
        AppState.count.equipment++
      }
    }
  },
  components: {}
}
</script>

<style lang="scss" scoped>

</style>
