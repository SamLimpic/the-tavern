<template>
  <!-- ANCHOR Displays all Toggle Buttons to specify further Information -->
  <div class="col-sm-6 col-12 mt-md-4 mt-3">
    <div class="img-container position-relative">
      <img :src="state.activeCharacter.imgUrl" class="w-100 bg-warning p-1 shadow rounded" alt="">
      <i class="fas fa-edit btn-overlay text-shadow hoverable font-lg" title="Edit Character" aria-label="Edit Character" @click="editCharacter" v-if="state.activeCharacter.id"></i>
      <i class="fas fa-ban btn-delete text-shadow hoverable font-lg" title="Delete Character" aria-label="Delete Character" @click="deleteCharacter(state.activeCharacter.id)" v-if="state.activeCharacter.id"></i>
    </div>
  </div>
  <div class="col-sm-6 col-12 mt-md-4 mt-3 pl-sm-0 ml-sm-0 ml-3 pl-3">
    <h2 class="font-xl mt-md-0">
      <u> {{ state.activeCharacter.name }} </u>
    </h2>
    <h3 class="font-lg">
      {{ state.activeCharacter.race }} {{ state.activeCharacter.job }}
    </h3>
    <h3 class="font-md">
      {{ state.activeCharacter.alignment }} {{ state.activeCharacter.background }}
    </h3>
    <h4 class="font-sm">
      {{ state.activeCharacter.gender }}: {{ state.activeCharacter.age }} Years Old
    </h4>
    <h4 class="font-sm">
      {{ state.activeCharacter.health + state.activeCharacter.scores.constitution.mod }} Hit Points
    </h4>
    <h4 class="font-sm">
      {{ state.activeCharacter.speed }}ft of Movement
    </h4>
  </div>
  <div class="col-12 mt-md-4 mt-sm-3 mb-md-3 mt-sm-1 mt-3">
    <div class="row justify-content-center transition mx-xl-2 mx-0">
      <!-- SECTION Displays Ability Scores & Modifiers for the Active Character -->
      <CharacterStats v-for="(s, key) in state.activeCharacter.scores" :key="key" :stat-prop="s" />
    </div>
  </div>
  <div class="col-12 text-center mt-3">
    <h2>
      <u>Skills</u>
    </h2>
    <div class="row justify-content-center mt-3">
      <!-- SECTION Displays available Skills for the Active Character -->
      <SkillList v-for="(s, index) in state.activeCharacter.proficiencies.skills" :key="index" :skill-prop="s" />
    </div>
    <h2 class="mt-3">
      <u>Abilities</u>
    </h2>
    <div class="row justify-content-center mt-3">
      <!-- SECTION Displays available Abilities for the Active Character -->
      <AbilityList v-for="a in state.activeCharacter.abilities" :key="a" :ability-prop="a" />
    </div>
    <div v-if="state.activeCharacter.spellcasting.spells[0]">
      <h2 class="mt-3">
        <u>Cantrips</u>
      </h2>
      <div class="row justify-content-center mt-3">
        <!-- SECTION Displays available Cantrips for the Active Character -->
        <SpellList v-for="c in state.activeCharacter.spellcasting.cantrips" :key="c" :spell-prop="c" />
      </div>
      <h2 class="mt-3">
        <u>Spells</u>
      </h2>
      <div class="row justify-content-center mt-3">
        <!-- SECTION Displays available Spells for the Active Character -->
        <SpellList v-for="s in state.activeCharacter.spellcasting.spells" :key="s" :spell-prop="s" />
      </div>
    </div>
    <div v-if="state.activeCharacter.equipment.weapons[0]">
      <h2 class="mt-3">
        <u>Weapons</u>
      </h2>
      <div class="row justify-content-center mt-3">
        <!-- SECTION Displays available Abilities for the Active Character -->
        <EquipmentList v-for="e in state.activeCharacter.equipment.weapons" :key="e" :equipment-prop="e" />
      </div>
    </div>
    <div v-if="state.activeCharacter.equipment.armor[0]">
      <h2 class="mt-3">
        <u>Armor</u>
      </h2>
      <div class="row justify-content-center mt-3">
        <!-- SECTION Displays available Abilities for the Active Character -->
        <EquipmentList v-for="e in state.activeCharacter.equipment.armor" :key="e" :equipment-prop="e" />
      </div>
    </div>
    <div v-if="state.activeCharacter.equipment.tools[0]">
      <h2 class="mt-3">
        <u>Tools</u>
      </h2>
      <div class="row justify-content-center mt-3">
        <!-- SECTION Displays available Abilities for the Active Character -->
        <EquipmentList v-for="e in state.activeCharacter.equipment.tools" :key="e" :equipment-prop="e" />
      </div>
      <h2 class="mt-3">
        <u>Languages</u>
      </h2>
      <div class="row justify-content-center mt-3">
        <!-- SECTION Displays available Languages for the Active Character -->
        <Language v-for="l in state.activeCharacter.languages" :key="l" :language-prop="l" />
      </div>
    </div>
  </div>
</template>
<script>
import { computed, reactive } from 'vue'
import { AppState } from '../../AppState'
import { charactersService } from '../../services/CharactersService'
import Notification from '../../utils/Notification'
import { resultsService } from '../../services/ResultsService'
export default {
  name: 'ActiveCharacter',
  setup() {
    const state = reactive({
      show: computed(() => AppState.showStats),
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
          await resultsService.getRace(state.activeCharacter.race)
          await Notification.multiModal(state.activeCharacter.name, state.activeCharacter.age, state.activeCharacter.gender, state.activeCharacter.alignment, state.activeCharacter.imgUrl)
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

.img-container::after {
  content: "";
  display: block;
  /* padding-bottom: 100%; */
}

/* img {
  position: absolute;
  width: 100%;
  height: 100%;
  object-fit: cover;
} */

.text-shadow {
  text-shadow: -1.5px -1.5px 0 #000, 1.5px -1.5px 0 #000, -1.5px 1.5px 0 #000,
    1.5px 1.5px 0 #000;
}

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

  /* SECTION Establishes Media Queries for responsive font sizing */
@media (min-width: 0) {
.img-container {
  width: 90%;
  margin: auto;
}
.font-sm {
    font-size: 1.75rem;
  }
.font-md {
    font-size: 2rem;
  }
.font-lg {
    font-size: 2.25rem;
  }
.font-xl {
      font-size: 2.5rem;
  }
}

@media (min-width: 576px) {
.img-container {
  width: 90%;
  margin-left: auto;
}
.font-sm {
    font-size: 1.25rem;
  }
.font-md {
    font-size: 1.5rem;
  }
.font-lg {
    font-size: 1.75rem;
  }
.font-xl {
      font-size: 2rem;
  }
}

@media (min-width: 768px) {
.img-container {
  width: 90%;
  margin-left: auto;
}
.font-sm {
    font-size: 1.75rem;
  }
.font-md {
    font-size: 2rem;
  }
.font-lg {
    font-size: 2.25rem;
  }
.font-xl {
      font-size: 2.5rem;
  }
}

@media (min-width: 992px) {
.img-container {
  width: 100%;
  margin-left: auto;
}
.font-sm {
    font-size: 1.5rem;
  }
.font-md {
    font-size: 1.75rem;
  }
.font-lg {
    font-size: 2rem;
  }
.font-xl {
      font-size: 2.25rem;
  }
}

@media (min-width: 1200px) {
.img-container {
  width: 90%;
  margin-left: auto;
}
.font-sm {
    font-size: 2rem;
  }
.font-md {
    font-size: 2.25rem;
  }
.font-lg {
    font-size: 2.5rem;
  }
.font-xl {
      font-size: 3rem;
  }
}
</style>
