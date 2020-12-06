<script>
    import { path } from "../store.js"
    import ItemPage from "../components/ItemPage.svelte"
    export let router
</script>

{#if $path === router.path}
    <ItemPage />
{:else}loading...{/if}
