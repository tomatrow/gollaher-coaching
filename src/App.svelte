<script>
    import location from "./location.js"

    import Header from "./app/Header.svelte"
    import Footer from "./app/Footer.svelte"
    import Main from "./app/Main.svelte"

    console.log(window.svelteSpace)
</script>

<style global lang="postcss">
    /* 
        Square space has a limit of 1mb files
        The unpurged css bundle is around 3mb 
        So, I need to link to a externally hosted tailwind, and then use the purged version for production 
     */
    /* purgecss start ignore */
    /* @tailwind base; */
    /* @tailwind components; */
    /* purgecss end ignore */
    /* @tailwind utilities; */

    :global(body) {
        font-family: Roboto;
    }
</style>

<Header />
<Main />
<Footer />
