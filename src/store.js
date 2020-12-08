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
    if (path === getPath() && !force) {
        console.warn(`Already loaded ${path}`)
        return Promise.resolve(get(page))
    }

    return fetch(`${path}?format=json`)
        .then(response => response.json())
        .then(data => {
            if (data.error) throw new Error(`Error loading path: "${path}"`)
            return data
        })
}

export function reload() {
    return load(getPath(), true)
}
