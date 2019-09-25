<template>
  <div>
    <!--{{ post.title }}-->
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";

@Component
export default class PostArticle extends Vue {
  @Prop()
  post!: object[]
}
</script>