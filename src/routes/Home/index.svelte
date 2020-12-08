<script>
    import { path, page } from "../../store.js"
    import Rule from "../../components/Rule.svelte"
    import ServicesBar from "./ServicesBar.svelte"
    import { onDestroy } from "svelte"

    export let router

    $: services = $page.collection?.collections?.find(
        collection => collection.fullUrl == "/services"
    )

    const unsubscribe = page.subscribe(value => {
        console.log("Home Page data:", value.collection.title)
    })

    onDestroy(unsubscribe)
</script>

{@debug $path}
{@debug $page}
{#if $path === router.path}
    {#if services}
        <Rule />
        <ServicesBar collection={services} />
        <Rule />
    {/if}
{:else}waiting...{/if}
