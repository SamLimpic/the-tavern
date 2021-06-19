<template>
  <header>
    <Navbar />
  </header>
  <main>
    <router-view />
  </main>
  <footer>
    <div class="row justify-content-center bg-dark text-light text-center">
      <p class="font-sm my-md-4 my-3 p-0">
        Made with <span><i class="fas fa-dice-d20 text-warning px-1"></i></span> by a bunch of nerds
      </p>
    </div>
  </footer>
</template>

<script>
import { computed } from 'vue'
import { AppState } from './AppState'
export default {
  name: 'App',
  setup() {
    return {
      appState: computed(() => AppState)
    }
  }
}
</script>
<style lang="scss">
@import "./assets/scss/main.scss";

</style>
