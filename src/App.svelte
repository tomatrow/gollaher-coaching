<script>
    import { SvelteToast } from "@zerodevx/svelte-toast"

    import { setContext, onMount } from "svelte"
    import { SETTINGS } from "./utility.js"
    import location from "./location.js"

    import Head from "./app/Head.svelte"
    import Header from "./app/Header.svelte"
    import Footer from "./app/Footer.svelte"
    import Main from "./app/Main.svelte"
    import Tailwind from "./app/Tailwind.svelte"

    export let primaryNavigation
    export let secondaryNavigation
    export let settings

    setContext(SETTINGS, settings)

    console.log(primaryNavigation, secondaryNavigation)
</script>

<style global lang="postcss">
    :root {
        --color-a: #25448d;
        --color-b: black;
        --color-c: #ff00ba;
    }

    .bg-a {
        background-color: var(--color-a);
    }
    .bg-b {
        background-color: var(--color-b);
    }
    .bg-c {
        background-color: var(--color-c);
    }

    .text-a {
        color: var(--color-a);
    }
    .text-b {
        color: var(--color-b);
    }
    .text-c {
        color: var(--color-c);
    }

    /* SvelteToast */
    .colors {
        --toastBackground: var(--color-b);
        --toastColor: var(--color-c);
        --toastProgressBackground: var(--color-a);
    }

    body {
        overflow-y: scroll;
        min-height: 100vh;
        background-color: black;
        font-weight: 500;
        font-family: Roboto;
    }

    main {
        min-height: 300px;
        background-color: black;
    }

    a:hover {
        color: var(--color-c);
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

    .word-space-3 {
        word-spacing: 0.75rem;
    }

    .button {
        border: double 0.125rem transparent;
        border-radius: 5rem;
        background-image: linear-gradient(to top right, #61bcd8, #233b87, #03050c),
            linear-gradient(to right, black, #68cbe1, white, #254190 45%, white, #243e8f);
        background-clip: content-box, border-box;
        background-origin: border-box;
    }
    .button:hover {
        background-image: linear-gradient(to bottom right, #61bcd8, #233b87, #03050c),
            linear-gradient(to top right, black, #68cbe1, white, #254190 45%, white, #243e8f);
    }
</style>

<Tailwind />
<Head />
<div class="colors">
    <SvelteToast />
</div>
<Header navigation={primaryNavigation} />
<Main />
<Footer navigation={secondaryNavigation} />
