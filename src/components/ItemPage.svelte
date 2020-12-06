<script>
    import { page } from "../store.js"
</script>

<h1>{$page.item.title}</h1>
<div>
    {@html $page.item.body}
</div>
