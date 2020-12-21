<script>
    import getDayOfYear from "date-fns/getDayOfYear"
    export let items
    const item = items?.length && items[getDayOfYear(new Date()) % items.length]
</script>

{#if item}
    <div class="space-y-8 flex flex-col">
        <div class="sm:space-x-4 flex items-center flex-col sm:flex-row justify-center">
            <div class="space-y-4 flex flex-col font-bold">
                {@html item.excerpt}
                <h3 class="font-bauhaus uppercase text-xl">{item.title}</h3>
            </div>
        </div>
    </div>
{/if}
