<script>
    import { page } from "../store.js"
    import Link from "./Link.svelte"
</script>

<h1>{$page.collection.title}</h1>
{#each $page.items as { fullUrl, title }}
    <Link href={fullUrl}>{title}</Link>
{/each}
