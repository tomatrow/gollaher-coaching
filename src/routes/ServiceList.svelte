<script>
    import { path } from "../store.js"
    import CollectionPage from "../components/CollectionPage.svelte"
    export let router
</script>

{#if $path === router.path}
    <CollectionPage />
{:else}waiting...{/if}
