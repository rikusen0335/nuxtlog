<template>
  <div>
    <div class="card text-left mb-5">
      <img
        src="/wallhaven.jpg"
        class="card-img-top">
      <div class="card-body">
        <h5 class="card-title text-center">
          {{ post.title }}
        </h5>
        <p class="card-text">{{ post.text }}</p>
        <p class="card-text text-right">
          <small v-if="post.update_date" class="text-muted mr-3 to-match-text">
            <span class="mdi mdi-sync to-match-icon"></span>
            {{ post.update_date }}
          </small>
          <small class="text-muted to-match-text">
            <span class="mdi mdi-clock-outline to-match-icon"></span>
            {{ post.release_date }}
          </small>
        </p>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";

@Component
export default class ArticleCard extends Vue {
  @Prop()
  post!: object[]
}
</script>

<style lang="scss" scoped>
.card {
  max-height: 450px;

  border: 1px solid #f2f8f9;
  transition: .3s;

  &:hover {
    border: 1px solid #42b883;
    box-shadow: 0px 4px 8px rgba(38, 38, 38, 0.2);
    z-index: 500;
  }

  img {
    height: 250px;
    object-fit: cover;
  }
}
</style>
