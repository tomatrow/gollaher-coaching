<script>
    import Rule from "../../components/Rule.svelte"
    let clazz = ""
    export { clazz as class }
</script>

<div class="{clazz} flex items-center flex-col py-12" {...$$restProps}>
    <slot />
</div>
<Rule />
