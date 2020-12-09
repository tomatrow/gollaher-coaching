<script>
    import { page } from "../store.js"
    import { send, receive } from "../crossfade.js"
    import Link from "./Link.svelte"
    $: website = $page.website
</script>

<div {...$$props} in:receive out:send>
    <Link href="/"><img class="mx-auto" src={website.logoImageUrl} alt={website.siteTitle} /></Link>
    <slot />
</div>
