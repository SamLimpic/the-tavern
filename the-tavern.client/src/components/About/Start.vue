<template>
  <!-- ANCHOR Starting point for About Page, containing general information -->
  <div class="shadow rounded bg-light text-center m-4 p-md-4 p-3">
    <div class="StartingComponent">
      <h2 class="font-lg mx-2">
        <u>Dungeons & Dragons Rules Index</u>
      </h2>
      <h3 class="font-md">
        In this fantasy world, the possibilities are limitless.
      </h3>
      <div class="text-left font-sm mx-md-4">
        <!-- NOTE Display modifiers change the visible text depending on screen size -->
        <p class="d-sm-block d-none mb-2 mx-3">
          The Dungeons & Dragons roleplaying game is about storytelling in worlds of swords and sorcery. Like games of make-believe, D&D is driven by imagination. It’s about picturing a crumbling castle in a darkening forest and imagining how a fantasy adventurer might react to the challenges that scene presents.
        </p>
        <p class="font-xs d-lg-block d-none mb-2 mx-3">
          Players roll dice to determine whether their attacks hit or miss and whether their characters can scale a cliff, roll away from the strike of a magical lightning bolt, or pull off some other dangerous task.
        </p>
        <p class="font-xs d-lg-none d-block text-center mb-2 mx-3">
          These tips might be of use to you!
        </p>
      </div>
    </div>

    <!-- SECTION Displays all Toggle Buttons to specify further Information on Mobile-->
    <div class="row justify-content-center d-lg-none d-flex mt-3">
      <AboutNavigation />
    </div>
  </div>
</template>

<script>
export default {
  name: 'AboutStart'

}
</script>

<style scoped lang="scss">
/* SECTION Establishes Media Queries for responsive font sizing */

@media (min-width: 0) {
  .font-sm {
    font-size: 1.25rem;
  }
  .font-md {
    font-size: 1.5rem;
  }
  .font-lg {
    font-size: 1.75rem;
  }
}

@media (min-width: 576px) {
  .font-sm {
    font-size: 1.5rem;
  }
  .font-md {
    font-size: 1.75rem;
  }
  .font-lg {
    font-size: 2.25rem;
  }
}

@media (min-width: 768px) {
  .font-sm {
    font-size: 1.5rem;
  }
  .font-md {
    font-size: 1.75rem;
  }
  .font-lg {
    font-size: 2rem;
  }
}

@media (min-width: 992px) {
  .font-sm {
    font-size: 1.5rem;
  }
  .font-md {
    font-size: 1.75em;
  }
  .font-lg {
    font-size: 2.25rem;
  }
}

@media (min-width: 1200px) {
  .font-sm {
    font-size: 1.75rem;
  }
  .font-md {
    font-size: 2rem;
  }
  .font-lg {
    font-size: 2.5rem;
  }
}

</style>
