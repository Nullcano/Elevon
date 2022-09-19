<script>
  import { page } from '$app/stores'
</script>

<h1>Something went wrong.</h1>
<span>{$page.status} - {$page.error.message}</span>