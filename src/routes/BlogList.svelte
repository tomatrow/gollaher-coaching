<script>
    import { load } from "../store.js"
    import Section from "../components/Section.svelte"
    import Rule from "../components/Rule.svelte"
    import Bar from "./Home/Bar.svelte"
    import Link from "../components/Link.svelte"
    export let router
</script>

{#await load(router.path) then page}
    <Bar class="bg-black">
        <Section class="space-y-8 flex flex-col">
            <h1 class="font-lazer text-c text-center text-5xl">{page.collection.title}</h1>
            {#each page.items as { fullUrl, title }}
                <Link class="font-bauhaus text-center uppercase" href={fullUrl}>{title}</Link>
            {/each}
        </Section>
    </Bar>
{:catch error}
    <p style="color: red">{error}</p>
{/await}
