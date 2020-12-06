<script>
    import Link from "./Link.svelte"
    export let items
</script>

<style>
    span {
        font-family: "Bauhaus 93";
    }
</style>

{#each items as { active, externalLink }}
    <Link href={externalLink.url}>
        <span class:font-bold={active} class="uppercase">{externalLink.title}</span>
    </Link>
{/each}
