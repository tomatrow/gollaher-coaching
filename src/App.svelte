<script>
    import location from "./location.js"

    import Header from "./app/Header.svelte"
    import Footer from "./app/Footer.svelte"
    import Main from "./app/Main.svelte"
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

    body {
        font-family: Roboto;
    }

    @font-face {
        font-weight: 400;
        font-style: normal;
        font-family: "Bauhaus 93";
        src: url("https://cdn.jsdelivr.net/gh/tomatrow/gollaher-coaching/assets/font_bauhaus_93.ttf")
            format("truetype");
        font-display: swap;
    }
    @font-face {
        font-weight: 400;
        font-style: normal;
        font-family: "Jonney Fever";
        src: url("https://cdn.jsdelivr.net/gh/tomatrow/gollaher-coaching/assets/font_johnny_fever.ttf")
            format("truetype");
        font-display: swap;
    }
    @font-face {
        font-weight: 400;
        font-style: normal;
        font-family: "Lazer84";
        src: url("https://cdn.jsdelivr.net/gh/tomatrow/gollaher-coaching/assets/font_lazer84.ttf")
            format("truetype");
        font-display: swap;
    }
    @font-face {
        font-weight: 100;
        font-style: italic;
        font-family: "Roboto";
        src: url(https://cdn.jsdelivr.net/gh/tomatrow/gollaher-coaching/assets/font_roboto_thin_italic.ttf)
            format("truetype");
        font-display: swap;
    }
    @font-face {
        font-weight: 700;
        font-style: italic;
        font-family: "Roboto";
        src: url(https://cdn.jsdelivr.net/gh/tomatrow/gollaher-coaching/assets/font_roboto_bold_italic.ttf)
            format("truetype");
        font-display: swap;
    }
    @font-face {
        font-weight: 100;
        font-style: normal;
        font-family: "Roboto";
        src: url(https://cdn.jsdelivr.net/gh/tomatrow/gollaher-coaching/assets/font_roboto_thin.ttf)
            format("truetype");
        font-display: swap;
    }
    @font-face {
        font-weight: 700;
        font-style: normal;
        font-family: "Roboto";
        src: url(https://cdn.jsdelivr.net/gh/tomatrow/gollaher-coaching/assets/font_roboto_bold.ttf)
            format("truetype");
        font-display: swap;
    }
    @font-face {
        font-weight: 300;
        font-style: italic;
        font-family: "Source Sans Pro";
        src: url(https://cdn.jsdelivr.net/gh/tomatrow/gollaher-coaching/assets/font_source_sans_pro_light_italic.ttf)
            format("truetype");
        font-display: swap;
    }
    @font-face {
        font-weight: 700;
        font-style: italic;
        font-family: "Source Sans Pro";
        src: url(https://cdn.jsdelivr.net/gh/tomatrow/gollaher-coaching/assets/font_source_sans_pro_bold_italic.ttf)
            format("truetype");
        font-display: swap;
    }
    @font-face {
        font-weight: 300;
        font-style: normal;
        font-family: "Source Sans Pro";
        src: url(https://cdn.jsdelivr.net/gh/tomatrow/gollaher-coaching/assets/font_source_sans_pro_light.ttf)
            format("truetype");
        font-display: swap;
    }
    @font-face {
        font-weight: 700;
        font-style: normal;
        font-family: "Source Sans Pro";
        src: url(https://cdn.jsdelivr.net/gh/tomatrow/gollaher-coaching/assets/font_source_sans_pro_bold.ttf)
            format("truetype");
        font-display: swap;
    }

    .bg-a {
        background-color: #25448d;
    }
    .bg-b {
        background-color: black;
    }
    .bg-c {
        background-color: #ff00ba;
    }

    .text-a {
        color: #25448d;
    }
    .text-b {
        color: black;
    }
    .text-c {
        color: #ff00ba;
    }

    .bg-lines {
        background-image: url(/assets/bg_scan_lines.png);
    }
    .bg-terrain {
        background-image: url(/assets/bg_angled_terrain.png);
    }

    .font-primary {
        font-family: "Roboto";
    }
    .font-secondary {
        font-family: "Source Sans Pro";
    }
    .font-bauhaus {
        font-family: "Bauhaus 93";
    }
    .font-lazer {
        font-family: "Lazer84";
    }
    .font-jonney-fever {
        font-family: "Jonney Fever";
    }
</style>

<Header />
<Main />
<Footer />
