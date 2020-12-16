<script>
    import { page, SETTINGS } from "../utility.js"
    import { getContext } from "svelte"
    import { fade } from "svelte/transition"

    import NavBar from "./NavBar.svelte"

    import Navigation from "../components/Navigation.svelte"
    import Logo from "../components/Logo.svelte"
    import ProfileBlurb from "../components/ProfileBlurb.svelte"
    import Section from "../components/Section.svelte"

    export let navigation
    let y

    function getPercent(y) {
        const container = document.querySelector("#navbar")
        if (!container) return 0
        const distance = container.offsetTop
        return y / distance
    }

    const settings = getContext(SETTINGS)

    $: isHome = $page.collection.fullUrl == "/"
    $: percent = getPercent(y)
    $: critical = percent >= 1
</script>

<style>
    .logo-container {
    }
</style>

<svelte:window bind:scrollY={y} />
{#if critical}
    <div class="fixed top-0 right-0 left-0 z-50 flex justify-center bg-black">
        <Section>
            <NavBar {navigation} hasLogo />
        </Section>
    </div>
{/if}
<header
    class="font-bauhaus py-4 w-full bg-cover bg-no-repeat"
    style="background-image: url(/assets/bg_the_grid.png); ">
    <div class="space-y-4 flex items-center flex-col justify-center">
        {#if isHome}
            <div class="logo-container w-full">
                <Logo class="logo m-auto p-8 max-w-full max-h-full" />
            </div>
        {/if}

        <NavBar id="navbar" {navigation} hasLogo={false} />

        {#if isHome}
            <Section class="anchor" id="about">
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
