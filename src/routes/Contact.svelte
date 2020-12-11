<script>
    import { load } from "../utility.js"
    import Section from "../components/Section.svelte"
    import Booking from "../components/Booking.svelte"
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
            <Booking />
        </Section>
    </Bar>
{:catch error}
    <p style="color: red">{error}</p>
{/await}
