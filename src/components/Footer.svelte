<script>
    import { page, secondaryNavigation } from "../store.js"
    import Navigation from "./Navigation.svelte"
    import Link from "./Link.svelte"

    $: number = $page.websiteSettings.contactPhoneNumber
    $: email = $page.websiteSettings.contactEmail
    $: socials = $page.website.socialAccounts.filter(service =>
        ["instagram-unauth", "facebook-unauth", "youtube-unauth"].includes(service.serviceName)
    )
    $: website = $page.website
</script>

<style>
    footer {
        font-family: "Source Sans Pro";
    }
</style>

<footer
    class="bg-b text-white flex flex-col space-y-8 p-4 md:p-16 md:justify-around md:flex-row md:p-10 ">
    <div class="flex flex-col items-center space-y-8">
        <Link href="/">
            <div class="sm:relative" href="/">
                <img
                    class="w-full max-w-sm sm:w-80 sm:max-w-none"
                    src={website.logoImageUrl}
                    alt={website.siteTitle} />
                <span
                    class="hidden font-bold sm:block sm:absolute sm:bottom-0 sm:left-0 sm:mb-4">{website.siteTagLine}</span>
            </div>
        </Link>
        <div class="flex flex-col items-center space-y-1">
            <span class="font-bold">Subscribe to get the latest news from us</span>
            <div class="flex">
                <input class="py-2 px-0" type="email" placeholder=" Email" />
                <button class="bg-a px-4 py-2">Subscribe</button>
            </div>
        </div>
    </div>
    <div class="flex justify-around md:space-x-8">
        <div class="flex flex-col">
            <h5 class="font-bold">Navigation</h5>
            <Navigation items={$secondaryNavigation.items} />
        </div>
        <div class="flex flex-col">
            <h5 class="font-bold">Contact Us</h5>
            <a href="tel:{number}">{number}</a>
            <a href="mailto:{email}">{email}</a>
            <div class="mt-auto p-2 space-x-2 flex justify-end">
                {#each socials as { profileUrl, serviceName }}
                    <a href={profileUrl} target="_blank">{serviceName[0]}</a>
                {/each}
            </div>
        </div>
    </div>
</footer>
