<template>
  <!-- ANCHOR Displays information for Character Backgrounds -->
  <div class="shadow rounded bg-light text-center m-4 p-md-4 p-3">
    <div>
      <h2 class="font-lg">
        <u>Character Backgrounds</u>
      </h2>
      <div class="mx-md-4">
        <p class="font-md mx-1 my-2">
          Every story has a beginning.
        </p>
        <p class="font-sm text-left mx-2 mb-2">
          <!-- NOTE Display modifiers change the visible text depending on screen size -->
          <i class="d-sm-block d-none">Choosing a background provides you with important story cues about your character’s identity. Why did you stop doing whatever your background describes and start adventuring? Where did you get the money to purchase your starting gear, or, if you come from a wealthy background, why don’t you have more? How did you learn the skills of your class? What sets you apart from ordinary people?</i>
          <i class="font-xs d-sm-none d-block">Choosing a background provides you with important story cues about your character’s identity. Where did you come from and what is your place in the world? How did you learn the skills of your class? What sets you apart from ordinary people?</i>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AboutBackgrounds'
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
