<template>
  <div>
    <p>{{ currentPost.title }}</p>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";

@Component
export default class PostArticle extends Vue {
  //@Prop()
  //post!: object[]
  
  //currentPost = this.$store.state.posts[id]
}
</script>