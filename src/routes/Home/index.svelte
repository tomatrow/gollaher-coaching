<script>
    import { SETTINGS } from "../../utility.js"

    import { getContext } from "svelte"

    import Services from "./Services.svelte"
    import Packages from "./Packages.svelte"
    import Resources from "./Resources.svelte"
    import Instagram from "./Instagram.svelte"
    import Testimonials from "./Testimonials.svelte"
    import MoreLink from "./MoreLink.svelte"

    import Title from "./Title.svelte"

    import Booking from "../../components/Booking.svelte"
    import Section from "../../components/Section.svelte"
    // import Link from "../../components/Link.svelte"
    import Bar from "./Bar.svelte"

    import Rule from "../../components/Rule.svelte"
    import ProfileBlurb from "../../components/ProfileBlurb.svelte"

    const settings = getContext(SETTINGS)

    export let router

    const findCollection = path =>
        router.data.collection?.collections?.find(collection => collection.fullUrl == path)

    const collections = {
        services: findCollection("/services"),
        packages: findCollection("/packages"),
        testimonials: findCollection("/testimonials"),
        quotes: findCollection("/quotes")
    }
</script>

<!-- Services / Packages -->
<Bar
    class="space-y-20 bg-bottom bg-cover bg-no-repeat"
    style="background-image: url(/assets/bg_angled_terrain.png);">
    <!-- Services -->
    <Section id="services" class="flex items-center flex-col">
        <Title title={collections.services.title} />
        <Services items={collections.services.items} />
    </Section>
    <!-- Packages -->
    <Section id="packages" class="flex items-center flex-col">
        <Title title={collections.packages.title} />
        <Packages items={collections.packages.items} />
    </Section>
</Bar>
<Rule />

<!-- "Get the Resource" CTA -->
<Bar class="bg-c">
    <Resources />
</Bar>
<Rule />

<!-- Lower Profile -->
<Bar
    class="space-y-10 bg-cover bg-no-repeat"
    style="background-image: url(/assets/bg_scan_lines.png);">
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

<!-- Testimonials / Instagram Feed -->
<Bar
    id="testimonials"
    class="space-y-20 bg-bottom bg-cover bg-no-repeat"
    style="background-image: url(/assets/bg_angled_terrain.png);">
    <Section class="flex items-center flex-col">
        <Title title={collections.testimonials.title} />
        <Testimonials items={collections.testimonials.items} />
        <MoreLink href={collections.testimonials.fullUrl}>Show More</MoreLink>
    </Section>
    <Section>
        <Instagram />
    </Section>
</Bar>
<Rule />

<!-- Quotes -->
<Bar class="bg-black text-white font-bold">
    <Section class="text-center">
        <div class="text-3xl">
            {@html collections.quotes.items[0].excerpt}
        </div>
        <h3 class="font-bauhaus uppercase text-xl">{collections.quotes.items[0].title}</h3>
    </Section>
</Bar>
<Rule />

<!-- Contact -->
<Bar id="contact" style="background-image: url(/assets/bg_scan_lines.png);">
    <Section class="space-y-4 sm:space-y-0 sm:space-x-4 flex flex-col sm:flex-row px-4 text-white">
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
