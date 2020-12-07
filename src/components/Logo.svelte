<script>
    import { page } from "../store.js"
    import Link from "./Link.svelte"
    $: website = $page.website
</script>

<div {...$$props}>
    <Link href="/"><img class="mx-auto" src={website.logoImageUrl} alt={website.siteTitle} /></Link>
    <slot />
</div>
