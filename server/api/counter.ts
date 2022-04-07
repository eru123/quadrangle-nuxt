import { getFirestore } from 'firebase-admin/firestore'
import { initializeApp, getApps, cert } from 'firebase-admin/app'
const apps = getApps()

if (!apps.length) {
    initializeApp({
        credential: cert("./service-account.json")
    })
}

export default async (req, res) => {
    const db = getFirestore()
    const id = 'visits'
    // increment the counter
    const doc = await db.collection('counters').doc(id).get()
    const counter = doc.data()
    const newCount = (counter?.count || 0 )+ 1
    await db.collection('counters').doc(id).set({ count: newCount })
    // return the new count
    return { count: newCount }
}

