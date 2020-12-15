import { writable, get } from "svelte/store"

// key for settings
export const SETTINGS = {}

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

console.log(get(page))

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
