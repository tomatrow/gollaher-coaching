<script>
    import { path } from "../store.js"
    import StaticPage from "../components/StaticPage.svelte"
    export let router
</script>

{#if $path === router.path}
    <StaticPage />
{:else}loading...{/if}
