import { defineNuxtPlugin } from '#app'
import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getAuth, } from 'firebase/auth'

export default defineNuxtPlugin(({$config}) => {
  const app = initializeApp($config.FIREBASE);

  return {
    provide: {
      firebase: () => ({
        app,
        firestore: getFirestore(app),
        auth: getAuth(app),
        logout: () => getAuth(app).signOut(),
      })
    }
  }
})

