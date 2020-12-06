<script>
    import CollectionPage from "../components/CollectionPage.svelte"
    import { path } from "../store.js"
    export let router
</script>

{#if $path === router.path}
    <CollectionPage />
{:else}waiting...{/if}
