<script>
    import { secondaryNavigation } from "../store.js"
    import Navigation from "./Navigation.svelte"
    // const emailAccount = $sqs.page.socialAccounts.find(account => account.serviceName === "email")
</script>

<footer>
    <Navigation items={$secondaryNavigation.items} />
</footer>
