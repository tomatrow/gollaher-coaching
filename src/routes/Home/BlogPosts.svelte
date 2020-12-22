<script>
    import { getContext } from "svelte"
    import { SETTINGS } from "../../utility.js"
    import Section from "../../components/Section.svelte"
    import Title from "./Title.svelte"
    import Card from "./Card.svelte"
    import Link from "../../components/Link.svelte"
    import MoreLink from "./MoreLink.svelte"

    const settings = getContext(SETTINGS)

    export let collection
</script>

<Section class="flex items-center flex-col">
    <Title href={collection.href} title={collection.title} />
    <div class="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {#each collection.items as { assetUrl, fullUrl, excerpt, title }}
            <Card class="flex flex-col justify-between w-full">
                <div>
                    <Link href={fullUrl}>
                        <img src={assetUrl} alt={title} class="h-52 w-full sm:h-32 object-cover" />
                    </Link>
                    <div class="p-2">
                        <Link href={fullUrl}>
                            <h3 class="font-bauhaus text-center uppercase text-xl">{title}</h3>
                        </Link>
                        {@html excerpt}
                    </div>
                </div>
                <Link
                    class="justify-self-end font-secondary block mt-auto p-2 uppercase font-bold"
                    href={fullUrl}>
                    Read More
                </Link>
            </Card>
        {/each}
    </div>
    <MoreLink href={collection.fullUrl}>{settings.home.blogPosts.showMoreTitle}</MoreLink>
</Section>
