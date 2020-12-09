<script>
    import { navigate } from "../location.js"
    export let href
</script>

<style>
    a {
        cursor: pointer;
    }
</style>

<!-- svelte-ignore a11y-missing-attribute -->
<a {...$$restProps} on:click|preventDefault={() => navigate(href)}>
    <slot />
</a>
