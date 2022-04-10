<script setup>
const appState = useAppState()
const userState = useUserState()

if (process.client) {
  appState.value = 'loading'
  const { auth } = useNuxtApp().$firebase()
  auth.onAuthStateChanged(user => {
    appState.value = 'ready'
    userState.value = user
  })
}

</script>
<template>
  <NuxtLayout v-if="appState == 'ready'">
    <NuxtPage />
  </NuxtLayout>
  <LoadingScreen v-if="appState == 'loading'" />
</template>
<style lang='scss'>
@import "assets/styles/tailwind.scss";

button {
  @apply bg-blue-400 text-white font-bold py-2 px-4 rounded;
}
</style>