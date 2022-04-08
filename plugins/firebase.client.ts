import { defineNuxtPlugin } from '#app'
import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getAuth, signOut } from 'firebase/auth'

export default defineNuxtPlugin(({ $config }) => {
  const app = initializeApp($config.FIREBASE);

  return {
    provide: {
      firebase: () => {
        const firestore = getFirestore(app)
        const auth = getAuth(app)
        const logout = () => signOut(auth)

        return {
          app,
          firestore,
          auth,
          logout
        }
      }
    }
  }
})

