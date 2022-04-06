<template>
  <div>
    <h1>Some shared layout content:</h1>
    <slot />
  </div>
</template>
<style lang="scss">
h1 {
  @apply text-green-500;
}
</style>