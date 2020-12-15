<script>
    import location, { navigate } from "../location.js"
    let clazz = ""
    export { clazz as class }
    export let href

    const isLocalAnchor = path =>
        path == "#" || (path.includes($location) && path.indexOf("#") !== -1)
</script>

<!-- svelte-ignore a11y-missing-attribute -->
<a
    class="{clazz} cursor-pointer"
    {...$$restProps}
    on:click|preventDefault={() => navigate(href, isLocalAnchor(href))}>
    <slot />
</a>
