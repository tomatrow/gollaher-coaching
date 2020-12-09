<script>
    import Link from "./Link.svelte"
    export let src
    export let alt
    export let title
    export let reverse = false
</script>

<div
    class="{reverse ? 'sm:flex-row-reverse' : 'sm:flex-row'} flex items-center flex-col justify-center my-10 sm:w-4/5">
    <Link href="/about" class="flex-grow-0 flex-shrink-0 sm:w-2/5">
        <img class="mx-auto w-4/5 sm:w-full h-auto" {src} {alt} />
    </Link>
    <div class="flex flex-col text-white">
        <h2 class="font-lazer p-2 sm:text-4xl">{title}</h2>
        <div class="font-secondary space-y-2 p-2 font-bold">
            <slot />
        </div>
    </div>
</div>
