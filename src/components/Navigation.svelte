<script>
    import { slide } from "svelte/transition"
    import location from "../location.js"
    export let items
</script>

{#each items as { externalLink }}
    <a
        transition:slide
        href={externalLink.url}
        class="{$location == externalLink.url ? 'text-c' : 'text-white'} uppercase">
        {externalLink.title}
    </a>
{/each}
