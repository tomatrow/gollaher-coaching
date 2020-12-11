<script>
    import { load } from "../utility.js"
    import Testimonials from "./Home/Testimonials.svelte"
    import Section from "../components/Section.svelte"
    import Bar from "./Home/Bar.svelte"
    export let router
</script>

{#await load(router.path) then page}
    <Bar class="bg-black">
        <Section class="space-y-8">
            <h1 class="font-lazer text-c text-center text-5xl">{page.collection.title}</h1>
            <Testimonials items={page.items} />
        </Section>
    </Bar>
{:catch error}
    <p style="color: red">{error}</p>
{/await}
