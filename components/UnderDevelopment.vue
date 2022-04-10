<template>
  <div class="w">
    <div class="c">

      <h1>Under <span class="tc">Development</span></h1>
      <p>This part of the application is currently under developement. We require your patience until this feature is working fine.</p>
    </div>  </div>
</template>
<style lang='scss' scoped>
@import 'assets/styles/variables.scss';
.w {
  @apply w-full flex flex-col items-center justify-center;

  .c {
    @apply w-full pb-6 pt-12 px-8 mx-auto flex flex-col items-center;
    max-width: 500px;

    .tc {
      @apply text-teal-600;
    }

    h1 {
      @apply text-3xl text-gray-700 font-normal my-4;
    }

    p {
      @apply text-gray-500 text-center text-lg;
    }
  }
}
</style>