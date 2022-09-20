<script>
  const sizing = [
    {
      id: '0',
      value: '0',
      preview: 'No preview applicable.'
    }, {
      id: '1',
      value: '.25rem',
      preview: 'No preview applicable.'
    }, {
      id: '2',
      value: '.5rem',
      preview: 'No preview applicable.'
    }, {
      id: '3',
      value: '.75rem',
      preview: 'No preview applicable.'
    }, {
      id: '4',
      value: '1rem',
      preview: 'No preview applicable.'
    }, {
      id: '5',
      value: '1.25rem',
      preview: 'No preview applicable.'
    }, {
      id: '6',
      value: '1.5rem',
      preview: 'No preview applicable.'
    }, {
      id: '7',
      value: '2.5rem',
      preview: 'No preview applicable.'
    }, {
      id: '8',
      value: '5rem',
      preview: 'No preview applicable.'
    }, {
      id: '9',
      value: '7.5rem',
      preview: 'No preview applicable.'
    }, {
      id: '10',
      value: '10rem',
      preview: 'No preview applicable.'
    }, {
      id: '11',
      value: '15rem',
      preview: 'No preview applicable.'
    }, {
      id: '12',
      value: '20rem',
      preview: 'No preview applicable.'
    }, {
      id: 'm',
      value: '30em',
      preview: 'No preview applicable.'
    }, {
      id: 'l',
      value: '60em',
      preview: 'No preview applicable.'
    }, {
      id: 'xl',
      value: '90em',
      preview: 'No preview applicable.'
    }
  ]
</script>

<h1 class="margin-bottom-small text-uppercase cursor-default">
  Sizing
</h1>

<div class="padding-all-medium margin-bottom-medium">
  <p>An important factor in accessibility is proper sizing rules.</p>
  <p>Meter got 12 pre-defined and reusable sizes for all purposes to keep a uniform and clear interface.</p>  
</div>

<section class="display-grid auto-fit-medium gap-medium">
  {#each sizing as item}
    <article class="padding-all-medium display-flex flex-direction-column gap-medium background-dark">
      <header class="display-flex justify-space-between">
        <div>ID: {item.id}</div>
        <div>Variable: <code>--sizing-{item.id}</code></div>
      </header>
      <div class="padding-all-medium background-dark-lighten">
        {@html item.preview}
        <div class="width-{item.id} height-{item.id} backgroud-dark-darken"></div>
      </div>
      <footer class="display-flex justify-space-between">
        <div>Class: <code>.sizing-{item.id}</code></div>
        <div>Value: {item.value}</div>  
      </footer>
    </article>
  {/each}
</section>

<div class="padding-all-medium margin-bottom-medium">
  <p>The ID's of each size are also reflected in attributes that handle sizing.</p>
</div>
