<template>
  <!-- ANCHOR This page displays cascading Character Information components after the Character Class, Race, and Background has been determined. -->
  <div class="results container-fluid">
    <div class="row justify-content-center h-100">
      <!-- SECTION Cascading Character Attribute selection options -->
      <div class="col-lg-8 col-12 p-md-4 p-2">
        <!-- STUB Loading Icon is visible while data is pulled from Server-->
        <div class="shadow rounded bg-light text-center m-4 p-md-4 p-3" v-if="state.loading">
          <h2 class="font-xl">
            <u>Loading your Character</u>
          </h2>
          <i class="fas fa-dice-d20 fa-spin text-warning font-xxl mt-3"></i>
        </div>
        <div class="shadow rounded bg-light text-center m-4 p-sm-4 p-3" v-else>
          <h2 class="font-lg">
            <u> You have selected a {{ state.character.race }} {{ state.character.job }}!</u>
          </h2>

          <!-- SECTION The available Skill options -->
          <div v-if="state.skills < state.chooseSkills.choose">
            <h3 class="font-sm">
              Choose {{ state.chooseSkills.choose }} of your available Skills!
            </h3>
            <h2 class="font-xs">
              <b class="text-success"> GREEN </b> skills are encouraged for your build, while <b class="text-danger"> RED </b> skills are discouraged.
            </h2>
            <div class="row justify-content-center">
              <SkillList v-for="(s, index) in state.chooseSkills.from" :key="index" :skill-prop="s" :select-prop="true" />
            </div>
          </div>

          <!-- SECTION The available Language options -->
          <div v-else-if="state.languages < state.chooseLanguages.choose">
            <h3 class="font-sm">
              Choose {{ state.chooseLanguages.choose }} of your available Languages!
            </h3>
            <div class="row justify-content-center">
              <Language v-for="l in state.chooseLanguages.from" :key="l" :language-prop="l" :select-prop="true" />
            </div>
          </div>

          <!-- SECTION The available Equipment options -->
          <div v-else-if="state.equipment < state.job.equipment[0].choices.length">
            <h3 class="font-sm">
              Choose 1 from each of these sets of available Equipment!
            </h3>
            <EquipmentChoice v-for="(c, key) in state.job.equipment[0].choices" :key="key" :choice-prop="c" :index-prop="key" />
          </div>

          <!-- SECTION The available Ability options -->
          <div v-else-if="state.chooseAbilities && state.chooseAbilities.length > state.abilities">
            <h3 class="font-sm">
              Time to choose some of your abilities!
            </h3>
            <div class="row justify-content-around">
              <ActiveAbility v-for="(a, index) in state.chooseAbilities" :key="index" :ability-prop="a" :index-prop="index" />
            </div>
          </div>

          <!-- SECTION The available Cantrip options -->
          <div v-else-if="state.cantrips < state.chooseCantrips.choose">
            <h3 class="font-sm">
              Choose {{ state.chooseCantrips.choose }} of your available Cantrips!
            </h3>
            <div class="row justify-content-around">
              <SpellList v-for="(c, index) in state.chooseCantrips.from" :key="index" :spell-prop="c" :select-prop="true" />
            </div>
          </div>

          <!-- SECTION The available Spell options -->
          <div v-else-if="state.spells < state.chooseSpells.choose">
            <h3 class="font-sm">
              Choose {{ state.chooseSpells.choose }} of your available Spells!
            </h3>
            <div class="row justify-content-around">
              <SpellList v-for="(s, index) in state.chooseSpells.from" :key="index" :spell-prop="s" :select-prop="true" />
            </div>
          </div>

          <!-- SECTION The available Ability Modifier options -->
          <div v-else-if="state.chooseScores && state.mods > state.modChoice">
            <h3 class="font-sm">
              Now select {{ state.mods }} Abilities to improve!
            </h3>
            <h2 class="font-xs">
              <b class="text-success"> GREEN </b> abilities are encouraged for your build, while <b class="text-danger"> RED </b> abilities are discouraged.
            </h2>
            <div class="row justify-content-around">
              <AbilityMod v-for="m in state.chooseScores" :key="m" :mod-prop="m" />
            </div>
          </div>

          <!-- SECTION The Ability Score Roll Function -->
          <div v-else>
            <Score />
          </div>
        </div>
      </div>

      <!-- SECTION Character Profile Sidebar based on Results -->
      <div class="col-4 d-lg-block d-none bg-secondary h-100 p-md-4">
        <!-- STUB Loading Icon is visible while data is pulled from Server-->
        <div class="shadow rounded bg-light text-center m-4 p-md-4 p-3" v-if="state.loading">
          <h2 class="font-lg">
            <u>Character Profile</u>
          </h2>
          <i class="fas fa-dice-d20 fa-spin text-warning font-xxl mt-3"></i>
        </div>
        <div class="shadow rounded bg-light text-left m-4 p-md-4 p-3" v-else>
          <h2 class="font-lg">
            <u>Your Profile</u>
          </h2>
          <h3 class="font-sm">
            Party Role: <span :class="state.colors[state.character.role.toLowerCase()] + ' font-xs'"><i>{{ state.character.role }}</i> </span>
          </h3>
          <h3 class="font-sm">
            Play Style: <span :class="state.colors[state.character.style.toLowerCase()] + ' font-xs'"><i>{{ state.character.style }}</i></span>
          </h3>
          <h3 class="font-sm">
            Race: <span class="font-xs"><i>{{ state.character.race }}</i></span>
          </h3>
          <h3 class="font-sm">
            Class: <span class="font-xs"><i>{{ state.character.job }}</i></span>
          </h3>
          <h3 class="font-sm" v-if="state.character.subJob !== undefined">
            Sub-Class: <span class="font-xs"><i>{{ state.character.subJob }}</i></span>
          </h3>
          <h3 class="font-sm">
            Background: <span class="font-xs"><i>{{ state.character.background }}</i></span>
          </h3>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { computed, onMounted, reactive } from 'vue'
import { AppState } from '../AppState'
import { resultsService } from '../services/ResultsService'
import { charactersService } from '../services/CharactersService'

export default {
  name: 'Results',
  setup() {
    const state = reactive({
      loading: true,
      built: computed(() => AppState.built),
      confirm: computed(() => AppState.confirm),
      character: computed(() => AppState.character),
      job: computed(() => AppState.job),
      skills: computed(() => AppState.count.skills),
      chooseSkills: computed(() => AppState.skills),
      equipment: computed(() => AppState.count.equipment),
      mods: computed(() => AppState.count.mods),
      modChoice: computed(() => AppState.count.modChoice),
      score: computed(() => AppState.count.score),
      chooseScores: computed(() => AppState.chooseScores),
      abilities: computed(() => AppState.count.abilities),
      chooseAbilities: computed(() => AppState.chooseAbilities),
      chooseLanguages: computed(() => AppState.languages),
      languages: computed(() => AppState.count.languages),
      chooseCantrips: computed(() => AppState.cantrips),
      cantrips: computed(() => AppState.count.cantrips),
      chooseSpells: computed(() => AppState.spells),
      spells: computed(() => AppState.count.spells),

      // NOTE determines the Progress Bar Color depending on Selected Role / Style
      colors: {
        tank: 'text-danger',
        damage: 'text-warning',
        support: 'text-success',
        utility: 'text-info',
        weapons: 'text-danger',
        spells: 'text-info',
        balance: 'text-success'
      }
    })
    onMounted(async() => {
      await resultsService.getSpells()
      await resultsService.getSkills()
      await resultsService.getEquipment()

      if (state.built) {
        charactersService.createCharacter()
      } else {
        resultsService.loadBuild()
      }
      AppState.activeCharacter = AppState.character
      // NOTE This timeout ensures consistent loading time across all pages
      setTimeout(function() { state.loading = false }, 1500)
    })
    return {
      state,
      user: computed(() => AppState.user)
    }
  }
}
</script>

<style scoped lang="scss">

</style>
