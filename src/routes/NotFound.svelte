<script>
    import location from "../router/location.js"
    import Link from "../components/Link.svelte"
</script>

{#if $location != '/not-found'}
    <div>Not Found: {$location}</div>
{:else}
    <div>Not Found</div>
{/if}

<Link href="/">Home</Link>
