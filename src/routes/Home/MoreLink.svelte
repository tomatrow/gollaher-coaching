<script>
    import Link from "../../components/Link.svelte"
    export let href
</script>

<Link {href} class="flex items-center justify-center mt-4">
    <span class="font-jonney-fever uppercase text-3xl"><slot /></span>
    <svg viewBox="0 0 100 100" fill="white" class="h-12">
        <polygon points="25,25 25,75 65,50" />
        <polygon points="50,25 50,75 90,50" />
    </svg>
</Link>
