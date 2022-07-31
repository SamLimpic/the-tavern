<template>
  <!-- ANCHOR Displays the list of available Account Characters -->
  <div class="row justify-content-center">
    <div class="col-12 mt-3">
      <button type="button" class="btn btn-lg btn-primary text-shadow w-100" @click="setActiveCharacter(character.id)">
        <h2 class="font-sm">
          <u>{{ character.name }}</u>
        </h2>
        <h3 class="font-xs">
          The {{ character.race }} {{ character.job }}
        </h3>
      </button>
      <transition name="fade">
        <div class="row justify-content-between text-left d-lg-none d-flex" v-if="state.show">
          <!-- SECTION On Mobile, displays all Character information as a Drop Down -->
          <ActiveCharacter :character="character" />
        </div>
      </transition>
    </div>
  </div>
</template>
<script>
import { computed, reactive } from 'vue'
import { AppState } from '../../AppState'
import { charactersService } from '../../services/CharactersService'
export default {
  name: 'CharacterList',
  props: {
    character: {
      type: Object,
      required: true
    }
  },
  setup() {
    const state = reactive({
      show: false,
      characters: computed(() => AppState.characters),
      activeCharacter: computed(() => AppState.activeCharacter)
    })

    return {
      state,
      setActiveCharacter(id) {
        try {
          charactersService.setActiveCharacter(id)
          state.show = !state.show
        } catch (error) {
          Notification.toast('Error: ' + error, 'error')
        }
      }
    }
  },
  components: {}
}
</script>
<style scoped>

</style>
