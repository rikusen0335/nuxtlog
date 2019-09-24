<template>
  <!--{{ title }}-->
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";

@Component
export default class PostArticle extends Vue {
  @Prop()
  title!: string

  @Prop()
  text!: string
}
</script>