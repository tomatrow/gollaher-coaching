<script>
    let clazz = ""
    export { clazz as class }
    export let href
</script>

<!-- svelte-ignore a11y-missing-attribute -->
<a {href} class="{clazz} cursor-pointer" {...$$restProps}>
    <slot />
</a>
