<script>
    import { fade } from "svelte/transition"
    import UrlPattern from "url-pattern"
    import location, { navigate, noMatch, hash, scrollToId } from "../location.js"

    import { tick } from "svelte"
    import { load } from "../utility.js"

    export let path
    export let component = undefined
    export let redirect = undefined

    let promise

    $: pattern = new UrlPattern(path)
    $: params = pattern.match($location)

    $: {
        if (params !== null) {
            $noMatch = false
            if (redirect) navigate(redirect, true)
            promise = load($location)
        }
    }

    $: promise?.then(tick).then(() => scrollToId($hash.slice(1)))
</script>

{#if params !== null}
    {#await promise then data}
        <div transition:fade>
            {#if component}
                <svelte:component
                    this={component}
                    router={{ params, data, path: $location }}
                    {...$$restProps} />
            {:else}
                <slot router={{ params, data, path: $location }} />
            {/if}
        </div>
    {:catch}
        <p class="text-white">Error</p>
    {/await}
{/if}
