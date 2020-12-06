<script>
    import { primaryNavigation } from "../store.js"
    import Navigation from "./Navigation.svelte"
</script>

<style>
    :global(header) {
        font-family: "Bauhaus 93";
    }
</style>

<header>
    <Navigation items={$primaryNavigation.items} />
</header>
