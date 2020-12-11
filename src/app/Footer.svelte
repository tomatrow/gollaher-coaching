<script>
    import { page } from "../utility.js"
    import Navigation from "../components/Navigation.svelte"
    import Logo from "../components/Logo.svelte"
    import Input from "../components/Input.svelte"
    import Section from "../components/Section.svelte"

    const getName = serviceName => serviceName.replace("-unauth", "")

    function handleClick(event) {}

    export let navigation
</script>

<footer class="font-secondary flex justify-center py-12 w-full bg-b text-white">
    <Section class="space-y-8 flex flex-col md:flex-row md:justify-around bg-b">
        <div class="space-y-8 flex items-center flex-col">
            <div class="sm:w-80 sm:max-w-none relative w-full max-w-sm">
                <Logo>
                    <span
                        class="font-secondary sm:absolute sm:bottom-0 sm:left-0 hidden sm:block sm:mb-4 text-white font-bold">{$page.website.siteTagLine}</span>
                </Logo>
            </div>
            <div class="space-y-1 flex items-center flex-col">
                <span class="font-bold">Subscribe to get the latest news from us</span>
                <div class="flex">
                    <Input type="email" placeholder=" Email" />
                    <button
                        class="py-2 px-4 bg-a"
                        on:click|preventDefault={handleClick}>Subscribe</button>
                </div>
            </div>
        </div>
        <div class="md:space-x-8 flex justify-around font-bold">
            <div class="flex flex-col">
                <h5 class="text-2xl">Navigation</h5>
                <Navigation items={navigation.items} />
            </div>
            <div class="flex flex-col">
                <h5 class="text-2xl">Contact Us</h5>
                <a
                    href="tel:{$page.websiteSettings.contactPhoneNumber}">{$page.websiteSettings.contactPhoneNumber}</a>
                <a
                    href="mailto:{$page.websiteSettings.contactEmail}">{$page.websiteSettings.contactEmail}</a>
                <div class="space-x-2 flex justify-end mt-auto p-2">
                    {#each $page.website.socialAccounts as { profileUrl, serviceName }}
                        {#if ['instagram', 'youtube', 'facebook'].includes(getName(serviceName))}
                            <a href={profileUrl} target="_blank">
                                <img
                                    class="w-6"
                                    src="/assets/{getName(serviceName)}.svg"
                                    alt={getName(serviceName)} />
                            </a>
                        {/if}
                    {/each}
                </div>
            </div>
        </div>
    </Section>
</footer>
