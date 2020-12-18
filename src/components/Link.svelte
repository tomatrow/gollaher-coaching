<script>
    import location, { navigate } from "../location.js"

    const ANCHOR_REGEX = /^#[^ ]+$/
    const OFFSET_HEIGHT_PX = 50

    let clazz = ""
    export { clazz as class }
    export let href

    /*
    Goals:
        (1) scroll to the element indicated by window.location.hash when a route is initially loaded 
            Route.onMount() is the place to do this
        (2) scroll to the proper element on the same route
            listen for all links
    */

    /*
        Link component is clicked 
        Link.handleClick called 
        navigate(href) called 
            history is changed
            new location is set 
        all Routes check if their location matches
            match is found 
        Route is rendered    
    */
    // function handleClick() {
    // (1) navigate to the page
    // navigate(href)
    // (2) load the page data and display the route
    // (3) scroll to the appropriate place
    // top or page, or by fragment
    // }
</script>

<!-- svelte-ignore a11y-missing-attribute -->
<a {href} class="{clazz} cursor-pointer" {...$$restProps}>
    <slot />
</a>
