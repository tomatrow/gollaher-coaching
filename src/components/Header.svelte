<script>
    import { primaryNavigation } from "../store.js"
    import Link from "./Link.svelte"
</script>

<header>
    {#each $primaryNavigation.items as { active, externalLink }}
        <Link href={externalLink.url}>{externalLink.title}</Link>
    {/each}
</header>
