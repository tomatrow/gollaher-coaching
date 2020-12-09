<script>
    import Link from "../../components/Link.svelte"
    export let href
    export let title
</script>

<Link class="mb-4" {href}>
    <h2 class="font-lazer text-c text-3xl">{title}</h2>
</Link>
