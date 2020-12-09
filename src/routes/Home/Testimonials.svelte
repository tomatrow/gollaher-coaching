<script>
    import Section from "./Section.svelte"
    export let collection
</script>

<Section class="sm:space-x-4 flex items-center flex-col sm:flex-row justify-center">
    <img
        src={collection.items[0].assetUrl}
        alt={collection.items[0].title}
        class="sm:w-52 w-full h-auto" />
    <div class="space-y-4 flex flex-col">
        {@html collection.items[0].excerpt}
        <h3 class="font-bauhaus uppercase text-xl">{collection.items[0].title}</h3>
    </div>
</Section>
