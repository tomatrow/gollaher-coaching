<script>
    import { page } from "../store.js"
</script>

<!-- A squarespace collection where we only look at the first item -->
<h1>{$page.items[0].title}</h1>
<div>
    {@html $page.items[0].body}
</div>
