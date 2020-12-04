<script>
    import { loadPage } from "../scripts/utility.js"
    export let router
</script>

<div>ABOUT</div>

{#await loadPage('/about')}
    <p>...waiting</p>
{:then page}
    <div>Loaded /about</div>
{:catch error}
    <p style="color: red">{error.message}</p>
{/await}
