<script>
    import { page } from "../store.js"
    import Link from "./Link.svelte"
    $: website = $page.website
</script>

<Link href="/">
    <img class="mx-auto" src={website.logoImageUrl} alt={website.siteTitle} />
    <slot />
</Link>
