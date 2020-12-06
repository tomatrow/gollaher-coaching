<script>
    import { primaryNavigation } from "../store.js"
    import Navigation from "./Navigation.svelte"
</script>

<header>
    <Navigation items={$primaryNavigation.items} />
</header>
