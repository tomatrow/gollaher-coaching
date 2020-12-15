<script>
    export let items
</script>

<div class="grid gap-4 sm:grid-cols-2 sm:gap-16">
    {#each items as { assetUrl, excerpt, title }}
        <div
            class="space-y-4 sm:space-y-0 sm:space-x-4 flex items-center sm:items-start flex-col sm:flex-row">
            <div class="flex flex-shrink-0 justify-center w-1/2 sm:w-20 sm:h-20">
                <img class="min-h-0 max-h-full" src={assetUrl} alt={title} />
            </div>
            <div class="flex flex-col">
                <div>
                    <h3 class="font-bauhaus text-center sm:text-left uppercase text-xl">{title}</h3>
                </div>
                <div class="font-secondary font-bold">
                    {@html excerpt}
                </div>
            </div>
        </div>
    {/each}
</div>
