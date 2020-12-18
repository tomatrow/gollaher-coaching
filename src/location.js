import { writable } from "svelte/store"

const location = writable(window.location.pathname)
export default location

export const hash = writable(window.location.hash)

export let noMatch = writable(true)
location.subscribe(() => {
    noMatch.set(true)
    console.log("location.subscribe")
})

function update() {
    console.log("location.update")
    location.set(window.location.pathname)
    hash.set(window.location.hash)
}

window.addEventListener("click", event => {
    const anchor = event.target.closest("a")
    if (!anchor) return

    const { href } = anchor
    if (!href) return

    event.preventDefault()
    navigate(href)
})

window.addEventListener("popstate", update)

let hasPrevious = false

export function navigate(_path, replace = false) {
    hasPrevious = true
    const fn = replace ? "replaceState" : "pushState"
    history[fn](null, "", _path)
    update()
}

export function back() {
    if (hasPrevious) history.back()
    else navigate(window.location.pathname.replace(/[^/]+\/?$/, ""))
}
