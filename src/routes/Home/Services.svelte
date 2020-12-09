<script>
    import Link from "../../components/Link.svelte"
    import Section from "./Section.svelte"
    import Title from "./Title.svelte"
    export let collection
</script>

<Section class="flex items-center flex-col">
    <Title href={collection.href} title={collection.title} />
    <div class="grid gap-4 sm:grid-cols-2 sm:gap-16">
        {#each collection.items as { assetUrl, excerpt, fullUrl, title }}
            <div class="sm:space-x-4 flex items-center sm:items-start flex-col sm:flex-row">
                <Link class="flex-shrink-0 w-1/2 sm:w-20 h-auto" href={fullUrl}>
                    <img src={assetUrl} alt={title} />
                </Link>
                <div class="flex flex-col">
                    <Link href={fullUrl}>
                        <h3 class="font-bauhaus uppercase text-xl">{title}</h3>
                    </Link>
                    <div class="font-secondary">
                        {@html excerpt}
                    </div>
                </div>
            </div>
        {/each}
    </div>
</Section>
