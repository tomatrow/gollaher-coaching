<script>
    import { noMatch, navigate } from "../singularity/location.js"

    import Link from "./Link.svelte"
    import Navigation from "./Navigation.svelte"
    import Route from "../singularity/Route.svelte"

    import Home from "../routes/Home.svelte"
    import About from "../routes/About.svelte"
    import Contact from "../routes/Contact.svelte"
    import BlogList from "../routes/BlogList.svelte"
    import BlogItem from "../routes/BlogItem.svelte"
    import PackageList from "../routes/PackageList.svelte"
    import ServiceList from "../routes/ServiceList.svelte"
    import TestimonialList from "../routes/TestimonialList.svelte"
    import LessonList from "../routes/LessonList.svelte"
    import NotFound from "../routes/NotFound.svelte"

    export let primaryNavigation
    export let secondaryNavigation
    export let page

    navigate((page.item || page.collection).fullUrl)
</script>

<main class="text-center p-4 mx-0 my-auto">
    <Navigation items={primaryNavigation.items} />
    <Route path="/" component={Home} />
    <Route path="/about" component={About} />
    <Route path="/contact" component={Contact} />
    <Route path="/packages" component={PackageList} />
    <Route path="/services" component={ServiceList} />
    <Route path="/testimonials" component={TestimonialList} />
    <Route path="/lessons" component={LessonList} />
    <Route path="/blog" component={BlogList} />
    <Route path="/blog/:id" component={BlogItem} />
    <Route path="/not-found" component={NotFound} />
    {#if $noMatch}
        <NotFound />
    {/if}
    <Navigation items={secondaryNavigation.items} />
</main>
