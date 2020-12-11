<script>
    import Link from "./Link.svelte"
    import location from "../location.js"
    export let items
</script>

{#each items as { externalLink }}
    <Link href={externalLink.url}>
        <span
            class="{$location == externalLink.url ? 'text-c' : 'text-white'} uppercase">{externalLink.title}</span>
    </Link>
{/each}
