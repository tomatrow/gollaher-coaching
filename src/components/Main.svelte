<script>
    import { onDestroy } from "svelte"
    // stores
    import { primaryNavigation, page, secondaryNavigation, load } from "../store.js"
    // routing
    import location, { noMatch, navigate } from "../router/location.js"
    import Route from "../router/Route.svelte"
    // routes
    import Home from "../routes/Home/index.svelte"
    import About from "../routes/About.svelte"
    import Contact from "../routes/Contact.svelte"
    import BlogList from "../routes/BlogList.svelte"
    import BlogItem from "../routes/BlogItem.svelte"
    import PackageList from "../routes/PackageList.svelte"
    import ServiceList from "../routes/ServiceList.svelte"
    import TestimonialList from "../routes/TestimonialList.svelte"
    import LessonList from "../routes/LessonList.svelte"
    import NotFound from "../routes/NotFound.svelte"

    console.log(window.svelteSpace)

    const unsubscribe = location.subscribe(value => {
        console.log(`Loading: "${value}"`)
        load(value)
            .then(data => {
                console.log(`Loaded: "${value}"`, data)
                page.set(data)
            })
            .catch(error => console.error(`Error Loading: "${value}"`, error))
    })

    onDestroy(unsubscribe)
</script>

<main>
    <Route path="/" component={Home} />
    <Route path="/about-me" component={About} />
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
</main>
