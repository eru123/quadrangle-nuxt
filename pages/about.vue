<script setup>

definePageMeta({
  layout: "visitor",
});

if (process.client) {
  const {currentRoute : router} = useRouter();
  if (router.value?.hash) {
      const hash = router.value?.hash
      onMounted(() => {
        let el = document.querySelector(hash)
        if(el) {
          if ('scrollBehavior' in document.documentElement.style) {
            window.scrollTo({ top: el.getBoundingClientRect().top+window.scrollY, behavior: 'smooth' })
          } else {
            window.scrollTo(0, el.getBoundingClientRect().top+window.scrollY)
          }
        }
      })
  }
}

</script>
<template>
  <div class="w">
    <AboutPurpose />
    <AboutOpportunity />
    <AboutRoadmap />
    <AboutSupport />
    <AboutMessage />
  </div>
</template>
<style lang="scss" scoped>
.w {
  @apply w-full;
}

</style>