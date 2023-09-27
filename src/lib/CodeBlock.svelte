<script>
  let markup

  const copyText = (str) => {
    navigator.clipboard.writeText(str)
  }
</script>

<div class="relative pa3 br3 ba b--white-20">
  <pre class="ma0" tabindex="0"><code id="markup-code" bind:this={markup}><slot /></code></pre>
  <div class="absolute top-0 right-0 pa2 br3 br--bottom br--left bb bl b--white-20 pointer" on:click="{copyText(markup)}">
    <i>Copy</i>
  </div>
</div>