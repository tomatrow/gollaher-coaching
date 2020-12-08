<script>
    import { page, secondaryNavigation } from "../store.js"
    import Navigation from "../components/Navigation.svelte"
    import Link from "../components/Link.svelte"
    import Logo from "../components/Logo.svelte"

    $: number = $page.websiteSettings.contactPhoneNumber
    $: email = $page.websiteSettings.contactEmail
    $: socials = $page.website.socialAccounts.filter(service =>
        ["instagram-unauth", "facebook-unauth", "youtube-unauth"].includes(service.serviceName)
    )
</script>

<footer
    class="bg-b text-white font-secondary flex-col space-y-8 p-4 md:p-16 md:justify-around md:flex-row md:p-10 flex">
    <div class="flex-col items-center space-y-8 flex">
        <div class="relative w-full max-w-sm sm:w-80 sm:max-w-none">
            <Logo>
                <span
                    class="hidden text-white font-secondary font-bold sm:block sm:absolute sm:bottom-0 sm:left-0 sm:mb-4">{$page.website.siteTagLine}</span>
            </Logo>
        </div>
        <div class="flex-col items-center space-y-1 flex">
            <span class="font-bold">Subscribe to get the latest news from us</span>
            <div class="flex">
                <input class="py-2 px-0" type="email" placeholder=" Email" />
                <button class="bg-a px-4 py-2">Subscribe</button>
            </div>
        </div>
    </div>
    <div class="justify-around md:space-x-8 flex">
        <div class="flex-col flex">
            <h5 class="font-bold">Navigation</h5>
            <Navigation items={$secondaryNavigation.items} />
        </div>
        <div class="flex-col flex">
            <h5 class="font-bold">Contact Us</h5>
            <a href="tel:{number}">{number}</a>
            <a href="mailto:{email}">{email}</a>
            <div class="mt-auto p-2 space-x-2 justify-end flex">
                {#each socials as { profileUrl, serviceName }}
                    <a href={profileUrl} target="_blank">{serviceName[0]}</a>
                {/each}
            </div>
        </div>
    </div>
</footer>
