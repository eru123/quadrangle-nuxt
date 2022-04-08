<script setup>
if (process.client) {
  const { auth } = useNuxtApp().$firebase()
  auth.onAuthStateChanged(user => {
    if (!user) {
      navigateTo("/logout")
    }
  })
}
</script>
<template>
  <div class="wrapper">
    <NuxtLink to="/user">User</NuxtLink>
    <NuxtLink to="/logout">Logout</NuxtLink>
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