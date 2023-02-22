<script>
  import { page } from '$app/stores'
  import { nightMode } from '$lib/stores'
  import Logo from './Logo.svelte'
  import ScrollTop from './ScrollTop.svelte'

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

<aside>
  <Logo />
  <div class="px4 py3 sec">
    {#each categories as category}
      <h3>{category.title}</h3>
      <div class="category-nav">
        {#each category.links as link}
          <a class:active="{$page.url.pathname.includes(link.slug)}" href="/{link.slug}">
            <svg viewBox="0 0 16 16">
              <circle cx="8" cy="8" r="8" fill="currentColor" />
            </svg>            
            <span>{link.title}</span>
          </a>
        {/each}
      </div>
    {/each}
  </div>
  <div class="theme">
    <div class="link {$nightMode ? 'active' : ''}" on:click={() => $nightMode = true}>
      <svg viewBox="0 0 16 16">
        <circle cx="8" cy="8" r="8" fill="currentColor" />
      </svg>
      <span>Night Mode</span>
    </div>
    <div class="link {!$nightMode ? 'active' : ''}" on:click={() => $nightMode = false}>
      <svg viewBox="0 0 16 16">
        <circle cx="8" cy="8" r="8" fill="currentColor" />
      </svg>
      <span>Day Mode (Coming)</span>
    </div>
  </div>
  <ScrollTop />
</aside>

<style>
  aside {
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
    gap: .5rem;
    overflow-y: auto;
  }
  .category-nav {
    display: flex;
    flex-direction: column;
    gap: .5rem;
    border-radius: 1rem;
  }
  a, .link {
    padding: .5rem 1rem;
    display: flex;
    align-items: center;
    gap: 1rem;
    background: black;
    color: rgba(255,255,255,.5);
    text-decoration: none;
    transition: all .25s linear;
    border-radius: 1rem;
  }
  a:hover, .active, .link:hover, .link.active {
    background: linear-gradient(120deg, rgba(221,221,221,1) 0%, rgba(204,204,204,1) 15%, rgba(255,255,255,1) 25%, rgba(204,204,204,1) 35%, rgba(221,221,221,1) 100%);
    color: rgba(0,0,0,1);
  }
  svg {
    width: 1rem;
    height: 1rem;
  }
  h3 {
    margin-block: 1rem .5rem;
    font-weight: normal;
    font-size: .75rem;
    text-transform: uppercase;
  }
  .theme {
    padding: 2rem;
    display: flex;
    flex-direction: column;
    gap: .5rem;
  }
  .link {
    cursor: pointer;
  }
</style>