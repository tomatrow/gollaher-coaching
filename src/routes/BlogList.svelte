<script>
    import { load } from "../utility.js"
    import Section from "../components/Section.svelte"
    import Bar from "./Home/Bar.svelte"
    import Link from "../components/Link.svelte"
    export let router
</script>

{#await load(router.path) then page}
    <Bar class="bg-black">
        <Section class="space-y-8 flex flex-col">
            <h1 class="font-lazer word-space-3 text-c text-center text-5xl">
                {@html page.collection.title}
            </h1>
            {#each page.items as { fullUrl, title }}
                <Link class="font-bauhaus text-center uppercase" href={fullUrl}>
                    {@html title}
                </Link>
            {/each}
        </Section>
    </Bar>
{:catch error}
    <p style="color: red">{error}</p>
{/await}
