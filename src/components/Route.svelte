<script>
    import { send, receive } from "../crossfade.js"

    import UrlPattern from "url-pattern"
    import location, { navigate, noMatch } from "../location.js"
    export let path
    export let component = undefined
    export let redirect = undefined
    $: pattern = new UrlPattern(path)
    $: router = {
        params: pattern.match($location),
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
    <div in:receive out:send>
        {#if component}
            <svelte:component this={component} {router} {...$$restProps} />
        {:else}
            <slot {router} />
        {/if}
    </div>
{/if}
