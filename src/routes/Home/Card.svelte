<script>
    let clazz = ""
    export { clazz as class }
</script>

<style>
    div {
        box-shadow: 0 0 0 0.125rem white;
    }
</style>

<div class="{clazz} border-2 border-white bg-black" {...$$restProps}>
    <slot />
</div>
