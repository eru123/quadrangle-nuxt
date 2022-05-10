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
  <div class="w-full">
    <div class="w">
        <div class="c">

        </div>
    </div>
    <slot />
  </div>
</template>
<style lang="scss" scoped>
.w {
    .c {}
}
</style>