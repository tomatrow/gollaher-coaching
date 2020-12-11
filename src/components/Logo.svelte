<script>
    import { fade } from "svelte/transition"
    import { page } from "../utility.js"
    import Link from "./Link.svelte"
</script>

<div {...$$props} transition:fade={{ duration: 200 }}>
    <Link href="/">
        <img class="mx-auto" src={$page.website.logoImageUrl} alt={$page.website.siteTitle} />
    </Link>
    <slot />
</div>
