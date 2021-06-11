<template>
  <div class="col-12 mb-md-5 my-md-0 mb-md-3 my-3">
    <div class="row mt-md-3">
      <StatsComponent v-for="(s, key) in state.character.scores" :key="key" :stat-prop="s" />
    </div>
  </div>
  <div class="col-md-5 col-12 text-left py-md-0 py-3">
    <img :src="state.character.imgUrl" class="w-100 bg-warning p-1 shadow rounded" alt="">
  </div>
  <div class="col-md-7 col-12 text-left">
    <h2><u> <span class="editName" @click.stop="" spellcheck="false" contenteditable="true" @blur="editName"> {{ state.character.name || 'Add Name' }}</span> </u></h2>
    <h3>The {{ state.character.race }} {{ state.character.job }}</h3>
    <h3>{{ state.character.alignment }}</h3>
    <h4>{{ state.character.gender }}: {{ state.character.age }} Years Old</h4>
    <h4>{{ state.character.health }} Hit Points</h4>
    <h4>{{ state.character.speed }}ft of Movement</h4>
  </div>
  <div class="col-12 mt-md-5">
    <h2>
      <u>{{ state.character.name }}'s Abilities</u>
    </h2>
    <div class="row justify-content-center mt-md-3">
      <AbilityListComponent v-for="a in state.character.abilities" :key="a" :ability-prop="a" />
    </div>
    <div v-if="state.character.spellcasting.spells[0]">
      <h2 class="mt-md-5 mt-3">
        <u>{{ state.character.name }}'s Spells</u>
      </h2>
      <div class="row justify-content-center mt-md-3">
        <SpellListComponent v-for="c in state.character.spellcasting.cantrips" :key="c" :spell-prop="c" />
        <SpellListComponent v-for="s in state.character.spellcasting.spells" :key="s" :spell-prop="s" />
      </div>
    </div>
  </div>
</template>
<script>
import { computed, reactive } from 'vue'
// import { charactersService } from '../services/CharactersService'
// import { useRoute } from 'vue-router'
import { AppState } from '../AppState'
import { charactersService } from '../services/CharactersService'
import Notification from '../utils/Notification'
export default {
  name: 'ActiveCharacter',
  setup() {
    const state = reactive({
      character: computed(() => AppState.activeCharacter),
      showActive: false
    })
    return {
      state,
      async editName(event) {
        try {
          state.character.name = event.target.innerText
          await charactersService.editName(state.character)
        } catch (error) {
          Notification.toast('Error: ' + error, 'error')
        }
      }
    }
  }
}
</script>
<style scoped>
.editName{
  min-width: 2rem;
}
.editName:hover{
  border: 1px dashed var(--primary);
}
img{
  max-width: 40vh;
}
</style>
