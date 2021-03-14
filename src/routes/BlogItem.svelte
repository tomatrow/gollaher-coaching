<script>
    import { load } from "../utility.js"
    import Section from "../components/Section.svelte"
    import Bar from "./Home/Bar.svelte"
    import Card from "./Home/Card.svelte"
    export let router
</script>

<style>
    :global(.injected-post-content p) {
        margin-bottom: 1rem;
    }
</style>

{#await load(router.path).then(page => page.item) then item}
    <Bar class="bg-black">
        <Section class="space-y-8">
            {#if item.assetUrl}
                <Card><img class="w-full" src={item.assetUrl} /></Card>
            {/if}
            <h1 class="font-lazer word-space-3 text-c text-center text-5xl">
                {@html item.title}
            </h1>
            <div class="injected-post-content">
                {@html item.body}
            </div>
        </Section>
    </Bar>
{:catch error}
    <p style="color: red">{error}</p>
{/await}
