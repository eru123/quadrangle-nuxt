<script setup lang="ts">
import { computed, watchEffect } from 'vue'
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";

definePageMeta({
  layout: "default",
});

const accountType = useAccountType();
const accountTypeList = useAccountTypeList();
const userState = useUserState();
const validAccountType = computed(() => accountTypeList.value.find(i => i.title == accountType.value))
const userLoginState = computed(() => validAccountType.value && !!userState.value)

let loginWithGoogle;
if (process.client) {
  const { auth } = useNuxtApp().$firebase()
  const provider = new GoogleAuthProvider();

  watchEffect(() => {
    if (userLoginState.value) {
      navigateTo("/")
    }
  })
  
  loginWithGoogle = () => !userState.value ? signInWithPopup(auth, provider)
    .then((result) => {
      // This gives you a Google Access Token. You can use it to access the Google API.
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;
      // The signed-in user info.
      const user = result.user;
      // ...
      console.log(result, credential)
    }).catch((error) => {
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      // The email of the user's account used.
      const email = error.email;
      // The AuthCredential type that was used.
      const credential = GoogleAuthProvider.credentialFromError(error);
      console.log(error, credential)
    }) : null;
}

</script>
<template>
  <div class="w">
    <div class="c b">
      <div class="c">
        <img src="/img/signup.svg" />
        <h1>
          Learn with your
          <span class="brand">Quadmates</span>
        </h1>
        <p>Find like-minded individuals and collaborate, teach and learn from each other</p>
      </div>
    </div>
    <div class="c f">
      <div class="c">
        <img src="/img/logo.svg" class="logo" />
        <h1>Sign In</h1>
        <h3>Choose account type</h3>
        <ChooseAccountType />
        <div class="actions">
          <button
            :disabled="!validAccountType || (userState && !userLoginState)"
            @click="loginWithGoogle"
          >{{ userState?.email ? `Sign in as ${userState?.email}` : 'Sign in with google' }}</button>
        </div>
      </div>
    </div>
  </div>
</template>
<style lang='scss' scoped>
.w {
  @apply h-screen w-screen flex flex-row;

  & > .c {
    @apply flex-1 p-4 flex flex-col items-center justify-center;

    & > .c {
      width: 80%;
      max-width: 500px;
      @apply flex flex-col items-center justify-center text-center;
    }

    &.b {
      @apply bg-green-100 hidden lg:flex;

      img {
        width: 100%;
        max-width: 300px;
      }

      h1 {
        @apply text-3xl font-bold text-gray-800 pt-12 pb-4;
        font-family: "Montserrat", sans-serif;
        .brand {
          @apply font-bold text-teal-500;
        }
      }
      p {
        @apply font-bold text-gray-700 text-lg;
      }
    }

    &.f {
      @apply bg-white;

      & > .c {
        max-width: 400px;
      }

      .logo {
        width: 5rem;
      }

      h1 {
        @apply text-2xl font-bold text-gray-800 pt-12;
      }
      h3 {
        @apply text-sm font-bold text-gray-700 mb-4;
      }

      .actions {
        @apply flex flex-row items-center justify-center mt-8;
        button {
          @apply px-4 py-2 bg-blue-500 text-white font-bold rounded-lg hover:bg-blue-700 transition-all duration-200 ease-in-out;
          &:disabled {
            @apply cursor-not-allowed opacity-50;
          }
        }
      }
    }
  }
}
</style>