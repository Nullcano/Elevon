<script>
  import { page } from '$app/stores'
  import NavLogo from '$lib/app/NavLogo.svelte'
</script>

<nav>
  <NavLogo />
  <div id="references" class="box">
    <label for="references">References</label>
    <ul>
      <a class:active="{$page.url.pathname.includes('intro')}" href="/intro">
        <div class="nav-item">
          <span>Introduction</span>
        </div>
      </a>
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
    </ul>
  </div>
  <div id="arctic-core" class="box">
    <label for="arctic-core">Arctic Core</label>
    <ul>
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
    </ul>
  </div>
  <div id="built-with-arctic" class="box">
    <label for="built-with-arctic">Built with Arctic</label>
    <ul>
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
    </ul>
  </div>
</nav>

<style>
  nav {
    position: fixed;
    width: 12rem;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: .25rem;
    background: var(--dark);
    border-right: 1px solid var(--median);
    overflow-y: auto;
    z-index: 1600;
  }
  a {
    color: var(--light)
  }
  span {
    position: relative;
  }
  ul {
    margin: 0;
    padding: .5rem 0;
  }
  label {
    position: sticky;
    top: 0;
    padding: .5rem 1rem;
    background: var(--dark);
    border-top: 1px solid var(--median);
    border-bottom: 1px solid var(--median);
    z-index: 1;
  }
  .box {
    width: 100%;
    display: flex;
    flex-direction: column;
  }
  .nav-item {
    position: relative;
    padding: .5rem 1rem;
    display: flex;
    align-items: center;
    gap: .5rem;
  }
  .nav-item::before {
    content: '';
    width: .75rem;
    height: .75rem;
    border: 2px solid var(--median);
    background: var(--dark);
    border-radius: 50%;
    transition: all .35s linear;
  }
  .active .nav-item::before, .nav-item:hover::before {
    background: var(--median);
  }
</style>