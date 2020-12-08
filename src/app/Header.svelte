<script>
    import { primaryNavigation, page } from "../store.js"

    import Navigation from "../components/Navigation.svelte"
    import Logo from "../components/Logo.svelte"
    import Link from "../components/Link.svelte"
    import Button from "../components/Button.svelte"

    $: isHome = $page.collection.fullUrl == "/"
    $: content =
        isHome &&
        $page.collection?.collections
            ?.find(collection => collection.fullUrl === "/index-copy")
            ?.shift()?.customContent
</script>

<style>
    header {
        background-image: url(/assets/bg_the_grid.png);
        background-size: cover;
        background-repeat: no-repeat;
    }
</style>

<header class="font-bauhaus bg-b w-full py-4">
    <div class="flex-col items-center flex">
        {#if isHome}
            <Logo class="w-full p-8 mx-auto sm:w-4/5">
                <Link href="/contact" class="flex-col items-center flex">
                    <Button>
                        <span class="text-white font-bold font-secondary uppercase px-4 py-2">Book
                            Now</span>
                    </Button>
                </Link>
            </Logo>
        {/if}
        <div class="p-4 justify-center items-center space-x-2 sm:mt-4 flex flex-wrap">
            <Navigation items={$primaryNavigation.items} />
            <Link href="/contact">
                <Button><span class="px-4 py-2 uppercase text-white">Contact Us</span></Button>
            </Link>
        </div>
        {#if content}
            <div class="flex-col items-center justify-center my-10 sm:flex-row sm:w-4/5 flex">
                <Link href="/about" class="flex-grow-0 flex-shrink-0 sm:w-2/5">
                    <img
                        class="mx-auto h-auto w-4/5 sm:w-full"
                        src="/assets/profile.png"
                        alt={$page.website.siteTitle} />
                </Link>
                <div class="flex-col text-white flex">
                    <h2 class="font-lazer p-4 sm:text-3xl">{content['heading-title']}</h2>
                    <div class="font-secondary font-bold space-y-2 p-4">
                        {@html content['heading-body'].html}
                    </div>
                </div>
            </div>
        {/if}
    </div>
</header>
