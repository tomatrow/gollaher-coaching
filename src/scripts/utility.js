import { navigate } from "../singularity/location.js"

export async function loadPage(path) {
    if (path === undefined) throw new Error('path is undefined')

    let { page } = window.svelteSpace

    if (page.item && page.item.fullUrl === path || !page.item && page.collection.fullUrl === path) {
        console.log(`Already loaded ${path}`) 
    } else {
        console.log(`Fetching page at ${path}`)
        const response = await fetch(`${path}?format=json`)
        page = await response.json()
        if (page.error) navigate('/not-found')
        window.svelteSpace.page = page
    }

    console.log("Loaded page", page)

    return page
}