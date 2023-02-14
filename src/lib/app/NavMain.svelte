<script>
  import { page } from '$app/stores'
  import NavLogo from './NavLogo.svelte'
  import MainSearch from './MainSearch.svelte'

  const categories = [
    {
      title: 'Core',
      links: [
        { slug: 'atoms', title: 'Core CSS variables', product: 'Elevon Atoms' },
        { slug: 'molecules', title: 'Library of CSS classes', product: 'Elevon Molecules' },
      ]
    },
    {
      title: 'Assets',
      links: [
        { slug: 'graphics', title: 'Gallery of SVG icons', product: 'Elevon Graphics' },
        { slug: 'typefaces', title: 'Built-in standard fonts', product: 'Elevon Typefaces' },
      ]
    },
    {
      title: 'Prefab',
      links: [
        { slug: 'structures', title: 'Library of components', product: 'Elevon Structures' },
        { slug: 'ecosystems', title: 'Collection of templates', product: 'Elevon Ecosystems' },
        { slug: 'biosphere', title: 'Built with Elevon', product: 'Elevon Biosphere' }
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
  <div class="sec">
    <NavLogo />
    <MainSearch />
  </div>
  <div class="sec">
    {#each categories as category}
      <div class="category" on:mouseenter={() => category.dropdown = true} on:mouseleave={() => category.dropdown = false}>
        <span>{category.title}</span>
        {#if category.dropdown}
          <div class="dropdown">
            {#each category.links as link}
              <a class:active="{$page.url.pathname.includes(link.slug)}" href="/{link.slug}">
                <div class="icon"></div>
                <div class="details">
                  <span>{link.title}</span>
                  {#if link.product}
                    <span>{link.product}</span>
                  {/if}
                </div>
              </a>
            {/each}
          </div>
        {/if}
      </div>
    {/each}
  </div>
</nav>

<style>
  nav {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 4rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    user-select: none;
    background: hsla(210, 100%, 35%, .8);
    backdrop-filter: blur(4px);
    z-index: 10;
  }
  .sec {
    margin: 0 2rem;
    display: flex;
    align-items: center;
  }
  .category {
    position: relative;
    padding: 1rem;
    cursor: pointer;
  }
  .dropdown {
    position: absolute;
    min-width: 20rem;
    margin-top: 1rem;
    right: -1rem;
    padding: .5rem;
    display: flex;
    flex-direction: column;
    background: var(--day-1);
    border-radius: 1rem;
    z-index: 50;
  }
  a {
    display: grid;
    padding: .5rem;
    grid-template-columns: auto 1fr;
    gap: 1rem;
    color: var(--night-1);
    text-decoration: none;
    border-radius: 1rem;
  }
  a:hover, .active {
    background: var(--blue-1);
  }
  .icon {
    width: 3rem;
    height: 3rem;
    border-radius: 1rem;
    background: var(--blue-4);
  }
  .details {
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: .5rem;
  }
</style>