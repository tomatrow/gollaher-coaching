<script>
    import { secondaryNavigation } from "../store.js"
    // const emailAccount = $sqs.page.socialAccounts.find(account => account.serviceName === "email")
</script>

<div>
    {#each $primaryNavigation.items as { active, externalLink }}
        <Link href={externalLink.url}>{externalLink.title}</Link>
    {/each}
</div>
