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
    flex-direction: column;
    justify-content: space-between; 
  }
  .icon div {
    content: '';
    position: absolute;
    top: calc(50% - 1px);
    width: 50%;
    height: 2px;
    background: var(--median);
  }
  .icon div:first-child {
    top: 0;
    width: 100%;
  }
  .icon div:last-child {
    top: auto;
    bottom: 0;
    width: 100%;
  }
  :global(button:hover) .icon {
    width: 2rem;
    height: 2rem;
  }
  :global(button:hover) .icon div {
    width: 100%;
  }
  :global(button:hover) .icon div:first-child, :global(button:hover) .icon div:last-child {
    width: 50%;
  }
</style>