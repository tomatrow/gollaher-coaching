<script>
    import location from "../singularity/location.js"
    import Link from "../components/Link.svelte"
    export let router
</script>

{#if $location != '/not-found'}
    <div>Not Found: {$location}</div>
{:else}
    <div>Not Found</div>
{/if}

<Link href="/">Home</Link>
