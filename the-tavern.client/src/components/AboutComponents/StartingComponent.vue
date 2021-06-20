<template>
  <div class="shadow rounded bg-light text-center m-4 p-md-4 p-3">
    <div class="StartingComponent">
      <h2 class="font-lg mx-2">
        <u>Dungeons & Dragons Rules Index</u>
      </h2>
      <h3 class="font-md d-sm-block d-none">
        In this fantasy world, the possibilities are limitless.
      </h3>
      <h3 class="font-sm d-sm-none d-block">
        In this fantasy world, the possibilities are limitless.
      </h3>
      <div class="text-left font-sm mx-md-4">
        <p class="d-sm-block d-none mb-2 mx-3">
          The Dungeons & Dragons roleplaying game is about storytelling in worlds of swords and sorcery. Like games of make-believe, D&D is driven by imagination. It’s about picturing a crumbling castle in a darkening forest and imagining how a fantasy adventurer might react to the challenges that scene presents.
        </p>
        <p class="d-lg-block d-none mb-2 mx-3">
          Players roll dice to determine whether their attacks hit or miss and whether their characters can scale a cliff, roll away from the strike of a magical lightning bolt, or pull off some other dangerous task.
        </p>
        <p class="font-xs d-lg-none d-block text-center mb-2 mx-3">
          These tips might be of use to you!
        </p>
      </div>
    </div>
    <div class="row justify-content-center d-lg-none d-flex mt-3">
      <TavernKeeper />
    </div>
  </div>
</template>

<script>
export default {
  name: 'StartingComponent'

}
</script>

<style scoped lang="scss">

</style>
