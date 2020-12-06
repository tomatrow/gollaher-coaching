<script>
    import { primaryNavigation, page } from "../store.js"
    import location from "../router/location.js"
    import Navigation from "./Navigation.svelte"
    import Logo from "./Logo.svelte"
    import Link from "./Link.svelte"

    $: isHome = $location == "/"
    $: content = (() => {
        if (!isHome) return null
        const indexCopies =
            $page.collection &&
            $page.collection.collections &&
            $page.collection.collections.find(collection => collection.fullUrl === "/index-copy")
        return indexCopies && indexCopies.items[0].customContent
    })()
</script>

<style>
    header {
        background-image: url(/assets/bg_the_grid.png);
        background-repeat: no-repeat;
        background-size: cover;
    }
</style>

<header class="font-bauhaus bg-b w-full py-4">
    <div class="flex flex-col items-center">
        {#if isHome}
            <div class="w-full p-8 mx-auto sm:w-4/5">
                <Logo />
            </div>
        {/if}
        <div class="p-4 flex justify-center flex-wrap space-x-2 sm:mt-4">
            <Navigation items={$primaryNavigation.items} />
        </div>
        {#if content}
            <div class="flex flex-col items-center my-10 sm:flex-row sm:w-4/5 ">
                <Link href="/about" class="flex-shrink-0">
                    <img
                        class="h-full w-auto"
                        src="/assets/profile.png"
                        alt={$page.website.siteTitle} />
                </Link>
                <div class="flex flex-col text-white">
                    <h2 class="font-lazer p-4 sm:text-3xl">{content['heading-title']}</h2>
                    <div class="font-secondary font-bold space-y-2 p-4">
                        {@html content['heading-body'].html}
                    </div>
                </div>
            </div>
        {/if}
    </div>
</header>
