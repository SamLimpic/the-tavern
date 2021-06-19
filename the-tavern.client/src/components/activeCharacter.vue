<template>
  <div class="col-12 mb-md-5 my-md-0 mb-md-3 my-3">
    <div class="row mt-md-3">
      <CharacterStats v-for="(s, key) in state.activeCharacter.scores" :key="key" :stat-prop="s" />
    </div>
  </div>
  <div class="col-xl-5 col-sm-6 col-12">
    <div class="position-relative">
      <img :src="state.activeCharacter.imgUrl" class="w-100 bg-warning p-1 shadow rounded" alt="">
      <i class="fas fa-edit btn-overlay text-shadow font-lg" aria-label="Edit Character" @click="editCharacter" v-if="state.activeCharacter.id"></i>
      <i class="fas fa-ban btn-delete text-shadow font-lg" aria-label="Delete Character" @click="deleteCharacter(state.activeCharacter.id)" v-if="state.activeCharacter.id"></i>
    </div>
  </div>
  <div class="col-xl-7 col-sm-6 col-12">
    <h2 class="font-lg">
      <u> {{ state.activeCharacter.name || 'Add Name' }} </u>
    </h2>
    <h3 class="font-md">
      The {{ state.activeCharacter.race }} {{ state.activeCharacter.job }}
    </h3>
    <h3 class="font-md">
      {{ state.activeCharacter.alignment }}
    </h3>
    <h4 class="font-sm">
      {{ state.activeCharacter.gender }}: {{ state.activeCharacter.age }} Years Old
    </h4>
    <h4 class="font-sm">
      {{ state.activeCharacter.health }} Hit Points
    </h4>
    <h4 class="font-sm">
      {{ state.activeCharacter.speed }}ft of Movement
    </h4>
  </div>
  <div class="col-12 mt-md-5">
    <h2>
      <u>{{ state.activeCharacter.name }}'s Abilities</u>
    </h2>
    <div class="row justify-content-center mt-md-3">
      <AbilityListComponent v-for="a in state.activeCharacter.abilities" :key="a" :ability-prop="a" />
    </div>
    <div v-if="state.activeCharacter.spellcasting.spells[0]">
      <h2 class="mt-md-5 mt-3">
        <u>{{ state.activeCharacter.name }}'s Spells</u>
      </h2>
      <div class="row justify-content-center mt-md-3">
        <SpellListComponent v-for="c in state.activeCharacter.spellcasting.cantrips" :key="c" :spell-prop="c" />
        <SpellListComponent v-for="s in state.activeCharacter.spellcasting.spells" :key="s" :spell-prop="s" />
      </div>
    </div>
  </div>
</template>
<script>
import { computed, reactive } from 'vue'
import { AppState } from '../AppState'
import { charactersService } from '../services/CharactersService'
import Notification from '../utils/Notification'
export default {
  name: 'ActiveCharacter',
  setup() {
    const state = reactive({
      activeCharacter: computed(() => AppState.activeCharacter),
      showActive: false
    })
    return {
      state,
      async deleteCharacter(id) {
        try {
          if (await Notification.confirmAction('Are you sure?', `${state.activeCharacter.name} will be gone for good!`)) {
            await charactersService.deleteCharacter(id)
            Notification.toast(`${state.activeCharacter.name} has been deleted!`, 'success')
            location.reload()
          } else {
            Notification.toast(`No worries!  ${state.activeCharacter.name} is still here!`, 'info')
          }
        } catch (error) {
          Notification.toast('Error: ' + error, 'error')
        }
      },
      async editCharacter() {
        try {
          await Notification.editCharacter()
          await charactersService.editCharacter(state.activeCharacter)
          Notification.toast('Your character was updated!', 'success')
        } catch (error) {
          Notification.toast('Error: ' + error, 'error')
        }
      }
    }
  }
}
</script>
<style scoped>

.btn-overlay {
  position: absolute;
  border: none;
  background: transparent;
  transform: scaleX(-1);
  left: 15px;
  top: 15px;
  color: var(--success);
  transition: all 0.3s ease-in-out;
}

.btn-overlay:hover {
  color: var(--warning)
}

.btn-delete {
  position: absolute;
  border: none;
  background: transparent;
  transform: scaleX(-1);
  right: 15px;
  top: 15px;
  color: var(--danger);
  transition: all 0.3s ease-in-out;
}

.btn-delete:hover {
  color: var(--warning);
}
</style>
