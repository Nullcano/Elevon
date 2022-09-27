<script>
  import { HTMLTags } from '$lib/data'
  import { slugify } from '$lib/utils'
  let tags = HTMLTags.sort()
</script>

<h1>Semantic Elements / Tags</h1>

<div class="margin-y-150 width-prose">
  <p>
    A list of all HTML tags that has been augmented by Meter.
    Find an element and explore how they look and feel with our design standards.
    You can also preview styled examples of each element using our helper classes and attributes.
  </p>
</div>

<div class="margin-y-100 display-grid auto-fit-sm gap-100">
  {#each tags as tag}
    <a class="hover-reset-underline" href="/docs/tags/{slugify(tag.tag)}">
      <div class="background-dark-lighten animate">
        <div class="padding-150">
          <strong class="display-block text-150">{tag.tag}</strong>
          <span>{tag.desc}</span>  
        </div>
      </div>
    </a>
  {/each}
</div>

<em class="display-block margin-y-150 padding-150 background-dark-lighten">Meter is still working on this document. Check back later.</em>