<script>
    import Section from "../../components/Section.svelte"
    import Bar from "./Bar.svelte"
    import differenceInMonths from "date-fns/differenceInMonths"
    export let collection

    const index = differenceInMonths(new Date(), Date.parse("01 Jan 2021"))
    const item = collection.items?.length && collection.items[index % collection.items.length]
</script>

{#if item}
    <Bar class="bg-black text-white font-bold">
        <Section class="text-center">
            <div class="text-3xl">
                {@html item.excerpt}
            </div>
            <h3 class="font-bauhaus uppercase text-xl">{item.title}</h3>
        </Section>
    </Bar>
{/if}
