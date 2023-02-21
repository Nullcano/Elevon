<script>
  import { sections } from '$lib/api/sections'
</script>

<section>
  <div class="intro">
    <div class="p5 inner">
      <h1>All-Inclusive <i>Design System</i> for the Modern Web ________</h1>  
    </div>
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
    background: white;
    color: black;
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