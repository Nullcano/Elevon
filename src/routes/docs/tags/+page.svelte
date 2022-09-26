<script>
  import { HTMLTags } from '$lib/data'
  import { slugify } from '$lib/utils'
  let tags = HTMLTags.sort()
</script>

<div class="margin-y-md width-prose">
  <p>
    A list of all HTML tags that has been augmented by Meter.
    Find an element and explore how they look and feel with our design standards.
    You can also preview styled examples of each element using our helper classes and attributes.
  </p>
</div>

<div class="margin-y-sm display-grid auto-fit-sm gap-100">
  {#each tags as tag}
    <a class="hover-reset-underline" href="/docs/tags/{slugify(tag.tag)}">
      <div class="background-light-lighten animate">
        <div class="width-parent height-9 background-center-cover" style="background-image: url('https://ui-avatars.com/api/?size=512&font-size=0.1&length=16&name={tag.tag}&bold=true&background=2e2b3b&color=8f8aa8')"></div>
        <div class="padding-sm">
          <span>{tag.tag}</span>
          <span>{tag.desc}</span>  
        </div>
      </div>
    </a>
  {/each}
</div>