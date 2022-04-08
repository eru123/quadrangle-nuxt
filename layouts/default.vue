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
    <NuxtLink to="/">Home</NuxtLink>
    <NuxtLink to="/register">Register</NuxtLink>
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