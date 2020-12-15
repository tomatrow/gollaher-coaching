<script>
    let clazz = ""
    export { clazz as class }
    export let value
</script>

<input
    bind:value
    class="{clazz} text-bold py-2 px-2 placeholder-black text-black"
    {...$$restProps} />
