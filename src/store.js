import { writable, get, derived } from "svelte/store"

// straight up sqs stuff. I'm going to use their structure.
export const primaryNavigation = writable(window.svelteSpace.primaryNavigation)
export const page = writable(window.svelteSpace.page)
export const secondaryNavigation = writable(window.svelteSpace.secondaryNavigation)

function getPath(data) {
    data = data || get(page)
    return (data.item || data.collection).fullUrl
}
export const path = derived(page, getPath)

// set the active page in the navigations
page.subscribe($page => {
    const path = getPath($page)
    const updateNavigation = value => {
        for (let item of value.items) item.active = item.externalLink.url === path
        return value
    }
    primaryNavigation.update(updateNavigation)
    secondaryNavigation.update(updateNavigation)
})

export function load(path, force = false) {
    if (path === getPath() && !force) return

    return fetch(`${path}?format=json`)
        .then(response => response.json())
        .then(data => {
            if (data.error && path != "/not-found") {
                console.error(`Error loading path '${path}'`, data.error)
                load("/not-found")
                return
            }

            // set the new page data
            page.set(data)
        })
}

export function reload() {
    return load(getPath(), true)
}