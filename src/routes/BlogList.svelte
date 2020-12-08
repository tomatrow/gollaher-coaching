<script>
    import { load } from "../store.js"
    import Link from "../components/Link.svelte"
    export let router
</script>

{#await load(router.path)}
    <p>...waiting</p>
{:then page}
    <h1>{page.collection.title}</h1>
    {#each page.items as { fullUrl, title }}
        <Link href={fullUrl}>{title}</Link>
    {/each}
{:catch error}
    <p style="color: red">{error}</p>
{/await}
