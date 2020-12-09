<script>
    import { send, receive } from "../crossfade.js"
    let clazz = ""
    export { clazz as class }
</script>

<section
    in:receive
    out:send
    class="{clazz} max-w-screen-lg px-2 w-full sm:w-10/12 lg:w-3/4 text-white">
    <slot />
</section>
