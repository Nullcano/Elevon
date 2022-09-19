<script>
  import { HTMLTags } from '$lib/data'
  import { slugify } from '$lib/utils'
  let tags = HTMLTags.sort()
</script>

<h1>Axess Semantic HTML</h1>

<p class="wide-small">Explore all HTML tags that has been modified by Axess and see how it looks semantically with Axess default styling and with simple examples using Axess utility classes.</p>

<div class="display-list">
  {#each tags as tag}
    <a href="/docs/tags/{slugify(tag.tag)}">
      <div class="padding-all-medium">
        <span>{tag.tag}</span>
        <span>{tag.desc}</span>
      </div>
    </a>
  {/each}
</div>