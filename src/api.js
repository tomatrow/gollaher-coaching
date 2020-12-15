import { get } from "svelte/store"
import axios from "axios"
import location from "./location.js"

const host = "https://gollaher-coaching-backend.netlify.app"
const prefix = "/.netlify/functions/server"

const server = axios.create({
    baseURL: `${host}${prefix}/`
})

export function subscribe(email) {
    return server.post("/subscribe", {
        email,
        path: get(location)
    })
}

export function book(email, name, phone) {
    return server.post("/book", {
        email,
        name,
        phone,
        path: get(location)
    })
}

export async function instagram() {
    const response = await server.get("/instagram")
    return response.data.token
}
