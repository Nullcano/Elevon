<script>
  import { sizing } from '$lib/data.js'
</script>

<div class="margin-y-150 width-prose">
  <p>An important factor in accessibility is proper sizing rules.</p>
  <p>Meter got a set of pre-defined and reusable sizes for all purposes to keep a uniform interface.</p>  
</div>

<section>
  {#each sizing as item}
    <article id="{item.id}" class="margin-bottom-150 padding-100 display-flex background-dark-lighten">
      <dl>
        <dt class="text-150">Identifier</dt>
        <dd class="text-150"><code class="padding-x-050 background-dark border-radius-pill">{item.id}</code></dd>
        <dt>Variable</dt>
        <dd><code class="padding-x-050 background-dark border-radius-pill">--size-{item.id}</code></dd>
        <dt>Value</dt>
        <dd><code class="padding-x-050 background-dark border-radius-pill">{item.value}</code></dd>
        <dt>Applies to</dt>
        <dd>
          {#each item.related as related}
            <a href="/docs/{related.toLowerCase()}">
              <code class="padding-x-050 background-dark border-radius-pill">
                {related} ⇒
              </code>
            </a>
          {/each}
        </dd>
      </dl>
    </article>
  {/each}
</section>

<div class="margin-y-150 width-prose">
  <p>The ID's of each size are also reflected in attributes that handle sizing.</p>
</div>

<em class="display-block margin-y-150 padding-150 background-dark-lighten">Meter is still working on this document. Check back later.</em>