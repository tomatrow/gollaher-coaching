<script>
    import { load, settings } from "../../store.js"

    import Services from "./Services.svelte"
    import Packages from "./Packages.svelte"
    import Resources from "./Resources.svelte"
    import VideoLessons from "./VideoLessons.svelte"

    import Section from "./Section.svelte"
    import Bar from "./Bar.svelte"
    import Rule from "../../components/Rule.svelte"
    import ProfileBlurb from "../../components/ProfileBlurb.svelte"

    export let router

    const getCollections = load(router.path).then(page => {
        const findCollection = path =>
            page.collection?.collections?.find(collection => collection.fullUrl == path)

        return {
            services: findCollection("/services"),
            packages: findCollection("/packages"),
            testimonials: findCollection("/testimonials"),
            lessons: findCollection("/lessons")
        }
    })
</script>

{#await getCollections}
    <p>...waiting</p>
{:then collections}
    <Rule />
    <Bar
        class="space-y-20 bg-bottom bg-cover bg-no-repeat"
        style="background-image: url(/assets/bg_angled_terrain.png)">
        <Services collection={collections.services} />
        <Packages collection={collections.packages} />
    </Bar>
    <Bar class="bg-c">
        <Resources />
    </Bar>
    <Bar class="bg-cover bg-no-repeat" style="background-image: url(/assets/bg_scan_lines.png)">
        <VideoLessons collection={collections.lessons} />
        <ProfileBlurb
            reverse
            title={$settings.home.lowerProfileBlurb.title}
            src={$settings.home.lowerProfileBlurb.src}
            alt={$settings.home.lowerProfileBlurb.alt}>
            {@html $settings.home.lowerProfileBlurb.body}
        </ProfileBlurb>
    </Bar>
    <Bar
        class="space-y-20 bg-bottom bg-cover bg-no-repeat"
        style="background-image: url(/assets/bg_angled_terrain.png)">
        <!-- <Section>
            <h3>{collections.testimonials.items.shift().title}</h3>
            <img
                src={collections.testimonials.items.shift().assetUrl}
                alt={collections.testimonials.items.shift().alt} />
            {@html collections.testimonials.items.shift().excerpt}
        </Section> -->
    </Bar>
{:catch error}
    <p style="color: red">{error}</p>
{/await}
