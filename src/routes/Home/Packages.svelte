<script>
    import Link from "../../components/Link.svelte"
    import Section from "../../components/Section.svelte"
    import Card from "./Card.svelte"
    import Title from "./Title.svelte"
    export let collection
</script>

<Section class="flex items-center flex-col">
    <Title href={collection.href} title={collection.title} />
    <div class="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
        {#each collection.items as { excerpt, fullUrl, title }}
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
</Section>
