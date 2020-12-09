<script>
    import { load } from "../store.js"
    import Section from "../components/Section.svelte"
    import Bar from "./Home/Bar.svelte"
    export let router
</script>

{#await load(router.path).then(page => page.item) then item}
    <Bar class="bg-black">
        <Section class="space-y-8">
            <h1 class="font-lazer text-c text-center text-5xl">{item.title}</h1>
            <div>
                {@html item.body}
            </div>
        </Section>
    </Bar>
{:catch error}
    <p style="color: red">{error}</p>
{/await}
