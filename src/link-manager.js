const ANCHOR_REGEX = /^#[^ ]+$/
const OFFSET_HEIGHT_PX = 100

/**
 * If the provided href is an anchor which resolves to an element on the
 * page, scroll to it.
 * @param  {String} href
 * @param {Number} offset
 * @return {Boolean} - Was the href an anchor.
 */
export function scrollToId(id = window.location.hash.slice(1), offset = OFFSET_HEIGHT_PX) {
    // console.trace()
    const match = document.getElementById(id)

    if (match == null) return false

    const rect = match.getBoundingClientRect()
    const anchorOffset = window.pageYOffset + rect.top - offset
    window.scrollTo({
        top: window.pageXOffset + anchorOffset
        // behavior: "smooth"
    })

    return true
}

// window.addEventListener("hashchange", () => console.log("hashchange"))
//
// document.body.addEventListener("click", event => {
//     const anchor = event.target.closest("a")
//     if (!anchor) return
//
//     const { href } = anchor
//     if (!href) return
//
//     const { pathname, hash } = new URL(href)
//
//     if (window.location.pathname == pathname && scrollToId(hash.slice(1))) {
//         event.preventDefault()
//     }
// })
