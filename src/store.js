import { writable } from "svelte/store"
import location from "./location.js"

// straight up sqs stuff. I'm going to use their structure.
export const primaryNavigation = writable(window.svelteSpace.primaryNavigation)
export const page = writable(window.svelteSpace.page)
export const secondaryNavigation = writable(window.svelteSpace.secondaryNavigation)

// update the navigation objects for the new active page.
location.subscribe($location => {
    for (let navigation of [primaryNavigation, secondaryNavigation])
        navigation.update(value => {
            for (let item of value.items) item.active = item.externalLink.url === $location
            return value
        })
})

// load data for an sqs page
export async function load(path) {
    const response = await fetch(`${path}?format=json`)
    const data = await response.json()

    if (data.error) throw new Error(`Error loading path: "${path}"`)

    console.log(`Loaded data for path: ${path}`, data)
    page.set(data)
    return data
}
