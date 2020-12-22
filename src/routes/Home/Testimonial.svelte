<script>
    export let item
</script>

<div class="flex items-center flex-col justify-center">
    <div class="space-y-4 flex flex-col font-bold">
        {@html item.excerpt}
        <h3 class="font-bauhaus uppercase text-xl">{item.title}</h3>
    </div>
    <slot />
</div>
