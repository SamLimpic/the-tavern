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
        <p class="d-sm-block d-none font-sm text-left mx-2 mb-2">
          <!-- NOTE Display modifiers change the visible text depending on screen size -->
          When you create your character, you receive equipment suited to your class and background. You have access to a variety of armor types based on your proficiency, ranging from hide armor to chain mail, as well as various weapons, from longswords to crossbows.
        </p>
        <span class="text-warning text-shadow text-center font-xxl"><i class="fab fa-d-and-d"></i></span>
        <p class="font-xs mx-2 mb-2">
          <i>Whether you favor a longbow and leather, or a greatsword and plate, equipment can mean the difference between life and death while adventuring.</i>
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

</style>
