<script>
    // routing
    import location, { noMatch } from "../location.js"
    import { load } from "../utility.js"
    import Route from "../components/Route.svelte"
    import Rule from "../components/Rule.svelte"
    // routes
    import Home from "../routes/Home/index.svelte"
    import NotFound from "../routes/NotFound.svelte"
    import TestimonialList from "../routes/TestimonialList.svelte"
    import TestimonialItem from "../routes/TestimonialItem.svelte"

    const resource = () => load($location)
</script>

<main class="flex flex-col justify-between">
    <Rule />
    <Route path="/" component={Home} {resource} />
    <Route path="/not-found" component={NotFound} />
    <Route path="/testimonials" component={TestimonialList} {resource} />
    <Route path="/testimonials/:slug" component={TestimonialItem} {resource} />
    {#if $noMatch}
        <NotFound />
    {/if}
    <Rule />
</main>
