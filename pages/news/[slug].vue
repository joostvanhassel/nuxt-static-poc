<script setup>
var { data, pending } = await useAsyncData(() => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(Date.now());
    }, 2000);
  });
});
</script>

<template>
  <div v-if="!pending">
    <h2>news</h2>
    <p>blablabla some news</p>
    <p>{{ data }}</p>
  </div>

  <NuxtLink to="/">home</NuxtLink>
</template>
