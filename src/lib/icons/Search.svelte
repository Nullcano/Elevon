<div class="icon">
  <div class="glass"></div>
  <div class="handle"></div>
</div>

<style>
  .icon {
    width: 1.5rem;
    height: 1.5rem;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(2, 1fr); 
  }
  .glass { 
    grid-area: 1 / 1 / 2 / 2; 
    border: 2px solid var(--median);
    border-radius: 50%;
  }
  .handle { 
    position: relative;
    grid-area: 2 / 2 / 3 / 3;
  } 
  .handle::before {
    content: '';
    position: absolute;
    width: 2px;
    height: 100%;
    transform: rotate(-45deg);
    background: var(--median);
  }
</style>