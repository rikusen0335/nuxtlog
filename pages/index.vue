<template>
  <div class="container">
    <div>
      <h1 class="title mt-5">Welcome to devmialog.</h1>
      <h4 class="subtitle mb-5">I'm loving in Tech, Program, Gadget and Game.</h4>
      <div class="row">
        <div
          v-for="(post, index) in posts"
          :key="index"
          class="col-md-4 col-sm-6 col-xs-12">
          <n-link
            to="/post/_slug/"
            :title="post.title"
            :text="post.text"
            class="text-reset text-decoration-none">
            <ArticleCard
              :title="post.title"
              :text="post.text"
              :release_date="post.release_date"
              :update_date="post.update_date"/>
          </n-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";

import sourceFileArray from '~/content/post/json/summary.json';

@Component({
  components: {
    ArticleCard: () => import('~/components/ArticleCard.vue'),
  },
})

export default class PostIndex extends Vue {
  data() {
    return {
      posts: [
        {
          id: 1,
          title: "タイトル1",
          release_date: "2007 / 11 / 27",
          update_date: "2007 / 11 / 29",
          text: "ダミーテキスト1"
        },
        {
          id: 2,
          title: "タイトル2",
          release_date: "2008 / 03 / 05",
          text: "ダミーテキスト2"
        },
        {
          id: 3,
          title: "A long way",
          release_date: "2008 / 06 / 16",
          update_date: "2008 / 07 / 02",
          text: 'When I was child, my father told me "spend a life you will remember." and I actually do that. They are - my brothers - not clever, spend their life a lot of garbage like smoker.'
        },
        {
          id: 4,
          title: "人間社会、ポリスとはいかにつくられるか",
          release_date: "2008 / 06 / 21",
          text: "我々は孤独な生き物であるがゆえに、社会を作り、仲間を作ろうとするのだ。"
        }
      ]
    }
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
</style>
