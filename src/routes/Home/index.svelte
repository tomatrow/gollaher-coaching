<script>
    import { load, SETTINGS } from "../../utility.js"
    import { fade } from "svelte/transition"
    import { getContext } from "svelte"

    import Services from "./Services.svelte"
    import Packages from "./Packages.svelte"
    import Resources from "./Resources.svelte"
    import VideoLessons from "./VideoLessons.svelte"
    import Testimonials from "./Testimonials.svelte"
    import Title from "./Title.svelte"

    import Booking from "../../components/Booking.svelte"
    import Section from "../../components/Section.svelte"
    import Bar from "./Bar.svelte"
    import BlogPosts from "./BlogPosts.svelte"
    import Rule from "../../components/Rule.svelte"
    import ProfileBlurb from "../../components/ProfileBlurb.svelte"
    import Input from "../../components/Input.svelte"
    import Button from "../../components/Button.svelte"

    const settings = getContext(SETTINGS)

    export let router

    const getCollections = load(router.path).then(page => {
        const findCollection = path =>
            page.collection?.collections?.find(collection => collection.fullUrl == path)

        return {
            services: findCollection("/services"),
            packages: findCollection("/packages"),
            testimonials: findCollection("/testimonials"),
            lessons: findCollection("/lessons"),
            testimonials: findCollection("/testimonials"),
            blog: findCollection("/blog"),
            quotes: findCollection("/quotes")
        }
    })
</script>

{#await getCollections then collections}
    <Bar
        class="space-y-20 bg-bottom bg-cover bg-no-repeat"
        style="background-image: url(/assets/bg_angled_terrain.png);">
        <Section class="flex items-center flex-col">
            <Title href={collections.services.href} title={collections.services.title} />
            <Services items={collections.services.items} />
        </Section>
        <Section class="flex items-center flex-col">
            <Title href={collections.packages.href} title={collections.packages.title} />
            <Packages items={collections.packages.items} />
        </Section>
    </Bar>
    <Rule />
    <Bar class="bg-c">
        <Resources />
    </Bar>
    <Rule />
    <Bar
        class="space-y-10 bg-cover bg-no-repeat"
        style="background-image: url(/assets/bg_scan_lines.png);">
        <VideoLessons collection={collections.lessons} />
        <Section>
            <ProfileBlurb
                reverse
                title={settings.home.lowerProfileBlurb.title}
                src={settings.home.lowerProfileBlurb.src}
                alt={settings.home.lowerProfileBlurb.alt}>
                {@html settings.home.lowerProfileBlurb.body}
            </ProfileBlurb>
        </Section>
    </Bar>
    <Rule />
    <Bar
        class="space-y-20 bg-bottom bg-cover bg-no-repeat"
        style="background-image: url(/assets/bg_angled_terrain.png);">
        <Section>
            <Testimonials items={collections.testimonials.items.slice(0, 1)} />
        </Section>

        <BlogPosts collection={collections.blog} />
    </Bar>
    <Rule />
    <Bar class="bg-black text-white font-bold">
        <Section class="text-center">
            <div class="text-3xl">
                {@html collections.quotes.items[0].excerpt}
            </div>
            <h3 class="font-bauhaus uppercase text-xl">{collections.quotes.items[0].title}</h3>
        </Section>
    </Bar>
    <Rule />
    <Bar style="background-image: url(/assets/bg_scan_lines.png);">
        <Section
            class="space-y-4 sm:space-y-0 sm:space-x-4 flex flex-col sm:flex-row px-4 text-white">
            <div>
                <h3 class="font-jonney-fever text-center sm:text-left uppercase text-3xl">
                    {settings.home.contact.title}
                </h3>
                <div class="space-y-2 font-bold">
                    {@html settings.home.contact.body}
                </div>
            </div>
            <Booking />
        </Section>
    </Bar>
{:catch error}
    <p style="color: red">{error}</p>
{/await}
