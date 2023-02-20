<script>
  import { page } from '$app/stores'
  import Logo from './Logo.svelte'

  const categories = [
    {
      title: 'Core',
      links: [
        { slug: 'props', title: 'Props' },
        { slug: 'classes', title: 'Classes' },
      ]
    },
    {
      title: 'Prefab',
      links: [
        { slug: 'components', title: 'Components' },
        { slug: 'templates', title: 'Templates' },
        { slug: 'applications', title: 'Applications' }
      ]
    },
    {
      title: 'Assets',
      links: [
        { slug: 'icons', title: 'Icons' },
        { slug: 'fonts', title: 'Fonts' },
      ]
    },
    {
      title: 'Extra',
      links: [
        { slug: 'html', title: 'HTML Reference' },
        { slug: 'css', title: 'CSS Reference' }
      ]
    }
  ]
</script>

<nav>
  <Logo />
  <div class="sec">
    {#each categories as category}
      <h3>{category.title}</h3>
      <div class="category-nav">
        {#each category.links as link}
          <a class:active="{$page.url.pathname.includes(link.slug)}" href="/{link.slug}">
            <svg viewBox="0 0 16 16">
              <circle cx="8" cy="8" r="8" fill="currentColor" />
            </svg>            
            <div class="details">
              <span>{link.title}</span>
            </div>
          </a>
        {/each}
      </div>
    {/each}
  </div>
  <div class="theme">
    <span class="active">Night Mode</span>
    <span>Day Mode</span>
  </div>
</nav>

<style>
  nav {
    position: fixed;
    top: 0px;
    left: 0px;
    bottom: 0px;
    width: 18rem;
    height: 100%;
    z-index: 40;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    border-right: 1px dashed rgba(255,255,255,.25);
    background: rgba(0,0,0,.8);
    backdrop-filter: blur(4px);
  }
  .sec {
    position: relative;
    flex: 1;
    padding: 1rem 2rem;
    gap: .5rem;
    overflow-y: auto;
  }
  .category-nav {
    padding: .5rem;
    display: flex;
    flex-direction: column;
    border-radius: 1rem;
  }
  a {
    padding: .5rem;
    display: flex;
    align-items: center;
    gap: 1rem;
    color: rgba(255,255,255,.5);
    text-decoration: none;
    transition: all .25s linear;
  }
  a:hover, .active {
    color: rgba(255,255,255,1);
  }
  a svg {
    width: .5rem;
    height: .5rem;
  }
  .details {
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: .5rem;
  }
  h3 {
    margin-block: 1rem 0;
    font-weight: normal;
    font-size: .75rem;
    text-transform: uppercase;
  }
  .theme {
    padding: 2rem;
    display: flex;
    flex-direction: column;
  }
  .theme span {
    padding: .5rem;
    color: rgba(255,255,255,.5);
  }
  .theme span.active {
    color: white;
  }
</style>