<template>
  <div class="w">
    <div class="c">
      <NuxtLink class="g b" to="/about">
        <img src="/favicon.png" class="l">
        <div class="n">Quadrangle</div>
      </NuxtLink>
      <div class="g i">
        <NuxtLink to="/home" class="i">Home <hr /></NuxtLink>
        <NuxtLink to="/about" class="i">About <hr /></NuxtLink>
        <NuxtLink to="/contact" class="i">About <hr /></NuxtLink>
      </div>
      <div class="g l">
        <NuxtLink to="/support" class="i">Get Early Access</NuxtLink>
      </div>
    </div>  
  </div>
</template>
<style lang='scss' scoped>@import 'assets/styles/variables.scss';

.w {
  @apply w-full flex flex-col items-center justify-center;

  .c {
    @apply w-full py-6 px-4 lg:px-8 grid grid-cols-2 lg:grid-cols-3 items-center;
    max-width: $max-screen-width;

    .g {
      @apply flex flex-row items-center lg:flex-1;

      &.b {
        @apply justify-start order-1;

        .l {
          @apply w-8 h-8 mr-2 lg:mr-4;
        }

        .n {
          @apply font-bold text-xl lg:text-2xl text-teal-500;
          font-weight: 900;
        }
      }

      &.i {
        @apply justify-center order-3 lg:order-2 col-span-2 lg:col-span-1 mt-8 lg:mt-0;

        .i {
          @apply text-gray-400 hover:text-teal-500 text-sm font-bold transition duration-200 ease-in-out lg:block;
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;

          hr {
            @apply border-t-2 mx-2 mt-1 border-white;
          }

          &:not(:last-child) {
            @apply mr-8;
          }

          &.router-link-active {
            @apply text-teal-500;
            
            hr {
              @apply border-teal-500;
              animation: ms-in .2s ease-out;
            }

            @keyframes ms-in {
              from {
                @apply mx-0;
              }

              to {
                @apply mx-2;
              }
            }
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
}
</style>