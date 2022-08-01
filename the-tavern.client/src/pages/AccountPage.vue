<template>
  <!-- ANCHOR Displays all Characters connected to the active Account -->
  <div class="account container-fluid">
    <div class="row justify-content-center h-100">
      <div class="col-lg-8 d-lg-block d-none p-md-4">
        <div class="row justify-content-between shadow rounded bg-light m-4 p-md-4 p-3">
          <!-- SECTION Pulls info from the Active Character object. -->
          <ActiveCharacter v-if="state.activeCharacter.id" :character="state.activeCharacter" />
          <div class="col-12 text-center" v-else>
            <h1 class="font-xl">
              <u>Select a Character for more details</u>
            </h1>
            <h2>
              <i>You have {{ state.characters.length }} characters to choose from!</i>
            </h2>
            <i class="fas fa-dice-d20 fa-spin text-warning my-3 font-xxl"></i>
          </div>
        </div>
      </div>
      <div class="col-lg-4 bg-secondary shadow h-100 p-md-4">
        <!-- STUB Loading Icon is visible while data is pulled from Server-->
        <div class="shadow rounded bg-light text-center m-4 p-md-4 p-3">
          <h2 class="font-lg m-0 p-0">
            <u>Your Characters</u>
          </h2>
          <div v-if="state.loading">
            <i class="fas fa-dice-d20 fa-spin text-warning mt-3 font-xxl"></i>
          </div>
          <div v-else-if="state.user.isAuthenticated && state.characters">
            <h3 class="font-md" v-if="state.characters.length === 0">
              Looks like you need to make some characters!
            </h3>
            <!-- SECTION Displays list of Account Characters to be selected. -->
            <CharacterList v-for="c in state.characters" :key="c.id" :character="c" />
          </div>
          <div v-else>
            <h2>Log in to view your character list!</h2>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { computed, onMounted, reactive } from 'vue'
import { AppState } from '../AppState'
import { charactersService } from '../services/CharactersService'

export default {
  name: 'Account',
  setup() {
    const state = reactive({
      user: computed(() => AppState.user),
      loading: true,
      characters: computed(() => AppState.characters),
      activeCharacter: computed(() => AppState.activeCharacter),
      account: computed(() => AppState.account),
      AppState: computed(() => AppState)
    })
    onMounted(async() => {
      await charactersService.getCharacters(state.account.id)
      // NOTE This timeout ensures consistent loading time across all pages
      setTimeout(function() { state.loading = false }, 1500)
    })
    return {
      state
    }
  }
}
</script>

<style scoped lang="scss">

</style>
