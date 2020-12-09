<script>
    import { fade } from "svelte/transition"
    import { load } from "../store.js"
    import Section from "../components/Section.svelte"
    import Rule from "../components/Rule.svelte"
    import Bar from "./Home/Bar.svelte"
    export let router
</script>

{#await load(router.path).then(page => page.items[0]) then collection}
    <Bar class="bg-black">
        <Section class="space-y-8">
            <h1 class="font-lazer text-c text-center text-5xl">{collection.title}</h1>
            <div>
                {@html collection.body}
            </div>
        </Section>
    </Bar>
{:catch error}
    <p style="color: red">{error}</p>
{/await}
