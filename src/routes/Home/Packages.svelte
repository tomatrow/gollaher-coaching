<script>
    import Link from "../../components/Link.svelte"
    import Card from "./Card.svelte"
    export let items
</script>

<div class="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
    {#each items as { excerpt, fullUrl, title }}
        <Card class="px-4 rounded text-white">
            <div class="py-4 sm:px-8">
                <Link href={fullUrl}>
                    <h3 class="font-bauhaus text-center uppercase text-xl">{title}</h3>
                </Link>
                <div class="font-secondary text-center font-bold">
                    {@html excerpt}
                </div>
            </div>
        </Card>
    {/each}
</div>
