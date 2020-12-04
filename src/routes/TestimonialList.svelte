<script>
    import { loadPage } from "../scripts/utility.js"
    export let router
</script>

{#await loadPage(router.path)}
    <p>...waiting</p>
{:then page}
    {#each page.items as item}{item.title}{/each}
{/await}
