<script>
  import SearchButton from './SearchButton.svelte'
</script>

<nav class="h5">
  <div class="px4 py3 sec">
    <SearchButton />
    <a class="px3 py2" role="button" href="/get">
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
    display: block;
    background: white;
    color: black;
    text-decoration: none;
    border-radius: 60em;
  }
</style>