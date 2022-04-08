<script setup>
if (process.client) {
  const route = useRoute()
  const { auth } = useNuxtApp().$firebase()
  auth.onAuthStateChanged(user => {
    if (user) {
      navigateTo(route.query.redirect || "/user")
    }
  })
}
</script>
<template>
  <div class="wrapper">
    <h1>Non User page</h1>
    <NuxtLink to="/">Home</NuxtLink>
    <NuxtLink to="/sign">Sign in</NuxtLink>
    <slot />
  </div>
</template>
<style lang="scss" scoped>
.wrapper {
  @apply text-center my-12;
}
a {
  @apply px-4;

  &.router-link-active {
    @apply bg-gray-200;
  }
}
</style>