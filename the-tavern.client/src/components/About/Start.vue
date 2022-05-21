<template>
  <!-- ANCHOR Starting point for About Page, containing general information -->
  <div class="shadow rounded bg-light text-center m-4 p-md-4 p-3">
    <div class="StartingComponent">
      <h2 class="font-lg mx-2">
        <u>D&D 5e Rules Index</u>
      </h2>
      <h3 class="font-md">
        In this fantasy world, the possibilities are limitless.
      </h3>
      <div class="font-sm mx-md-4">
        <!-- NOTE Display modifiers change the visible text depending on screen size -->
        <p class="text-left mb-2 mx-3">
          Dungeons & Dragons is all about telling a story as a group, and imagining how the group might react to the challenges that story presents.
        </p>
        <span class="text-warning text-shadow text-center font-xxl"><i class="fab fa-d-and-d"></i></span>
        <p class="font-xs d-lg-block d-none text-left mb-2 mx-3">
          <i>Players roll dice to determine whether their character's actions are successful, such as if they can scale a cliff, roll away from the strike of a magical lightning bolt, or land a blow on a dragon's snout!
          </i>
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

</style>
