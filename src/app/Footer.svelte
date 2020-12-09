<script>
    import { page, secondaryNavigation } from "../store.js"
    import Navigation from "../components/Navigation.svelte"
    import Link from "../components/Link.svelte"
    import Logo from "../components/Logo.svelte"
    import Input from "../components/Input.svelte"

    import Section from "../components/Section.svelte"
    import icons from "@icons-pack/svelte-simple-icons"

    $: number = $page.websiteSettings.contactPhoneNumber
    $: email = $page.websiteSettings.contactEmail
    $: socials = $page.website.socialAccounts
        .map(service => {
            for (let name of ["instagram", "facebook", "youtube"]) {
                if (service.serviceName != `${name}-unauth`) continue

                const capitalizedName = name.charAt(0).toUpperCase() + name.slice(1)
                return {
                    href: service.profileUrl,
                    icon: icons[capitalizedName]
                }
            }

            return null
        })
        .filter(service => service)
</script>

<footer class="bg-b font-secondary flex justify-center py-12 w-full text-white">
    <Section class="bg-b space-y-8 flex flex-col md:flex-row md:justify-around">
        <div class="space-y-8 flex items-center flex-col">
            <div class="sm:w-80 sm:max-w-none relative max-w-sm w-full">
                <Logo>
                    <span
                        class="font-secondary sm:absolute sm:bottom-0 sm:left-0 hidden sm:block sm:mb-4 text-white font-bold">{$page.website.siteTagLine}</span>
                </Logo>
            </div>
            <div class="space-y-1 flex items-center flex-col">
                <span class="font-bold">Subscribe to get the latest news from us</span>
                <div class="flex">
                    <Input type="email" placeholder=" Email" />
                    <button class="bg-a py-2 px-4">Subscribe</button>
                </div>
            </div>
        </div>
        <div class="md:space-x-8 flex justify-around">
            <div class="flex flex-col">
                <h5 class="font-bold">Navigation</h5>
                <Navigation items={$secondaryNavigation.items} />
            </div>
            <div class="flex flex-col">
                <h5 class="font-bold">Contact Us</h5>
                <a href="tel:{number}">{number}</a>
                <a href="mailto:{email}">{email}</a>
                <div class="space-x-2 flex justify-end mt-auto p-2">
                    {#each socials as { href, icon }}
                        <a {href} target="_blank">
                            <svelte:component this={icon} color="white" />
                        </a>
                    {/each}
                </div>
            </div>
        </div>
    </Section>
</footer>
