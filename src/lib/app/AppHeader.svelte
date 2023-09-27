<script>
  import SearchButton from './SearchButton.svelte'
  import Logo from './Logo.svelte'
  import AppNav from './AppNav.svelte'
  import ThemeSelector from './ThemeSelector.svelte';
</script>

<header class="sticky top-0 left-0 w-100 h3 flex items-center justify-between bg-black-50 z-5">
  <Logo />
  <AppNav />
  <SearchButton />
  <div class="wrap">
    <ThemeSelector />
    <a class="px3 py1" role="button" href="/get">
      <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M0 20H4V28H28V20H32V32H0V20Z" fill="currentColor"/>
        <path fill-rule="evenodd" clip-rule="evenodd" d="M14 16V0H18V16L22 12L25 15L16 24L6.99999 15L9.99999 12L14 16Z" fill="currentColor"/>
      </svg>
      <span>Get</span>
    </a>
  </div>
</header>

<style>
  .wrap {
    display: flex;
    align-items: center;
    gap: var(--size-3);
  }
  header {
    backdrop-filter: blur(4px);
  }
  a {
    position: relative;
    display: flex;
    align-items: center;
    gap: .25rem;
    background: var(--night-3);
    color: var(--day-1);
    text-decoration: none;
    border-radius: 60em;
    transition: all .25s linear;
  }
  a:hover {
    background: var(--night-2);
  }
  svg {
    height: 1rem;
  }
</style>