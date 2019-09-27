<template>
  <div>
    <p>{{ post.title }}</p>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator'
import VueRouter from 'vue-router'

@Component({})
export default class PostArticle extends Vue {
  public post: object = {}
  public slug_id: string = ''

  public currentPost = () => {
    //console.log(this.$route.params.slug)
    return this.$store.getters['currentPost']
  }

  mounted() {
    this.slug_id = this.$route.params.slug
    this.$store.dispatch('getCurrentPost', this.slug_id)
    this.post = this.currentPost()
  }

  /*async asyncData(context: Context) {
    console.log("aaaaa")
    this.post = this.currentPost()
  }*/
}
</script>