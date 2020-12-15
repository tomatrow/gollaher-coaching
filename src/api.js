import { get } from "svelte/store"
import location from "./location.js"

const host = "https://gollaher-coaching-backend.netlify.app"
const prefix = "/.netlify/functions/server"
const base = `${host}${prefix}`

export function subscribe(email) {
    return fetch(`${base}/subscribe`, {
        email,
        path: get(location)
    })
}

export function book(email, name, phone) {
    return fetch(`${base}/book`, {
        email,
        name,
        phone,
        path: get(location)
    })
}

export async function instagram() {
    const response = await fetch(`${base}/instagram`)
    const { token } = await response.json()

    return token
}
