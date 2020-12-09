<script>
    export let ratio
    let zyle = ""
    export { zyle as style }
</script>

<style>
    div::before {
        float: left;
        margin-left: -1px;
        width: 1px;
        height: 0;
        content: "";
    }
    div::after {
        display: table;
        clear: both;
        /* to clear float */
        content: "";
    }
</style>

<div style="padding-top: {ratio}%; {zyle}" {...$$restProps}>
    <slot />
</div>
