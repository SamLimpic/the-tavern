<template>
  <!-- ANCHOR Displays information for Character Classes -->
  <div class="shadow rounded bg-light text-center m-4 p-md-4 p-3">
    <div>
      <h2 class="font-lg">
        <u>Character Classes</u>
      </h2>
      <div class="mx-md-4">
        <p class="font-md mx-1 my-2">
          What kind of role you want to take in your adventuring party?
        </p>
        <p class="font-sm text-left mx-2 mb-2">
          <!-- NOTE Display modifiers change the visible text depending on screen size -->
          <i class="d-sm-block d-none">There are 12 core Classes in Dungeons and Dragons. From robed spellcasters, to great axe-wielding warriors, to enigmatic druids, fantasy fans are spoiled for choice. However, at first glance, the options may appear overwhelming when trying to build a character for your next bold. Each of the classes has unique mechanics and exciting roleplaying possibilities which will govern how you progress in your campaign, making them a key component in your D&D experience. </i>
          <i class="font-xs d-sm-none d-block">Each of the classes has unique mechanics and exciting roleplaying possibilities which will govern how you progress in your campaign, making them a key component in your D&D experience.</i>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AboutClasses'

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
