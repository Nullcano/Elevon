<script>
  import { sections } from '$lib/api/sections'
  import SplashImage from '$lib/app/SplashImage.svelte'
</script>

<SplashImage />
<main class="relative">
  <div class="pa5">
    <div class="flex items-center gap-4">
      <svg class="w5" viewBox="0 0 32 14" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 0C10 0 8 2 8 4H28L30 2L32 0H12Z" />
        <path d="M8 5C6 5 4 7 4 9H28L30 7L32 5H8Z" />
        <path d="M4 10C2 10 0 12 0 14H28L30 12L32 10H4Z" />
      </svg>
      <h1>All-Inclusive <i>Design System</i> for the Modern Web ________</h1>  
    </div>
  </div>
  <div class="pb8 features">
    {#each sections as s}
      <a href="/{s.slug}">
        <h2>{s.title}</h2>
        <p>{s.shortDescription}</p>
      </a>
    {/each}
  </div>
</main>

<style>
  h1 {
    max-width: 28ch;
    font-size: 3rem;
    text-transform: uppercase;
    font-weight: 600;
    line-height: 1.25;
    letter-spacing: -.05rem;
  }
  .features {
    position: relative;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: var(--size-4);
  }
  .features a {
    position: relative;
    padding: 2.5rem;
    gap: 1.5rem;
    background: var(--night-3);
    text-decoration: none;
    border-radius: 1.5rem;
    transition: all .25s linear;
    cursor: pointer;
  }
  h2 {
    font-size: 1.5rem;
    font-weight: 600;
    text-transform: uppercase;
  }
  p {
    font-size: 1.25rem;
  }

  @media (max-width: 60em) {
    h1 {
      font-size: 2rem;
    }
  }
</style>