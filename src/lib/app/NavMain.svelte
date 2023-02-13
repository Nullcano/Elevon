<script>
  import { page } from '$app/stores'
  import NavLogo from './NavLogo.svelte'
  import MainSearch from './MainSearch.svelte';
</script>

<nav>
  <div class="inner">
    <div class="flex-row-center">
      <NavLogo />
      <MainSearch />
    </div>
    <a class:active="{$page.url.pathname.includes('variables')}" href="/variables">
      <div class="nav-item">
        <span>Variables</span>
      </div>
    </a>
    <a class:active="{$page.url.pathname.includes('classes')}" href="/classes">
      <div class="nav-item">
        <span>Classes</span>
      </div>
    </a>
    <a class:active="{$page.url.pathname.includes('shorthands')}" href="/shorthands">
      <div class="nav-item">
        <span>Shorthands</span>
      </div>
    </a>
    <a class:active="{$page.url.pathname.includes('components')}" href="/components">
      <div class="nav-item">
        <span>Components</span>
      </div>
    </a>
    <a class:active="{$page.url.pathname.includes('templates')}" href="/templates">
      <div class="nav-item">
        <span>Templates</span>
      </div>
    </a>
    <a class:active="{$page.url.pathname.includes('applications')}" href="/applications">
      <div class="nav-item">
        <span>Applications</span>
      </div>
    </a>
    <div class="flex">
      <a class:active="{$page.url.pathname.includes('html')}" href="/html">
        <div class="nav-item">
          <span>HTML</span>
        </div>
      </a>
      <a class:active="{$page.url.pathname.includes('css')}" href="/css">
        <div class="nav-item">
          <span>CSS</span>
        </div>
      </a>
    </div>
  </div>
</nav>

<style>
  nav {
    position: relative;
    color: var(--gray-90);
    user-select: none;
  }
  .inner {
    margin: 0 auto;
    padding: 0 2rem;
    max-width: 90em;
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  a, .link {
    color: var(--gray-80);
    text-decoration: none;
  }
  a:hover, .link:hover {
    color: var(--gray-100)
  }
  .active {
    color: var(--gray-100);
  }
  .box {
    position: relative;
    display: grid;
    place-items: center;
    cursor: pointer;
  }
  .link {
    padding: 1.5rem;
    line-height: 1;
    position: relative;
    white-space: nowrap;
    text-transform: uppercase;
  }
  .box ul {
    margin: 0;
    padding: 1rem 2rem;
    background: var(--gray-5);
  }
  .box:focus-within > ul {
    display: block;
  }

  .nav-item {
    position: relative;
    padding: .5rem 0;
    display: flex;
    align-items: center;
    gap: .25rem;
  }
  @media (max-width:60em) {
    nav {
      background-color: hsla(266, 14%, 10%, .9);
      backdrop-filter: blur(4px);
    }
  }
</style>