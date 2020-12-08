<script>
    import { load } from "../store.js"
    export let router
</script>

{#await load(router.path).then(page => page.item)}
    <p>...waiting</p>
{:then item}
    <h1>{item.title}</h1>
    <div>
        {@html item.body}
    </div>
{:catch error}
    <p style="color: red">{error}</p>
{/await}
