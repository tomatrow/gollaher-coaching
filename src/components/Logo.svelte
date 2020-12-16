<script>
    import { fade } from "svelte/transition"
    import { page } from "../utility.js"
    // transition:fade={{ duration: 200 }}
</script>

<img {...$$props} src={$page.website.logoImageUrl} alt={$page.website.siteTitle} />
