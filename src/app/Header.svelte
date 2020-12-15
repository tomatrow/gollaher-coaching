<script>
    import { page, SETTINGS } from "../utility.js"
    import { getContext } from "svelte"

    import Navigation from "../components/Navigation.svelte"
    import Logo from "../components/Logo.svelte"
    import ProfileBlurb from "../components/ProfileBlurb.svelte"
    import Section from "../components/Section.svelte"

    $: isHome = $page.collection.fullUrl == "/"

    const settings = getContext(SETTINGS)

    export let navigation
</script>

<header
    class="font-bauhaus py-4 w-full bg-cover bg-no-repeat"
    style="background-image: url(/assets/bg_the_grid.png)">
    <div class="space-y-4 flex items-center flex-col">
        {#if isHome}
            <Logo class="mx-auto p-8 w-full sm:w-4/5">
                <a href="#contact" class="flex items-center flex-col">
                    <button class="button">
                        <span class="font-secondary py-2 px-4 text-white uppercase font-bold">Book
                            Now</span>
                    </button>
                </a>
            </Logo>
        {/if}
        <div class="space-x-2 flex items-center flex-wrap justify-center sm:mt-4 p-4">
            <Navigation items={navigation.items} />
            <a href="#contact">
                <button class="button"><span class="py-2 px-4 text-white uppercase">Contact Us</span></button>
            </a>
        </div>
        {#if isHome}
            <Section id="about">
                <ProfileBlurb
                    title={settings.home.headerProfileBlurb.title}
                    src={settings.home.headerProfileBlurb.src}
                    alt={settings.home.headerProfileBlurb.alt}>
                    {@html settings.home.headerProfileBlurb.body}
                </ProfileBlurb>
            </Section>
        {/if}
    </div>
</header>
