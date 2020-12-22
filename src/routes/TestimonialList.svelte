<script>
    import Section from "../components/Section.svelte"
    import Link from "../components/Link.svelte"
    import Bar from "./Home/Bar.svelte"
    import Testimonial from "./Home/Testimonial.svelte"
    export let router
</script>

<Bar class="bg-black">
    <Section class="space-y-8 flex items-center flex-col">
        <h1 class="font-lazer text-c text-center text-5xl">{router.data.collection.title}</h1>
        {#each router.data.items as item}
            <Testimonial {item}>
                <Link href={item.fullUrl}><span>Read more...</span></Link>
            </Testimonial>
        {/each}
    </Section>
</Bar>
