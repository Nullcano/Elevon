<script>
  import { page } from '$app/stores'
  import MainSearch from './MainSearch.svelte'
</script>

<nav class="h5">
  <div class="pa3 sec">
    <MainSearch />
    <a role="button" href="/get">
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
    padding: .75rem 1rem;
    background: white;
    color: black;
    text-decoration: none;
    border-radius: 60em;
  }
</style>