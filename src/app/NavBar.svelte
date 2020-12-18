<script>
    import { onMount } from "svelte"
    import { slide } from "svelte/transition"

    import Hamburger from "./Hamburger.svelte"
    import Navigation from "../components/Navigation.svelte"
    import Logo from "../components/Logo.svelte"
    import Link from "../components/Link.svelte"

    export let hasLogo = false
    export let navigation
    let clazz = ""
    export { clazz as class }

    let showMenu = false
    let isLarge = false

    onMount(() => {
        const mql = window.matchMedia("(min-width: 1024px)")
        const updateMatcher = matcher => (isLarge = matcher.matches)
        updateMatcher(mql)
        mql.addEventListener("change", updateMatcher)
    })

    const navClasses = hasLogo ? "items-start p-4" : "items-center p-4"
    const menuClasses = hasLogo
        ? "flex-col items-end md:flex-wrap lg:items-center lg:flex-row lg:justify-end lg:space-x-2"
        : "justify-center space-x-2 flex-wrap items-center"
</script>

<nav
    transition:slide
    class="{clazz} {navClasses} font-bauhaus flex justify-between w-full font-bold"
    {...$$restProps}>
    {#if hasLogo}
        <Logo class="w-40 h-auto" />
    {/if}
    <div class="{menuClasses} flex w-full text-2xl">
        {#if hasLogo}
            <Hamburger class="lg:hidden mt-6" on:click={() => (showMenu = !showMenu)} />
        {/if}
        {#if !hasLogo || showMenu || isLarge}
            <Navigation items={navigation.items} />
            <Link href="/#contact" class="button">
                <span class="py-2 px-4 text-white uppercase">Book Now</span>
            </Link>
            <Link href="/not-found">Test</Link>
        {/if}
    </div>
</nav>
