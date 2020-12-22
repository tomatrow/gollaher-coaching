<script>
    import getDayOfYear from "date-fns/getDayOfYear"
    import Testimonial from "./Testimonial.svelte"
    export let items
    const item = items?.length && items[getDayOfYear(new Date()) % items.length]
</script>

{#if item}
    <Testimonial {item} />
{/if}
