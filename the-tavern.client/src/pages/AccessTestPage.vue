<template>
  <!-- ANCHOR Developer page designed to test Color Theme Accessibility.
  Disabled buttons do not pass Accessibility and are not to be used. -->
  <div class="access-test container">
    <div class="row justify-content-center">
      <div class="col-12 text-center">
        <div class="row justify-content-around m-4 p-md-4 p-3">
          <div class="col-10 shadow rounded bg-light p-3">
            <h2 class="font-xl mb-3">
              Accessibility Test Page
            </h2>
            <h3><u>Header On Light Background</u></h3>
            <h4><b>Approriate Header Hierarchy</b></h4>
            <h5><i>And Various Font Formats</i></h5>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolor nihil veritatis tenetur deleniti temporibus! Illo perferendis nobis enim aperiam eum in harum, at vel. Molestias provident molestiae fugiat quaerat ut!</p>
          </div>
        </div>
        <div class="row justify-content-around p-3 my-3 shadow rounded bg-light">
          <div class="col-md-2 col-sm-6 col-12 my-2">
            <button type="button" class="btn btn-lg btn-primary">
              Primary
            </button>
          </div>
          <div class="col-md-2 col-12 my-2">
            <button type="button" class="btn btn-lg btn-secondary" disabled>
              Secondary
            </button>
          </div>
          <div class="col-md-2 col-12 my-2">
            <button type="button" class="btn btn-lg btn-success">
              Success
            </button>
          </div>
          <div class="col-md-2 col-12 my-2">
            <button type="button" class="btn btn-lg btn-warning" disabled>
              Warning
            </button>
          </div>
          <div class="col-md-2 col-12 my-2">
            <button type="button" class="btn btn-lg btn-danger">
              Danger
            </button>
          </div>
          <div class="col-md-2 col-12 my-2">
            <button type="button" class="btn btn-lg btn-info">
              Info
            </button>
          </div>
        </div>
        <div class="row justify-content-around p-3 my-3 shadow rounded bg-light">
          <div class="col-md-2 col-12 my-2">
            <button type="button" class="btn btn-lg btn-outline-primary">
              Primary
            </button>
          </div>
          <div class="col-md-2 col-12 my-2">
            <button type="button" class="btn btn-lg btn-outline-secondary" disabled>
              Secondary
            </button>
          </div>
          <div class="col-md-2 col-12 my-2">
            <button type="button" class="btn btn-lg btn-outline-success" disabled>
              Success
            </button>
          </div>
          <div class="col-md-2 col-12 my-2">
            <button type="button" class="btn btn-lg btn-outline-warning" disabled>
              Warning
            </button>
          </div>
          <div class="col-md-2 col-12 my-2">
            <button type="button" class="btn btn-lg btn-outline-danger">
              Danger
            </button>
          </div>
          <div class="col-md-2 col-12 my-2">
            <button type="button" class="btn btn-lg btn-outline-info" disabled>
              Info
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AccessTest'
}
</script>
