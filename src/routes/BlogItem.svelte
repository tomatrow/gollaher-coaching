<script>
    import { loadPage } from "../scripts/utility.js"
    export let router
</script>

{#await loadPage(router.path)}
    <p>...waiting</p>
{:then page}
    <h1>{page.item.title}</h1>
    <div>
        {@html page.item.body}
    </div>
{/await}
