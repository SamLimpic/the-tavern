<template>
  <div class="home container-fluid">
    <div class="row justify-content-center h-100">
      <div class="col-lg-8 col-12 shadow p-md-4 p-2">
        <div class="shadow rounded bg-light text-center m-4 p-md-4 p-3">
          <h2 class="font-xl">
            <u>Welcome Adventurer!</u>
          </h2>
          <p class="font-md mb-1 mx-2">
            The Tavern is an interactive character creation experience for Dungeons and Dragons 5th Edition, designed for both new players and seasoned veterans!
          </p>
          <p class="font-sm d-lg-block d-none mb-1 mx-2">
            This application was made to streamline the process of creating a fresh, customized, and ready-to-play character for any Dungeons and Dragons game.
          </p>
          <p class="font-sm mx-2">
            Simply follow the promps to easily create your ideal character and start your adventure!
          </p>
          <div class="row justify-content-center align-items-center mb-1">
            <div class="col-4 d-md-block d-none text-right">
              <router-link :to="{name: 'About'}">
                <button type="button" class="btn btn-primary w-75 font-sm">
                  About
                </button>
              </router-link>
            </div>
            <div class="col-md-4 col-sm-6 col-10 mb-1">
              <router-link :to="{name: 'Questions'}">
                <button type="button" class="btn btn-lg btn-primary w-75 font-md">
                  Get Started!
                </button>
              </router-link>
            </div>
            <div class="col-4 d-md-block d-none text-left">
              <button type="button" class="btn btn-primary w-75 font-sm">
                Random
              </button>
            </div>
          </div>
        </div>
      </div>
      <div class="col-4 d-lg-block d-none bg-primary shadow h-100 p-md-4">
        <div class="shadow rounded bg-light text-center m-4 p-md-4 p-3" v-if="state.loading">
          <h2 class="my-5 font-xxl">
            <i class="fas fa-dice-d20 fa-spin text-warning"></i>
          </h2>
        </div>
        <div class="shadow rounded bg-light text-center m-4 p-md-4 p-3" v-else-if="state.user.isAuthenticated && state.characters">
          <h2 class="font-lg m-0 p-0">
            <u>Your Characters</u>
          </h2>
          <h3 class="font-md" v-if="state.characters.length === 0">
            Looks like you need to make some characters!
          </h3>
          <router-link :to="{name: 'Account'}">
            <CharacterListComponent v-for="c in state.characters" :key="c.id" :character="c" />
          </router-link>
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
  name: 'Home',
  setup() {
    const state = reactive({
      user: computed(() => AppState.user),
      account: computed(() => AppState.account),
      loading: true,
      results: computed(() => AppState.results),
      quiz: computed(() => AppState.quiz),
      character: computed(() => AppState.character),
      characters: computed(() => AppState.characters)
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
