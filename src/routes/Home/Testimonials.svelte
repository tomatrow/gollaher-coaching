<script>
    export let items
</script>

<div class="space-y-8 flex flex-col">
    {#each items as item}
        <div class="sm:space-x-4 flex items-center flex-col sm:flex-row justify-center">
            <div class="space-y-4 flex flex-col font-bold">
                {@html item.excerpt}
                <h3 class="font-bauhaus uppercase text-xl">{item.title}</h3>
            </div>
        </div>
    {/each}
</div>
