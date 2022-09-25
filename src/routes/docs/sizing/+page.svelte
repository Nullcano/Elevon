<script>
  import { sizing } from '$lib/data.js'
</script>

<div class="padding-md width-prose">
  <p>An important factor in accessibility is proper sizing rules.</p>
  <p>Meter got a set of pre-defined and reusable sizes for all purposes to keep a uniform interface.</p>  
</div>

<section>
  {#each sizing as item}
    <article id="{item.id}" class="margin-bottom-md padding-sm display-flex background-light-lighten">
      <dl>
        <dt class="text-150">Identifier</dt>
        <dd class="text-150"><code class="padding-x-xs background-light border-radius-pill">{item.id}</code></dd>
        <dt>Variable</dt>
        <dd><code class="padding-x-xs background-light border-radius-pill">--size-{item.id}</code></dd>
        <dt>Value</dt>
        <dd><code class="padding-x-xs background-light border-radius-pill">{item.value}</code></dd>
        <dt>Applies to</dt>
        <dd>
          {#each item.related as related}
            <a href="/docs/{related.toLowerCase()}">
              <code class="padding-x-xs background-light border-radius-pill">
                {related}
                <svg class="width-050 height-050" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 460 460" style="enable-background:new 0 0 460 460" xml:space="preserve"><path d="M425.934 0H171.662c-18.122 0-32.864 14.743-32.864 32.864v77.134h30V32.864A2.868 2.868 0 0 1 171.662 30h254.272a2.868 2.868 0 0 1 2.864 2.864v254.272a2.868 2.868 0 0 1-2.864 2.865h-74.729v30h74.729c18.121 0 32.864-14.743 32.864-32.865V32.864C458.797 14.743 444.055 0 425.934 0z"/><path d="M288.339 139.998H34.068c-18.122 0-32.865 14.743-32.865 32.865v254.272C1.204 445.257 15.946 460 34.068 460H288.34c18.122 0 32.865-14.743 32.865-32.864V172.863c.001-18.122-14.744-32.865-32.866-32.865zM288.341 430H34.068a2.868 2.868 0 0 1-2.865-2.864V172.863a2.868 2.868 0 0 1 2.865-2.865H288.34a2.868 2.868 0 0 1 2.865 2.865v254.273h.001a2.868 2.868 0 0 1-2.865 2.864z"/></svg>
              </code>
            </a>
          {/each}
        </dd>
      </dl>
    </article>
  {/each}
</section>

<div class="padding-md margin-bottom-medium">
  <p>The ID's of each size are also reflected in attributes that handle sizing.</p>
</div>

<style>
  dl {
    display: flex;
    flex-flow: row wrap;
  }
  dt {
    flex-basis: 20%;
    padding: .25rem .5rem;
    text-align: right;
  }
  dd {
    flex-basis: 70%;
    flex-grow: 1;
    margin: 0;
    padding: .25rem .5rem;
  }
</style>