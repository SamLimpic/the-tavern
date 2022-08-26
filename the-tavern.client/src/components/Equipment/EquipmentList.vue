<template>
  <!-- ANCHOR Displays specific Equipment options to be selected -->
  <div class="col-md-4 col-10 mb-3">
    <button type="button" class="btn btn-primary text-shadow h-100 w-100" @click="expand(equipmentProp, typeProp)">
      <h3 class="font-sm p-0 m-0">
        {{ equipmentProp.title }} <span v-if="equipmentProp.count > 1"> x{{ equipmentProp.count }}</span>
      </h3>
    </button>
  </div>
</template>

<script>
import { onMounted, reactive } from 'vue'
import Notification from '../../utils/Notification'

export default {
  name: 'EquipmentList',
  props: {
    equipmentProp: {
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
      expand(equipment, type) {
        if (type === 'weapon') {
          const body = `${equipment.value.min}d${equipment.value.max} ${equipment.properties[0]} Damage`
          let options = ''
          for (let i = 1; i < equipment.properties.length; i++) {
            options += ' ' + equipment.properties[i] + ' +'
          }
          Notification.expandEquipment(equipment.title, body, options.slice(0, -1))
        }
        if (type === 'armor') {
          let body = `Armor Class: ${equipment.value.min} + Dexterity`
          let options = `${equipment.category} Armor`
          if (equipment.value.max) {
            body += ` (Maximum of ${equipment.value.max})`
          }
          if (equipment.category === 'Shield') {
            body = `Armor Class + ${equipment.value.min}`
            options = ''
          }
          Notification.expandEquipment(equipment.title, body, options)
        }
      }
    }
  },
  components: {}
}
</script>

<style lang="scss" scoped>

</style>
