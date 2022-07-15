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
        <span class="text-warning text-shadow text-center font-xxl"><i class="fab fa-d-and-d"></i></span>
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

</style>
