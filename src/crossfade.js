import { quintOut } from "svelte/easing"
import { crossfade } from "svelte/transition"
const [send, receive] = crossfade({
    // Sending/receiving transition duration (we can also define "delay" and "easing")
    duration: d => Math.sqrt(d * 200),

    // Optional fallback transition function if the crossfade pair lacks one part (missing "sending" OR "receiving" element)
    fallback(node, params) {
        const style = getComputedStyle(node)
        const transform = style.transform === "none" ? "" : style.transform
        return {
            duration: 600,
            easing: quintOut,
            css: t => `
        transform: ${transform} scale(${t});
        opacity: ${t}
      `
        }
    }
})
export { send, receive }
