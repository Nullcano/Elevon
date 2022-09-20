<script>
  import { HTMLTags } from '$lib/data'
  import { slugify } from '$lib/utils'
  let tags = HTMLTags.sort()
</script>

<h1>Meter Semantic HTML</h1>

<div class="padding-all-medium">
  <p>A list of all HTML tags that has been modified with Meter CSS.</p>
  <p>Find an element and explore how they look and feel with our design standards.</p>
  <p>You can also preview styled examples of each element using our helper classes and attributes.</p>   
</div>

<div class="display-list gap-medium">
  {#each tags as tag}
    <a class="hover-reset-underline" href="/docs/tags/{slugify(tag.tag)}">
      <div class="padding-all-medium background-dark hover-background-dark-lighten animate">
        <span>{tag.tag}</span>
        <span>{tag.desc}</span>
      </div>
    </a>
  {/each}
</div>