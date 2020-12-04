import { writable } from 'svelte/store'

const location = writable(window.location.pathname)
export default location

export let noMatch = writable(true)
location.subscribe(() => noMatch.set(true))

window.addEventListener('popstate', () => location.set(window.location.pathname))

let hasPrevious = false

export function navigate(_path, replace = false) {
  hasPrevious = true
  const fn = replace ? 'replaceState' : 'pushState'
  history[fn](null, '', _path)
  location.set(window.location.pathname)
}

export function back() {
  if (hasPrevious) history.back()
  else navigate(window.location.pathname.replace(/[^/]+\/?$/, ''))
}