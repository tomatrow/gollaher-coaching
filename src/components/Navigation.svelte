<script>
    import location from "../location.js"
    export let items
</script>

{#each items as { externalLink }}
    <a href={externalLink.url}>
        <span
            class="{$location == externalLink.url ? 'text-c' : 'text-white'} uppercase">{externalLink.title}</span>
    </a>
{/each}
