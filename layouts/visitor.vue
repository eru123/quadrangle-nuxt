<script setup>
import { watchEffect } from 'vue'

if (process.client) {
  const route = useRoute()
  const userState = useUserState()
  watchEffect(() => {
    if (userState.value) {
      navigateTo(route.query.redirect || "/")
    }
  })
}

</script>
<template>
  <div class="w-main w-full">
    <LandingHeader />
    <div class="c">
      <slot />
    </div>
    <LandingFooter />
  </div>
</template>
<style lang="scss" scoped>
.w-main {
  @apply flex flex-col;
  min-height: 100vh;

  & > div {
    flex:0;
  }
  .c {
    @apply w-full flex-1;
  }
}
</style>