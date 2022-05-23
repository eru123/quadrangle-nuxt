import type { IncomingMessage, ServerResponse } from "http";
// import {db} from '../firebaseAdmin'

export default async (req: IncomingMessage, res: ServerResponse) => {
	// const body = await useBody(req)
    // console.log(body)
    // return { body }
    // const id = 'visits'
    // // increment the counter
    // const doc = await db.collection('counters').doc(id).get()
    // const counter = doc.data()
    // const newCount = (counter?.count || 0 )+ 1
    // await db.collection('counters').doc(id).set({ count: newCount })
    // // return the new count
    // return { count: newCount }
    console.log(Date.now(), Object.keys(req), useBody(req))
    return {ok: true}
}

