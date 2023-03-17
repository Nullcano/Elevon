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
  <svg class="h3" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M21 20.4142L30.5858 30L30 30.5858L20.4142 21L21 20.4142ZM21.0591 11.0296C21.0591 16.5687 16.5687 21.0591 11.0296 21.0591C5.49039 21.0591 1 16.5687 1 11.0296C1 5.49039 5.49039 1 11.0296 1C16.5687 1 21.0591 5.49039 21.0591 11.0296Z" stroke="currentColor" stroke-width="2"/>
  </svg>
  <span>___</span>
  <span><kbd>Ctrl</kbd> + <kbd>K</kbd></span>
</a>

<style>
  a:focus-visible {
    outline: 0;
  }
  [role="button"] {
    color: white;
    display: flex;
    gap: .5rem;
    align-items: center;
    cursor: pointer;
  }
  kbd {
    padding: .25rem .5rem;
    border: 1px solid var(--night-1);
    border-radius: .5rem;
    text-transform: uppercase;
  }
  kbd:first-child {
    margin-left: .5rem;
  }
</style>