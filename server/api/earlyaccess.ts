import {db} from '../firebaseAdmin'
import {useBody} from 'h3'
import pick from 'lodash.pick'

export default async (req, res) => {
	const body = pick(await useBody(req), ['fname','lname','email','organization','role'])
    const id = body.email
    return await db.collection('newsletter').doc(id).set(body)
        .then(() => {
            return {
                success: true,
                message: "Subscribed"
            }
        })
        .catch(() => {
            return {
                success: false,
                message: "Subscription failed, try again."
            }
        })
}

