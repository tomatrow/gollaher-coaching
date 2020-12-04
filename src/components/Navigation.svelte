<script>
    import Link from "./Link.svelte"
    export let items
</script>

<nav class="space-x-4">
    {#each items as item}
        {#if item.externalLink}
            <Link href={item.externalLink.url}>{item.externalLink.title}</Link>
        {:else}<span>Unknown nav item</span>{/if}
    {/each}
</nav>
