<script>
    import { load } from "../utility.js"
    import Section from "../components/Section.svelte"
    import Bar from "./Home/Bar.svelte"
    import Packages from "./Home/Packages.svelte"
    export let router
</script>

{#await load(router.path) then page}
    <Bar class="bg-black">
        <Section class="space-y-8 flex flex-col">
            <h1 class="font-lazer text-c text-center text-5xl">{page.collection.title}</h1>
            <Packages items={page.items} />
        </Section>
    </Bar>
{:catch error}
    <p style="color: red">{error}</p>
{/await}
