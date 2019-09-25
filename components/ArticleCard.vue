<template>
  <div>
    <div class="card text-left mb-5">
      <img
        src="/wallhaven.jpg"
        class="card-img-top">
      <div class="card-body">
        <h5 class="card-title text-center">
          {{ title }}
        </h5>
        <p class="card-text">{{ text }}</p>
        <p class="card-text text-right">
          <small v-if="update_date" class="text-muted mr-3">
            <span class="mdi mdi-sync"></span>
            {{ update_date }}
          </small>
          <small class="text-muted">
            <span class="mdi mdi-clock-outline"></span>
            {{ release_date }}
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
  title!: string

  @Prop()
  text!: string

  @Prop()
  release_date!: string

  @Prop()
  update_date!: string
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
