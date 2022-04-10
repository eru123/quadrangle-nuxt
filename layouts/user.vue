<script setup>
import { watchEffect } from 'vue'

if (process.client) {
  const route = useRoute()
  const userState = useUserState()
  const accountType = useAccountType();
  const accountTypeList = useAccountTypeList();
  const userLoginState = computed(() => accountTypeList.value.find(i => i.title == accountType.value) && userState.value)
  watchEffect(() => {
    if (!userLoginState.value) {
      navigateTo("/landing")
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