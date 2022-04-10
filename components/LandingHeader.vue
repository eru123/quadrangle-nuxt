<template>
  <div class="w">
    <div class="c">
      <NuxtLink class="g b" to="/about">
        <img src="/favicon.png" class="l">
        <div class="n">Quadrangle</div>
      </NuxtLink>
      <div class="g i">
        <NuxtLink to="/about" class="i">About</NuxtLink>
        <NuxtLink to="/team" class="i">Team</NuxtLink>
        <NuxtLink to="/survey" class="i">Survey</NuxtLink>
        <NuxtLink to="/signin" class="i">Login</NuxtLink>
      </div>
      <div class="g l">
        <NuxtLink to="/support" class="i">Support</NuxtLink>
      </div>
    </div>  
  </div>
</template>
<style lang='scss' scoped>@import 'assets/styles/variables.scss';

.w {
  @apply w-full flex flex-col items-center justify-center;

  .c {
    @apply w-full pb-6 pt-6 lg:pt-12 px-4 lg:px-8 grid grid-cols-2 lg:grid-cols-3 items-center;
    max-width: $max-screen-width;

    .g {
      @apply flex flex-row items-center lg:flex-1;

      &.b {
        @apply justify-start order-1;

        .l {
          @apply w-8 h-8 mr-2 lg:mr-4;
        }

        .n {
          @apply font-bold text-xl lg:text-2xl text-gray-700;
          font-weight: 900;
        }
      }

      &.i {
        @apply justify-center order-3 lg:order-2 col-span-2 lg:col-span-1 mt-8 lg:mt-0;

        .i {
          @apply text-gray-400 hover:text-teal-500 text-sm border-b-2 pb-1 border-white font-bold transition duration-200 ease-in-out lg:block;
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;

          &:not(:last-child) {
            @apply mr-8;
          }

          &.router-link-active {
            @apply text-teal-500 border-teal-500;
          }
        }
      }

      &.l {
        @apply justify-end order-2 lg:order-3;

        .i {
          @apply bg-teal-500 hover:bg-teal-600 text-sm text-white px-4 lg:px-8 py-2 rounded-full transition duration-200 ease-in-out;
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
        }
      }
    }
  }
}</style>