<script>
    import { load } from "../../store.js"
    import Rule from "../../components/Rule.svelte"
    import ServicesBar from "./ServicesBar.svelte"

    export let router

    const getCollections = load(router.path).then(page => {
        const findCollection = path =>
            page.collection?.collections?.find(collection => collection.fullUrl == path)

        return {
            services: findCollection("/services")
        }
    })
</script>

{#await getCollections}
    <p>...waiting</p>
{:then collections}
    {#if collections.services}
        <Rule />
        <ServicesBar collection={collections.services} />
        <Rule />
    {/if}
{:catch error}
    <p style="color: red">{error}</p>
{/await}
