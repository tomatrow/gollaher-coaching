<script>
    import Section from "../components/Section.svelte"
    import Bar from "./Home/Bar.svelte"
    export let router
</script>

<Bar class="w-full">
    <Section class="text-white">
        <div class="font-bauhaus mb-4 text-3xl">{router.data.item.title}</div>
        {@html router.data.item.body}
    </Section>
</Bar>
