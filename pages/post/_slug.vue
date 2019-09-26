<template>
  <div>
    <p>{{ $store.getters[''] }}</p>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator"

@Component
export default class PostArticle extends Vue {
  //private team: object = {}
  public get currentPost() {
    return this.$store.getters['getPost']
  }
}
</script>