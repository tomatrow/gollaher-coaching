<script>
    import { navigate } from "../router/location.js"
    export let href
</script>

<!-- svelte-ignore a11y-missing-attribute -->
<a {...$$props} on:click|preventDefault={() => navigate(href)}>
    <slot />
</a>
