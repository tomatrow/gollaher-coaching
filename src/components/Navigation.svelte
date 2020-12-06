<script>
    import Link from "./Link.svelte"
    export let items
</script>

{#each items as { active, externalLink }}
    <Link href={externalLink.url}>
        <span class:text-c={active} class="uppercase">{externalLink.title}</span>
    </Link>
{/each}
