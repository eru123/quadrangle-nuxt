<script setup>
definePageMeta({
  layout: "user",
});
const loading = useState('loading', () => true)
let logout
if (process.client) {
  const route = useRoute()
  const { auth, logout: firebaseLogout } = useNuxtApp().$firebase()
  logout = firebaseLogout
  auth.onAuthStateChanged(user => {
    if (!user) {
      navigateTo(route.query.redirect || "/sign")
    }
    loading.value = false
  })
}
</script>
<template>
  <div class="wrapper">
    <h3>Logout:</h3>
    <button @click="logout">Logout</button>
  </div>
</template>
<style lang="scss" scoped>
</style>