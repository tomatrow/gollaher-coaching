<script>
    import Link from "../components/Link.svelte"
    import { loadPage } from "../scripts/utility.js"
    export let router
</script>

{#await loadPage('/blog')}
    <p>...waiting</p>
{:then page}
    {#each page.items as item}
        <Link href={item.fullUrl}>{item.title}</Link>
    {/each}
{:catch error}
    {@debug error}
    <p style="color: red;">Error: {error.message}</p>
{/await}
