<template>
  <div class="w">
    <div class="c">
      <NuxtLink class="g b" to="/">
        <img src="/favicon.png" class="l">
        <div class="n">Quadrangle</div>
      </NuxtLink>
      <div class="g i">
        <NuxtLink to="/about" class="i">About</NuxtLink>
        <NuxtLink :to="{path:'/about', hash: '#roadmap'}" class="i">Roadmap</NuxtLink>
        <NuxtLink to="/contact" class="i">Contact Us</NuxtLink>
      </div>
      <div class="g l">
        <NuxtLink to="/support" class="i">Get Early Access</NuxtLink>
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
      @apply flex flex-row items-center lg:flex-1;
      &:not(:last-child) {
        @apply mb-4
      }

      &.b {
        @apply justify-center lg:justify-start;

        .l {
          @apply w-6 h-6 mr-2 lg:mr-4;
        }

        .n {
          @apply font-bold text-base text-teal-500;
          font-weight: 900;
        }
      }

      &.i {
        @apply justify-center ;

        .i {
          @apply text-gray-700 hover:text-teal-500 text-sm font-normal transition duration-200 ease-in-out lg:block;
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;


          &:not(:last-child) {
            @apply mr-8;
          }

          &.router-link-active {
            @apply text-teal-500;
            
          }
        }
      }

      &.l {
        @apply justify-center lg:justify-end;

        .i {
          @apply bg-teal-500 hover:bg-teal-600 text-sm text-white px-4 lg:px-8 py-2 rounded-full transition duration-200 ease-in-out;
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
        }
      }
    }
  }
}
</style>