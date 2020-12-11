<script>
    import Section from "../../components/Section.svelte"
    import Title from "./Title.svelte"
    import VideoCover from "./VideoCover.svelte"
    export let collection
</script>

<Section class="flex items-center flex-col">
    <Title href={collection.href} title={collection.title} />
    <div class="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {#each collection.items as { assetUrl, fullUrl, customContent }}
            <VideoCover
                class="h-52 md:w-72 w-80"
                src={assetUrl}
                href={customContent.link}
                time={customContent.time}
                date={customContent.date} />
        {/each}
    </div>
</Section>
