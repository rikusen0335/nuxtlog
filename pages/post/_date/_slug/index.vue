<template>
  <div class="container">
    <h1>{{ title }}</h1>
    <div class="post-meta"><time>{{ params.date }}</time></div>
    <div v-html="bodyHtml"></div>
  </div>
</template>

<style lang="scss" scoped>

</style>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";
import sourceFileArray from '~/content/post/json/summary.json';

export default class extends Vue {
  validate({ params }) {
    return sourceFileArray.includes(`content/posts/${params.date}-${params.slug}.md`);
  },
  asyncData({ params }) {
    return Object.assign({}, require(`~/content/posts/json/${params.date}-${params.slug}.json`), { params });
  },
  head() {
    const title = `${this.title} - でぶみあろぐ`;
    const url = `http://localhost:3000/post/${this.params.date}/${this.params.slug}/`;
    return {
      title: title,
      meta: [
        { hid: 'og:url', property: 'og:url', content: url },
        { hid: 'og:title', property: 'og:title', content: title },
      ],
      link: [{ rel: 'canonical', href: url }],
    };
  },
};
</script>

