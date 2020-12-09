<script>
    import { load } from "../store.js"
    import Section from "../components/Section.svelte"
    import Rule from "../components/Rule.svelte"
    import Bar from "./Home/Bar.svelte"
    import Services from "./Home/Services.svelte"
    export let router
</script>

{#await load(router.path)}
    <p>...waiting</p>
{:then page}
    <Rule />
    <Bar class="bg-black">
        <Section class="space-y-8 flex flex-col">
            <h1 class="font-lazer text-c text-center text-5xl">{page.collection.title}</h1>
            <Services items={page.items} />
        </Section>
    </Bar>
{:catch error}
    <p style="color: red">{error}</p>
{/await}
