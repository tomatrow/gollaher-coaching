<script>
    import { fade } from "svelte/transition"
    let clazz = ""
    export { clazz as class }
</script>

<section
    transition:fade={{ duration: 200 }}
    class="{clazz} max-w-screen-lg px-2 w-full sm:w-10/12 lg:w-3/4 text-white"
    {...$$restProps}>
    <slot />
</section>
