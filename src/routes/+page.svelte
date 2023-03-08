<script>
  import { sections } from '$lib/api/sections'
</script>

<section>
  <div class="p5 intro">
    <div class="inner">
      <h1>All-Inclusive <i>Design System</i> for the Modern Web ________</h1>  
    </div>
    <svg class="w7" viewBox="0 0 32 14" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 0C10 0 8 2 8 4H28L30 2L32 0H12Z" />
      <path d="M8 5C6 5 4 7 4 9H28L30 7L32 5H8Z" />
      <path d="M4 10C2 10 0 12 0 14H28L30 12L32 10H4Z" />
    </svg>
  </div>
  <div class="p5 features">
    {#each sections as s}
      <a href="/{s.slug}">
        <h2>{s.title}</h2>
        <p>{s.shortDescription}</p>
      </a>
    {/each}
  </div>
</section>

<style>
  section {
    position: relative;
  }
  .intro {
    position: relative;
    display: flex;
    justify-content: space-between;
    background: var(--night-2);
    color: var(--day-4);
    pointer-events: none;
    user-select: none;
  }
  h1 {
    margin: 2rem;
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
    flex-direction: column;
    gap: 2.5rem;
  }
  .features a {
    position: relative;
    padding: 2.5rem;
    gap: 1.5rem;
    background: black;
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