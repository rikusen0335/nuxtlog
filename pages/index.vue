<template>
  <div class="container">
    <div>
      <h1 class="title m-5">
        Welcome to devmialog
      </h1>
      <div class="row">
        <div
          v-for="i in 10"
          :key="i"
          class="col-md-4 col-sm-6 col-xs-12">
          <ArticleCard />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Logo from '~/components/Logo.vue'
import ArticleCard from '~/components/ArticleCard.vue'

export default {
  components: {
    Logo,
    ArticleCard
  }
}
</script>

<style lang="scss">

.container {
  margin: 0 auto;
  /*min-height: 100vh;*/
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
  font-size: 70px;
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

.card {
  border: 1px solid #f2f8f9;
  transition: .3s;

  &:hover {
    border: 1px solid #42b883;
    box-shadow: 0px 4px 8px rgba(38, 38, 38, 0.2);
    z-index: 500;
  }

  img {
    height: 200px;
    object-fit: cover;
  }
}
</style>
