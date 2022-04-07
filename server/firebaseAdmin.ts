import { getFirestore } from 'firebase-admin/firestore'
import { initializeApp, getApps, cert } from 'firebase-admin/app'

export const apps = getApps()

if (!apps.length) {
    initializeApp({
        credential: cert({
          projectId: process.env.FBA_PROJECTID, 
          clientEmail: process.env.FBA_CLIENTEMAIL, 
          privateKey: process.env.FBA_PRIVATEKEY?.replace(/\\n/g, '\n'),
        })
    })
}

export const db = getFirestore()