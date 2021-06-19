<template>
  <div class="account container-fluid">
    <div class="row justify-content-center h-100">
      <div class="col-lg-8 d-lg-block d-none p-md-4">
        <div class="row justify-content-between shadow rounded bg-light m-4 p-md-4 p-3">
          <ActiveCharacter v-if="state.activeCharacter.job" />
          <div class="col-12 text-center" v-else>
            <h1 class="font-xl">
              <u>Please select a Character for more details</u>
            </h1>
            <h2 class="mt-5 font-xxl">
              <i class="fas fa-dice-d20 fa-spin text-warning"></i>
            </h2>
          </div>
        </div>
      </div>
      <div class="col-lg-4 col-12 bg-primary text-center h-100 p-md-4 p-2">
        <div class="shadow rounded bg-light m-4 p-md-4 p-3" v-if="state.loading">
          <h2 class="my-5 font-xxl">
            <i class="fas fa-dice-d20 fa-spin text-warning"></i>
          </h2>
        </div>
        <div class="shadow rounded bg-light m-4 p-md-4 p-3" v-else-if="state.user.isAuthenticated && state.characters">
          <h2 class="m-0 p-0">
            <u>Your Characters</u>
          </h2>
          <h3 class="font-md" v-if="state.characters.length === 0">
            Looks like you need to make some characters!
          </h3>
          <CharacterListComponent v-for="c in state.characters" :key="c.id" :character="c" />
        </div>
        <div class="shadow rounded bg-light text-center m-3 p-5" v-else>
          <h2>Log in to view your character list!</h2>
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
      setTimeout(function() { state.loading = false }, 1000)
      await charactersService.getCharacters(state.account.id)
    })
    return {
      state
    }
  }
}
</script>

<style scoped lang="scss">

</style>
