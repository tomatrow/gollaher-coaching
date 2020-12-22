import { writable, get } from "svelte/store"
import { toast } from "@zerodevx/svelte-toast"
import { book, subscribe } from "./api.js"
import { sendBookEvent, sendSubscribeEvent } from "./analytics.js"

// key for settings
export const SETTINGS = {}

// input
export const name = writable("")
export const email = writable("")
export const phone = writable("")

function show(message) {
    const id = toast.push(message, {
        duration: 300,
        initial: 0,
        progress: 0,
        dismissable: false
    })
    return function hide() {
        toast.set(id, { progress: 1 })
    }
}

export async function onSubscribe() {
    const hide = show("Sending...")
    try {
        await subscribe(get(email))
        sendSubscribeEvent(get(email))
        hide()
        toast.push("Thanks for subscribing!")
    } catch (error) {
        hide()
        console.error(error)
        toast.push("Error", { "--toastBackground": "red" })
    }
}

export async function onBook() {
    const hide = show("Sending...")
    try {
        await book(get(email), get(name), get(phone))
        sendBookEvent(get(email))
        hide()
        toast.push("Thanks for booking!")
    } catch (error) {
        hide()
        console.error(error)
        toast.push("Error", { "--toastBackground": "red" })
    }
}

// instagram images
export const feed = writable({ data: [], paging: {} })

// wrapped means it's wrapped in an array
// it's the only way I found to avoid parsing errors in the dom when injecteting sqs data
const parse = (id, isWrapped = true, doc = document) => {
    const data = JSON.parse(doc.querySelector(`#${id}`).innerText)
    return isWrapped ? data.shift() : data
}

// straight up sqs stuff. I'm going to use their structure.
export const page = writable(parse("page"))

const parser = new DOMParser()

// load data for an sqs page
export async function load(path) {
    const response = await fetch(path)
    const responseText = await response.clone().text()

    const doc = parser.parseFromString(responseText, "text/html")
    const data = parse("page", true, doc)
    // work around, since sqs doesn't always show the items of sub-collections on an index page
    if (path == "/") data.collections = parse("collections", false, doc).filter(Boolean)

    page.set(data)

    return data
}
