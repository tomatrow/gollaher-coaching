import { writable, get } from "svelte/store"
import location from "./location.js"

// wrapped means it's wrapped in an array
// it's the only way I found to avoid parsing errors in the dom when injecteting sqs data
const parse = (id, isWrapped = true, doc = document) => {
    const data = JSON.parse(doc.querySelector(`#${id}`).innerText)
    return isWrapped ? data.shift() : data
}

// straight up sqs stuff. I'm going to use their structure.
export const primaryNavigation = writable(parse("primaryNavigation"))
export const page = writable(parse("page"))
export const secondaryNavigation = writable(parse("secondaryNavigation"))
export const settings = writable(parse("settings", true))

console.log(get(page), get(primaryNavigation), get(secondaryNavigation), get(settings))

// update the navigation objects for the new active page.
location.subscribe($location => {
    for (let navigation of [primaryNavigation, secondaryNavigation])
        navigation.update(value => {
            for (let item of value.items) item.active = item.externalLink.url === $location
            return value
        })
})

const parser = new DOMParser()

// load data for an sqs page
export async function load(path) {
    const response = await fetch(path)
    const responseText = await response.text()

    const doc = parser.parseFromString(responseText, "text/html")
    const data = parse("page", true, doc)
    // work around, since sqs doesn't always show the items of sub-collections on an index page
    if (path == "/")
        data.collections = parse("collections", false, doc).filter(collection => collection)

    page.set(data)

    return data
}
