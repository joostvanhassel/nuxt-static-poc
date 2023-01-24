<script setup lang="ts">
import { News } from "~/types/types";

const {getItems} = useDirectusItems();
const route = useRoute();
const filters = {
  "slug": {
    "_eq": route.params.slug
  }
};
const {data, pending, error, refresh} = await useAsyncData(`news-${route.params.slug}`, () => {
  return getItems<News[]>({
    collection: "news",
    params: {
      filter: filters,
      fields: ["*.*"]
    }
  })
});

const article = data?.value?.at(0)!;
</script>

<template>
  <div v-if="!pending && article">
    <h2>news</h2>
    <h3>{{ article.slug }}</h3>
    <p>{{ article.excerpt }}</p>
  </div>

  <NuxtLink to="/">home</NuxtLink>
</template>
