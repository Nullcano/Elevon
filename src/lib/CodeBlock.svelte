<script>
  const copyText = (str) => {
    navigator.clipboard.writeText(str).then(() => {
      alert('copied')
    }, () => {
      alert('failed to copy')
    });
  }
</script>
<div class="code-snippet">
  <pre tabindex="0">
    <code class="code-format">
      <slot name="string" />
    </code>
  </pre>
  <div class="copy-button" on:click="{copyText}">
    <i class="material-icons small light">content_copy</i>
  </div>
</div>

<style>
  
</style>