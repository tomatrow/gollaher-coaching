<script>
    import location from "../location.js"
    export let items
</script>

{#each items as { externalLink }}
    <a
        href={externalLink.url}
        class="{$location == externalLink.url ? 'text-c' : 'text-white'} uppercase">
        {externalLink.title}
    </a>
{/each}
