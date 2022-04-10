<script setup lang="ts">

const select = useAccountType()
const list = useAccountTypeList()

</script>
<template>
  <div class="w">
    <div
      :class="`c${select == i.title ? ' a' : ''}`"
      v-for="  i   in list"
      :key="i.title"
      @click="select = i.title"
    >
      <div class="h">
        <span class="emoji">{{ i.emoji }}</span>
        {{ i.title }}
      </div>
      <div class="d">{{ i.description }}</div>
    </div>
  </div>
</template>
<style lang='scss' scoped>
* {
  cursor: pointer;
  user-select: none;
}
.w {
  @apply w-auto h-auto flex flex-col;

  .c {
    @apply bg-white mb-2 border-2 border-gray-400 rounded-lg p-2 flex-col items-center justify-center;

    .h {
      @apply w-full flex flex-row text-base items-center justify-start text-gray-700 capitalize;

      .emoji {
        @apply text-lg mr-2;
      }
    }

    .d {
      @apply w-full text-gray-700 text-left;
      font-size: 0.7rem;
    }

    &.a {
      @apply border-teal-700 bg-teal-100;

      .h {
        @apply text-teal-700;
      }

      .d {
        @apply text-teal-700;
      }
    }
  }
}
</style>