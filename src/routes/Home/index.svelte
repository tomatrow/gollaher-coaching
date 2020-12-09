<script>
    import { load, settings } from "../../store.js"

    import Services from "./Services.svelte"
    import Packages from "./Packages.svelte"
    import Resources from "./Resources.svelte"
    import VideoLessons from "./VideoLessons.svelte"
    import Testimonials from "./Testimonials.svelte"

    import Section from "./Section.svelte"
    import Bar from "./Bar.svelte"
    import BlogPosts from "./BlogPosts.svelte"
    import Rule from "../../components/Rule.svelte"
    import ProfileBlurb from "../../components/ProfileBlurb.svelte"
    import Input from "../../components/Input.svelte"
    import Button from "../../components/Button.svelte"

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

{#await getCollections}
    <p>...waiting</p>
{:then collections}
    <Rule />
    <Bar
        class="space-y-20 bg-bottom bg-cover bg-no-repeat"
        style="background-image: url(/assets/bg_angled_terrain.png);">
        <Services collection={collections.services} />
        <Packages collection={collections.packages} />
    </Bar>
    <Bar class="bg-c">
        <Resources />
    </Bar>
    <Bar
        class="space-y-4 bg-cover bg-no-repeat"
        style="background-image: url(/assets/bg_scan_lines.png);">
        <VideoLessons collection={collections.lessons} />
        <Section>
            <ProfileBlurb
                reverse
                title={$settings.home.lowerProfileBlurb.title}
                src={$settings.home.lowerProfileBlurb.src}
                alt={$settings.home.lowerProfileBlurb.alt}>
                {@html $settings.home.lowerProfileBlurb.body}
            </ProfileBlurb>
        </Section>
    </Bar>
    <Bar
        class="space-y-20 bg-bottom bg-cover bg-no-repeat"
        style="background-image: url(/assets/bg_angled_terrain.png);">
        <Testimonials collection={collections.testimonials} />
        <BlogPosts collection={collections.blog} />
    </Bar>
    <Bar class="bg-black text-white font-bold">
        <Section class="text-center">
            <div class="text-3xl">
                {@html collections.quotes.items[0].excerpt}
            </div>
            <h3 class="font-bauhaus uppercase text-xl">{collections.quotes.items[0].title}</h3>
        </Section>
    </Bar>
    <Bar style="background-image: url(/assets/bg_scan_lines.png);">
        <Section
            class="space-y-4 sm:space-y-0 sm:space-x-4 flex flex-col sm:flex-row px-4 text-white">
            <div>
                <h3 class="font-jonney-fever text-center sm:text-left uppercase text-3xl">
                    {$settings.home.contact.title}
                </h3>
                <div class="space-y-2 font-bold">
                    {@html $settings.home.contact.body}
                </div>
            </div>
            <div class="space-y-4 flex items-center flex-col sm:w-full">
                <Input class="w-full" type="text" placeholder=" Enter your full name" />
                <Input class="w-full" type="telephone" placeholder=" Enter your phone number" />
                <Input class="w-full" type="email" placeholder=" Enter your e-mail" />
                <Button class="mx-4">
                    <span class="font-bauhaus px-4 sm:max-w-xs uppercase text-2xl">Book Now</span>
                </Button>
            </div>
        </Section>
    </Bar>
{:catch error}
    <p style="color: red">{error}</p>
{/await}
