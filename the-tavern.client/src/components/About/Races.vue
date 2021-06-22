<template>
  <!-- ANCHOR Displays information for Character Races -->
  <div class="shadow rounded bg-light text-center m-4 p-md-4 p-3">
    <div>
      <h2 class="font-lg">
        <u>Character Races</u>
      </h2>
      <div class="mx-md-4">
        <p class="font-md mx-1 my-2">
          Your basic set of natural advantages and abilities.
        </p>
        <p class="font-sm text-left mx-2 mb-2">
          <!-- NOTE Display modifiers change the visible text depending on screen size -->
          <i class="d-sm-block d-none">The Dungeons and Dragons universe spans an impressive cavalcade of fantasy races. Some conform to familiar tropes, seen far and wide across the realms of fantasy literature. Others are more unique, with few comparisons outside the pages of D&D’s sourcebooks. All, however, bring distinct attributes, abilities, and roleplaying touchstones that are essential to creating a character.</i>
          <i class="font-xs d-sm-none d-block">The Dungeons and Dragons universe spans an impressive cavalcade of fantasy races. Your chocen Race will grant you distinct attributes, abilities, and roleplaying touchstones that are essential to creating a character.</i>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AboutRaces'

}
</script>

<style scoped>
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
