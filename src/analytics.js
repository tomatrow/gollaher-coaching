import location from "./location.js"

export function gtag() {
    window.dataLayer = window.dataLayer ?? []
    window.dataLayer.push(arguments)
}

export function sendPageView(page_path) {
    gtag("config", GTM_ID, { page_path })
}

export function sendEvent(event_category, action, event_label) {
    gtag("event", action, {
        event_category,
        event_label
    })
}

export function sendBookEvent(email) {
    sendEvent("contact", "book", email)
}

export function sendSubscribeEvent(email) {
    sendEvent("contact", "subscribe", email)
}
