<script>
    import Link from "../../components/Link.svelte"

    export let src
    export let date
    export let time
    export let href

    let clazz = ""
    export { clazz as class }
</script>

<style>
    .corner {
        border-color: #d1daff;
    }
</style>

<div
    class="{clazz} relative flex items-center justify-center bg-cover bg-no-repeat text-sm"
    style="color: #d1daff; background-image: url({src})">
    <div class="absolute bottom-0 left-0 p-3">
        <div>{time}</div>
        <div>{date}</div>
    </div>
    <div class="absolute top-0 left-0 p-3">
        <div>PLAY</div>
        <div>REC<span class="leading-3 text-red-600 text-4xl">&#183;</span></div>
    </div>
    <div class="absolute top-0 right-0 p-3">VHS</div>
    <img
        class="absolute right-0 bottom-0 p-3 w-2/12 h-auto"
        src="/assets/logo_white.png"
        alt="logo" />

    <div class="corner absolute bottom-0 left-0 m-1 w-8 h-8 border-b-2 border-l-2" />
    <div class="corner absolute top-0 left-0 m-1 w-8 h-8 border-t-2 border-l-2" />
    <div class="corner absolute top-0 right-0 m-1 w-8 h-8 border-t-2 border-r-2" />
    <div class="corner absolute right-0 bottom-0 m-1 w-8 h-8 border-r-2 border-b-2" />

    <a {href} target="_blank" class="w-1/3 h-auto">
        <svg viewBox="0 0 100 100">
            <mask id="mask">
                <!-- Everything under a white pixel will be visible -->
                <rect x="0" y="0" width="100" height="100" fill="white" />

                <!-- Everything under a black pixel will be invisible -->
                <polygon points="30,25 30,75 70,50" fill="black" />
            </mask>
            <!-- with this mask applied, we "punch" a heart shape hole into the circle -->
            <circle cx="50" cy="50" r="50" mask="url(#mask)" fill="white" opacity="0.6" />
        </svg>
    </a>
</div>
