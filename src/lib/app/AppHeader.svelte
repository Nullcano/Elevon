<script>
  import { page } from '$app/stores'
  import MainSearch from './MainSearch.svelte'
</script>

<header>
  <div class="sec">
    <MainSearch />
    <a role="button" href="/get">
      <span>Get Elevon</span>
    </a>
  </div>
</header>

<style>
  header {
    position: sticky;
    top: 0;
    left: 0;
    width: 100%;
    height: 4rem;
    display: flex;
    align-items: center;
    user-select: none;
    z-index: 10;
  }
  header::before {
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