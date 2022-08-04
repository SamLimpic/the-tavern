<template>
  <!-- ANCHOR The Home Page introduces the Application to the User. -->
  <div class="home container-fluid">
    <div class="row justify-content-center h-100">
      <div class="col-lg-8 col-12 shadow p-md-4 p-2">
        <div class="shadow rounded bg-light text-center m-4 p-md-4 p-3">
          <h2 class="font-lg m-0">
            <u>Welcome Traveller!</u>
          </h2>
          <p class="font-sm mb-1 mx-lg-2 mx-3">
            The Tavern is an interactive character creation experience for Dungeons & Dragons 5th Edition, made for new players and seasoned veterans alike!
          </p>
          <p class="font-xs d-lg-block d-none mb-1 mx-lg-2 mx-3">
            This application was made to streamline the process of creating a fresh, customized, and ready-to-play character for any Dungeons and Dragons game.
          </p>
          <span class="text-warning text-shadow text-center font-xxl"><i class="fab fa-d-and-d"></i></span>
          <p class="font-xs mx-lg-2 mx-3">
            <i>Simply follow the promps to easily create your ideal character and start your adventure!
            </i>
          </p>
          <div class="row justify-content-center align-items-center mb-1">
            <div class="col-md-3 col-5 order-md-1 order-2 mt-md-0 mt-3 text-right">
              <router-link :to="{name: 'About'}">
                <!-- NOTE Redirects to About Page -->
                <button type="button" class="btn btn-primary bg-secondary text-shadow w-100 font-xs">
                  About
                </button>
              </router-link>
            </div>
            <div class="col-md-5 col-sm-6 col-8 order-md-2 order-1 mt-md-0 mt-2 mx-md-0 mx-5">
              <!-- NOTE Starts a fresh Questionnaire -->
              <button type="button" class="btn btn-primary text-shadow w-100 font-sm py-md-3" @click="start()">
                Get Started!
              </button>

              <!-- <router-link :to="{name: 'Questionnaire'}">
                <button type="button" class="btn btn-primary text-shadow w-100 font-sm py-md-3">
                  Get Started!
                </button>
              </router-link> -->
            </div>
            <div class="col-md-3 col-5 order-md-3 order-3 mt-md-0 mt-3 text-left">
              <router-link :to="{name: 'Account'}">
                <!-- NOTE Creates a randomized character, sets that character as Active, and redirects to the Account Page. -->
                <button type="button" class="btn btn-primary bg-secondary text-shadow w-100 font-xs">
                  Account
                </button>
              </router-link>
            </div>
          </div>
        </div>
      </div>
      <div class="col-4 d-lg-block d-none bg-secondary shadow p-md-4">
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
            <router-link :to="{name: 'Account'}">
              <!-- SECTION Displays list of Account Characters to be selected.
            Redirects to the Account Page and sets selected character as Active. -->
              <CharacterList v-for="c in state.characters" :key="c.id" :character="c" />
            </router-link>
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
import Notification from '../utils/Notification'
import router from '../router'
import { resultsService } from '../services/ResultsService'
// import { dndService } from '../services/DndService'

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
      const reload = sessionStorage.getItem('reload')
      if (reload) {
        sessionStorage.removeItem('reload')
      } else {
        sessionStorage.setItem('reload', 'true')
        location.reload()
      }

      localStorage.clear()
      await charactersService.getCharacters(state.account.id)
      // await dndService.buildSkills()
      // NOTE This timeout ensures consistent loading time across all pages
      setTimeout(function() { state.loading = false }, 1500)
    })
    return {
      state,
      async random() {
        try {
          await resultsService.randomCharacter()
        } catch (error) {
          Notification.toast('Error: ' + error, 'error')
        }
      },
      async start() {
        try {
          await Notification.start()
          if (AppState.quiz) {
            Notification.toast('A new adventurer then!', 'info')
          } else {
            Notification.toast("I thought I'd seen you before!", 'info')
          }
          router.push('questions')
        } catch (error) {
          Notification.toast('Error: ' + error, 'error')
        }
      }
    }
  }
}
</script>

<style scoped lang="scss">

</style>
