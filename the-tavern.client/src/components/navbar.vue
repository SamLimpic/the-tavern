<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <router-link class="navbar-brand d-flex" :to="{ name: 'Home' }">
      <div class="d-flex flex-column text-light">
        <h1 class="font-lg my-1 p-0">
          <span><i class="fas fa-dice-d20 text-warning mr-2"></i></span> The Tavern
        </h1>
      </div>
    </router-link>
    <button
      class="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarText"
      aria-controls="navbarText"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon" />
    </button>
    <div class="collapse navbar-collapse" id="navbarText">
      <ul class="navbar-nav font-md mr-auto">
        <li class="nav-item">
          <router-link :to="{ name: 'Home' }" class="nav-link">
            Home
          </router-link>
        </li>
        <li class="nav-item">
          <router-link :to="{ name: 'Account' }" class="nav-link">
            Account
          </router-link>
        </li>
        <li class="nav-item">
          <router-link :to="{ name: 'About' }" class="nav-link">
            About
          </router-link>
        </li>
        <li class="nav-item">
          <router-link :to="{ name: 'AccessTest' }" class="nav-link">
            Accessibility
          </router-link>
        </li>
      </ul>
      <span class="navbar-text">
        <button
          class="btn btn-outline-light text-right text-uppercase"
          @click="login"
          v-if="!user.isAuthenticated"
        >
          Login
        </button>

        <div class="dropdown" v-else>
          <div
            class="dropdown-toggle"
            @click="state.dropOpen = !state.dropOpen"
          >
            <img
              :src="user.picture"
              alt="user photo"
              height="40"
              class="rounded"
            />
            <span class="mx-3 text-light text-shadow font-sm">{{ user.name }}</span>
          </div>
          <div
            class="dropdown-menu p-0 list-group w-100"
            :class="{ show: state.dropOpen }"
            @click="state.dropOpen = false"
          >
            <router-link :to="{ name: 'Account' }">
              <div class="list-group-item list-group-item-action hoverable">
                Account
              </div>
            </router-link>
            <div
              class="list-group-item list-group-item-action hoverable"
              @click="logout"
            >
              Logout
            </div>
          </div>
        </div>
      </span>
    </div>
  </nav>
</template>

<script>
import { AuthService } from '../services/AuthService'
import { AppState } from '../AppState'
import { computed, reactive } from 'vue'
export default {
  name: 'Navbar',
  setup() {
    const state = reactive({
      dropOpen: false
    })
    return {
      state,
      user: computed(() => AppState.user),
      async login() {
        AuthService.loginWithPopup()
      },
      async logout() {
        await AuthService.logout({ returnTo: window.location.origin })
      }
    }
  }
}
</script>

<style scoped>
.dropdown-menu {
  user-select: none;
  display: block;
  transform: scale(0);
  transition: all 0.15s linear;
}
.dropdown-menu.show {
  transform: scale(1);
}
.hoverable {
  cursor: pointer;
}
a:hover {
  text-decoration: none;
}
.nav-link{
  text-transform: uppercase;
  color: #cebc8e !important;
}
.nav-link:hover{
  text-transform: uppercase;
  color: var(--light) !important;
}
.nav-item .nav-link.router-link-exact-active{
  color: var(--warning) !important;
  text-shadow: -0.5px -0.5px 0 #000, 0.5px -0.5px 0 #000, -0.5px 0.5px 0 #000, 0.5px 0.5px 0 #000;
}

@media (min-width: 0) {
.font-sm {
        font-size: 1rem;
    }
.font-md {
    font-size: 1.25rem;
  }
.font-lg {
    font-size: 2.5rem;
  }
}

@media (min-width: 576px) {
  .font-sm {
        font-size: 1rem;
    }
.font-md {
    font-size: 1.25rem;
  }
.font-lg {
    font-size: 3rem;
  }
}

@media (min-width: 768px) {
  .font-sm {
        font-size: 1.25rem;
    }
.font-md {
    font-size: 1.5rem;
  }
.font-lg {
    font-size: 3.5rem;
  }
}

@media (min-width: 992px) {
  .font-sm {
        font-size: 1rem;
    }
.font-md {
    font-size: 1rem;
  }
.font-lg {
    font-size: 2.5rem;
  }
}

@media (min-width: 1200px) {
  .font-sm {
        font-size: 1.25rem;
    }
.font-md {
    font-size: 1.25rem;
  }
.font-lg {
    font-size: 3rem;
  }
}
</style>
