<script>
    import { fade } from "svelte/transition"
    import UrlPattern from "url-pattern"
    import location, { navigate, noMatch } from "../location.js"

    import { tick } from "svelte"
    import { load } from "../utility.js"

    export let path
    export let component = undefined
    export let redirect = undefined

    $: pattern = new UrlPattern(path)
    $: router = {
        params: $location,
        path: $location
    }

    $: {
        if (router.params !== null) {
            $noMatch = false
            if (redirect) navigate(redirect, true)
        }
    }
</script>

{#if router.params !== null}
    {#await load(router.path) then data}
        <div transition:fade={{ duration: 200 }}>
            {#if component}
                <svelte:component this={component} router={{ ...router, data }} {...$$restProps} />
            {:else}
                <slot router={{ ...router, data }} />
            {/if}
        </div>
    {/await}
{/if}

<!-- {#if router.hasOwnProperty('data')}
    <div transition:fade={{ duration: 200 }}>
        {#if component}
            <svelte:component this={component} {router} {...$$restProps} />
        {:else}
            <slot {router} />
        {/if}
    </div>
{/if} -->
