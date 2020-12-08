<script>
    import Link from "../../components/Link.svelte"
    export let collection
</script>

<style>
    .bg-terrain {
        background-image: url(/assets/bg_angled_terrain.png);
        background-position: bottom;
        background-size: cover;
        background-repeat: no-repeat;
    }
</style>

<div class="bg-terrain text-white">
    <Link href="/services">
        <h2 class="font-lazer">{collection.title}</h2>
    </Link>
    <div>
        {#each collection.items as { assetUrl, excerpt, fullUrl, title }}
            <div>
                <Link href={fullUrl}>
                    <h3 class="font-bauhaus">{title}</h3>
                    <img class="w-4 h-auto bg-white font-primary" src={assetUrl} alt={title} />
                </Link>
                <div class="font-secondary">
                    {@html excerpt}
                </div>
            </div>
        {/each}
    </div>
</div>
