<script>
    // routing
    import { noMatch } from "../location.js"
    import Route from "../components/Route.svelte"
    import Rule from "../components/Rule.svelte"
    // routes
    import Home from "../routes/Home/index.svelte"
    import NotFound from "../routes/NotFound.svelte"
</script>

<main class="flex flex-col justify-between">
    <Rule />
    <Route path="/" component={Home} />
    <Route path="/not-found" component={NotFound} />
    {#if $noMatch}
        <NotFound />
    {/if}
    <Rule />
</main>
