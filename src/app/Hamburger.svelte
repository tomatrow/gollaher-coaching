<script>
    export let active = false
    let clazz = ""
    export { clazz as class }
</script>

<style>
    .mobile-icon {
        position: relative;
        width: 25px;
        height: 14px;
        cursor: pointer;
    }

    .mobile-icon:after,
    .mobile-icon:before,
    .middle-line {
        position: absolute;
        width: 100%;
        height: 2px;
        background-color: #fff;
        content: "";
        transition: all 0.4s;
        transform-origin: center;
    }

    .mobile-icon:before,
    .middle-line {
        top: 0;
    }

    .mobile-icon:after,
    .middle-line {
        bottom: 0;
    }

    .mobile-icon:before {
        width: 66%;
    }

    .mobile-icon:after {
        width: 33%;
    }

    .middle-line {
        margin: auto;
    }

    .mobile-icon:hover:before,
    .mobile-icon:hover:after,
    .mobile-icon.active:before,
    .mobile-icon.active:after,
    .mobile-icon.active .middle-line {
        width: 100%;
    }

    .mobile-icon.active:before,
    .mobile-icon.active:after {
        top: 50%;
        transform: rotate(-45deg);
    }

    .mobile-icon.active .middle-line {
        transform: rotate(45deg);
    }
</style>

<div class="{clazz} mobile-icon" class:active {...$$restProps} on:click>
    <div class="middle-line" />
</div>
