<script>
    import Card from "./Card.svelte"
    export let items
</script>

<style>
    .badge {
        top: -2.25rem;
        right: -1.5rem;
    }
</style>

<div class="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
    {#each items as { excerpt, customContent: { name, price } }, i}
        <Card class="relative px-4 rounded text-white">
            <div class="py-4">
                <div>
                    <h3 class="font-bauhaus text-center uppercase text-xl">{name}<br />{price}</h3>
                </div>
                <div class="font-secondary sm:px-4 text-center font-bold">
                    {@html excerpt}
                </div>
            </div>
            {#if i === 0}
                <img
                    class="badge absolute z-10 w-16 h-16"
                    src="/assets/star.png"
                    alt="best value" />
            {/if}
        </Card>
    {/each}
</div>
