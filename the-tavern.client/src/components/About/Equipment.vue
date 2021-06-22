<template>
  <!-- ANCHOR Displays information for Equipment -->
  <div class="shadow rounded bg-light text-center m-4 p-md-4 p-3">
    <div>
      <h2 class="font-lg">
        <u>Equipment</u>
      </h2>
      <div class="mx-md-4">
        <p class="font-md mx-1 my-2">
          Your choice of armor and weapons is crucial when facing the unknown wilds.
        </p>
        <p class="font-sm text-left mx-2 mb-2">
          <!-- NOTE Display modifiers change the visible text depending on screen size -->
          <i class="d-sm-block d-none">When you create your character, you receive equipment based on a combination of your class and background. You have access to a variety of armor types, ranging from leather armor to chain mail to costly plate armor, with several other kinds of armor in between. Whether you favor a longsword or a longbow, your weapon and your ability to wield it effectively can mean the difference between life and death while adventuring.</i>
          <i class="font-xs d-sm-none d-block">Whether you favor a longsword or a longbow, your weapon and your ability to wield it effectively can mean the difference between life and death while adventuring.</i>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AboutEquipment'

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
