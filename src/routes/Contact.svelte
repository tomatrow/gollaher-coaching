<script>
    import { load } from "../store.js"
    export let router
</script>

{#await load(router.path).then(page => page.items[0])}
    <p>...waiting</p>
{:then collection}
    <h1>{collection.title}</h1>
    <div>
        {@html collection.body}
    </div>
{:catch error}
    <p style="color: red">{error}</p>
{/await}
