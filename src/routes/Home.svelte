<script>
    import IndexPage from "../components/IndexPage.svelte"
    import { path } from "../store.js"
    export let router
</script>

{#if $path === router.path}
    <IndexPage />
{:else}waiting...{/if}
