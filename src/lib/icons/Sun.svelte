<div class="icon">
  <div></div>
  <div></div>
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
    background: var(--median);
  }
  .icon div:last-child {
    top: .25rem;
    left: .25rem;
    width: 1rem;
    height: 1rem;
    border-radius: 50%;
    outline: 2px solid var(--dark);
  }
  .icon div:first-child {
    bottom: .25rem;
    left: .2rem;
    width: 2px;
    height: 1.5rem;
    transform: rotate(45deg);
    transform-origin: bottom left;
  }
  .icon div:nth-child(2) {
    top: .25rem;
    left: .2rem;
    width: 2px;
    height: 1.5rem;
    transform: rotate(-45deg);
    transform-origin: top left;
  }
  .icon div:nth-child(3) {
    top: 0;
    left: calc(50% - 1px);
    width: 2px;
    height: 100%;
  }
  .icon div:nth-child(4) {
    left: 0;
    top: calc(50% - 1px);
    height: 2px;
    width: 100%;
  }
  :global(button:hover) .icon {
    width: 2rem;
    height: 2rem;
    animation: rotate 1s linear forwards;
  }
  :global(button:hover) .icon div:last-child {
    width: 1.5rem;
    height: 1.5rem;
  }
  :global(button:hover) .icon div:first-child, :global(button:hover) .icon div:nth-child(2) {
    height: 2.25rem;
  }
  @keyframes rotate {
    to { transform: rotate(90deg) }
  }
</style>