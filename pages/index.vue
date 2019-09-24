<template>
  <div class="container">
    <div>
      <h1 class="title mt-5">Welcome to devmialog.</h1>
      <h4 class="subtitle mb-5">I'm loving in Tech, Program, Gadget and Game.</h4>
      <div class="row">
        <div
          v-for="i in 10"
          :key="i"
          class="col-md-4 col-sm-6 col-xs-12">
          <n-link
            to="/post/_date/_slug/"
            class="text-reset text-decoration-none">
            <ArticleCard />
          </n-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";

import ArticleCard from '~/components/ArticleCard.vue'
import sourceFileArray from '~/content/post/json/summary.json';

@Component({
  components: {
    ArticleCard,
  },
})

export default class PostIndex extends Vue {
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
</style>
