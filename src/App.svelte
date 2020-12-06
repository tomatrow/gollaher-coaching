<script>
    import Header from "./components/Header.svelte"
    import Footer from "./components/Footer.svelte"
    import Main from "./components/Main.svelte"
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
