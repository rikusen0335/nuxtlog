<template>
  <div class="container">
    <div>
      <h1 class="title">
        nuxtlog
      </h1>
      <div class="row">

        <div
          v-for="i in 3"
          :key="i"
          class="col">
          <div class="card">
            <img
              src="static/wallhaven.jpg"
              class="card-img-top">
            <div class="card-body">
              <h5 class="card-title">card title</h5>
              <p class="card-text">You are an idiot :( But now this is template you just gonna train your skill.</p>
            </div>
          </div>
        </div>

      </div>
    </div>
  </div>
</template>

<script>
import Logo from '~/components/Logo.vue'

export default {
  components: {
    Logo
  }
}
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
