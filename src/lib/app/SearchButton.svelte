<script>
  import { showSearch } from '$lib/stores'
  const openSearch = () => showSearch.update(state => !state)
</script>

<svelte:head>
  {#if $showSearch}
    <style>
      body {
        overflow: hidden;
      }
    </style>
  {/if}
</svelte:head>

<a class="px3 py2" role="button" href={null} on:click={openSearch}>
  <span>Search</span>
  <span><kbd>Ctrl</kbd> + <kbd>K</kbd></span>
</a>

<style>
  a:focus-visible {
    outline: 0;
  }
  [role="button"] {
    color: white;
    border: 1px solid rgba(255,255,255,.5);
    border-radius: 60em;
    display: flex;
    gap: 8rem;
    align-items: center;
    cursor: pointer;
  }
  kbd {
    padding: .25rem .5rem;
    border: 1px solid rgba(255,255,255,.5);
    border-radius: .5rem;
    text-transform: uppercase;
  }
  kbd:first-child {
    margin-left: .5rem;
  }
</style>