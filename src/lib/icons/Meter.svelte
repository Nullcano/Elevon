<div class="icon">
  <div></div>
  <div></div>
  <div></div>
</div>

<style>
  .icon {
    position: relative;
    width: 1.5rem;
    height: 1.5rem;
    display: flex;
    justify-content: space-between; 
  }
  .icon div {
    content: '';
    position: absolute;
    left: calc(50% - 1px);
    width: 2px;
    height: 50%;
    background: var(--median);
  }
  .icon div:first-child {
    left: 0;
    height: 100%;
  }
  .icon div:last-child {
    left: auto;
    right: 0;
    height: 100%;
  }
  :global(a:hover) .icon {
    width: 2rem;
    height: 2rem;
  }
  :global(a:hover) .icon div {
    height: 100%;
  }
  :global(a:hover) .icon div:first-child, :global(a:hover) .icon div:last-child {
    height: 50%;
  }
</style>