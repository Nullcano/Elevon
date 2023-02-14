<script>
  import { page } from '$app/stores'
  import NavLogo from './NavLogo.svelte'
  import MainSearch from './MainSearch.svelte';

  const navLinks = [
    { slug: 'atoms', title: 'Atoms' },
    { slug: 'molecules', title: 'Molecules' },
    { slug: 'structures', title: 'Structures' },
    { slug: 'ecosystems', title: 'Ecosystems' },
    { slug: 'graphics', title: 'Graphics' },
    { slug: 'typefaces', title: 'Typefaces' },
    { slug: 'biosphere', title: 'Biosphere' }
  ]
  const moreLinks = [
    { slug: 'html', title: 'HTML Ref' },
    { slug: 'css', title: 'CSS Ref' }
  ]
</script>

<nav>
  <div class="sec">
    <NavLogo />
    <MainSearch />
  </div>
  <div class="sec">
    {#each navLinks as link}
      <a class:active="{$page.url.pathname.includes(link.slug)}" href="/{link.slug}">
        <div class="nav-item">
          <span>{link.title}</span>
        </div>
      </a>
    {/each}
  </div>
  <div class="sec">
    {#each moreLinks as link}
      <a class:active="{$page.url.pathname.includes(link.slug)}" href="/{link.slug}">
        <div class="nav-item">
          <span>{link.title}</span>
        </div>
      </a>
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
    z-index: 9;
  }
  .sec {
    margin: 0 2rem;
    display: flex;
    align-items: center;
    gap: 1rem;
  }
  a {
    color: var(--gray-80);
    text-decoration: none;
  }
  a:hover, .active {
    color: var(--gray-100)
  }
  .nav-item {
    position: relative;
    padding: .5rem 0;
    display: flex;
    align-items: center;
    gap: .25rem;
  }
</style>