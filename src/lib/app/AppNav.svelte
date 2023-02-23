<script>
  import SearchButton from './SearchButton.svelte'
</script>

<nav class="h5">
  <div class="px4 py3 sec">
    <SearchButton />
    <a class="px3 py2" role="button" href="/get">
      <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M0 20H4V28H28V20H32V32H0V20Z" fill="black"/>
        <path fill-rule="evenodd" clip-rule="evenodd" d="M14 16V0H18V16L22 12L25 15L16 24L6.99999 15L9.99999 12L14 16Z" fill="black"/>
      </svg>
      <span>Get Elevon</span>
    </a>
  </div>
</nav>

<style>
  nav {
    position: sticky;
    top: 0;
    left: 0;
    width: 100%;
    display: flex;
    align-items: center;
    user-select: none;
    z-index: 10;
  }
  nav::before {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    background: rgba(0,0,0,.8);
    backdrop-filter: blur(4px);
  }
  .sec {
    position: relative;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  a {
    position: relative;
    display: flex;
    align-items: center;
    gap: .25rem;
    background: linear-gradient(120deg, rgba(221,221,221,1) 0%, rgba(204,204,204,1) 15%, rgba(255,255,255,1) 25%, rgba(204,204,204,1) 35%, rgba(221,221,221,1) 100%);
    color: black;
    text-decoration: none;
    border-radius: 60em;
    transition: all .25s linear;
  }
  a:hover {
    background: linear-gradient(120deg, rgba(221,221,221,1) 0%, rgba(204,204,204,1) 65%, rgba(255,255,255,1) 75%, rgba(204,204,204,1) 85%, rgba(221,221,221,1) 100%);
  }
  svg {
    height: 1rem;
  }
</style>