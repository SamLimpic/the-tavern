<template>
  <!-- ANCHOR Displays all Resource Links -->
  <div class="shadow rounded bg-light text-center m-4 p-md-4 p-3">
    <div>
      <h2 class="font-lg">
        <u>Helpful Resources</u>
      </h2>
      <div class="mx-md-4">
        <p class="font-md mx-1 my-2">
          Here are some helpful Links to provide more information.
        </p>
        <ul class="font-sm text-left mx-2 mb-2">
          <li>
            <i class="text-secondary resources" onclick="window.open('https://www.dndbeyond.com/essentials')">Welcome to D&D</i>
          </li>
          <li>
            <i class="text-secondary resources" onclick="window.open('https://www.dnd-compendium.com/player-guides/newbie-guides')">For Brand New Players</i>
          </li>
          <li>
            <i class="text-secondary resources" onclick="window.open('https://www.dnd-compendium.com/player-guides/cheat-sheets')">Cheat Sheets</i>
          </li>
          <li>
            <i class="text-secondary resources" onclick="window.open('https://www.dnd-compendium.com/dm-resources/accessibility-inclusion')">Accessibility</i>
          </li>
          <li>
            <i class="text-secondary resources" onclick="window.open('https://media.wizards.com/2020/dnd/downloads/dnd_essentials_rulebook.pdf')">Rule Book</i>
          </li>
          <li>
            <i class="text-secondary resources" onclick="window.open('https://www.dnd-compendium.com/dm-resources/character-sheets')">Character Sheets</i>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AboutResources'

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
