import { writable } from "svelte/store"

const location = writable(window.location.pathname)
export default location

export const hash = writable(window.location.hash)

export let noMatch = writable(true)
location.subscribe(() => noMatch.set(true))

function update() {
    location.set(window.location.pathname)
    hash.set(window.location.hash)
}

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

window.addEventListener("click", event => {
    const anchor = event.target.closest("a")
    if (anchor?.href === undefined) return

    event.preventDefault()
    navigate(anchor.href)
})

const ANCHOR_REGEX = /^#[^ ]+$/
const OFFSET_HEIGHT_PX = 100

/**
 * If the provided href is an anchor which resolves to an element on the
 * page, scroll to it.
 * @param  {String} href
 * @param {Number} offset
 * @return {Boolean} - Was the href an anchor.
 */
export function scrollToId(id) {
    const offset =
        document.querySelector("#floating-navbar")?.getBoundingClientRect().height ??
        OFFSET_HEIGHT_PX
    const match = document.getElementById(id)

    if (match == null) return false

    const rect = match.getBoundingClientRect()
    const anchorOffset = window.pageYOffset + rect.top - offset
    window.scrollTo({
        top: window.pageXOffset + anchorOffset
    })

    return true
}
