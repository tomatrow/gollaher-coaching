<script>
    import { scale } from "svelte/transition"
    import { instagram } from "../../api.js"
    import { feed } from "../../utility.js"
    import { onMount } from "svelte"

    onMount(async () => {
        if ($feed.data.length) return

        const url = new URL("https://graph.instagram.com/me/media")
        url.search = new URLSearchParams({
            fields: "caption,id,media_type,media_url,permalink,thumbnail_url,timestamp,username",
            limit: 6,
            access_token: await instagram()
        }).toString()

        const response = await fetch(url)
        const json = await response.json()

        feed.set(json)
    })
</script>

<div transition:scale class="grid gap-2 grid-cols-2 sm:grid-cols-3 md:grid-cols-6 py-2">
    {#each $feed.data as { media_url, permalink, caption }}
        <a href={permalink} target="_blank"> <img src={media_url} alt={caption} /> </a>
    {/each}
</div>
