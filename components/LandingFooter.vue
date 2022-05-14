<script setup>

const navs = [
  {to:'/about', text: 'About'},
  {to:{path:'/about', hash: '#roadmap'}, text: 'Roadmap'},
  {to:'/contact', text: 'Contact Us'},
]

const social = [
  {to: 'https://instagram.com', icon: ['fab','instagram']},
  {to: 'https://facebook.com', icon: ['fab','facebook']},
]

</script>

<template>
  <div class="w">
    <div class="c">
      <NuxtLink class="g b" to="/">
        <img src="/favicon.png" class="l">
        <div class="n">Quadrangle</div>
      </NuxtLink>
      <div class="g i">
        <NuxtLink v-for="{to, text}, i in navs" :to="to" class="i" :key="i">{{text}}</NuxtLink>
      </div>
      <div class="g l">
        <NuxtLink v-for="{to, icon}, i in social" target="_blank" :to="to" class="i" :key="i">
          <icon :icon="icon" />
        </NuxtLink>
      </div>
    </div> 
  </div>
</template>
<style lang='scss' scoped>

.w {
  @apply w-full flex flex-col items-center justify-center;

  .c {
    @apply w-full py-4 px-4 lg:px-8 grid grid-cols-1 md:grid-cols-3 items-center max-w-screen-lg items-center justify-center;

    .g {
      @apply flex flex-row items-center flex-1;
        @apply mb-8 md:mb-0;

      &.b {
        @apply justify-center md:justify-start order-1;

        .l {
          @apply w-6 h-6 mr-2 md:mr-4;
        }

        .n {
          @apply font-bold text-base text-teal-500;
          font-weight: 900;
        }
      }

      &.i {
        @apply justify-center order-3 md:order-2;

        & > .i {
          @apply text-gray-700 hover:text-teal-500 text-sm font-normal transition duration-200 ease-in-out lg:block mx-2 md:mx-4 ;
          white-space: nowrap !important;
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        }
      }

      &.l {
        @apply justify-center md:justify-end lg:justify-end order-2 md:order-3;

        .i {
          @apply mx-4 md:ml-4 mr-0;

          & > * {
            @apply p-4 md:p-3 bg-gray-400 hover:bg-gray-700 text-white rounded-full transition duration-200 ease-in-out;
            @apply w-4 h-4;
          }
        }
      }
    }
  }
}
</style>