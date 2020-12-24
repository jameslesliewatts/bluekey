<template>
  <div class="container">
    <h1 v-if="error.statusCode === 404">Page not found</h1>
    <h1 v-else>An error occurred</h1>
    Let's go back to the
    <h3><NuxtLink to="/">Homepage</NuxtLink></h3>
    and try again!
  </div>
</template>

<script>
export default {
  props: ['error'],
}
</script>
