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
    <div class="flex-row-center">
      <div class="box" tabindex="0">
        <span class="link">Specs</span>
        <ul>
          <a class:active="{$page.url.pathname.includes('intro')}" href="/intro">
            <div class="nav-item">
              <svg xmlns="http://www.w3.org/2000/svg" xml:space="preserve" viewBox="0 0 32 32">
                <g fill="none" stroke="currentColor" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2">
                  {#if ($page.url.pathname.includes('intro'))}
                    <path d="M27 12c0-6.075-4.925-11-11-11S5 5.925 5 12c0 8 11 19 11 19s11-11 11-19z"/>
                    <circle cx="16" cy="12" r="4"/>
                    {:else}
                    <circle cx="16" cy="12" r="4"/>
                  {/if}
                </g>
              </svg>
              <span>Introduction</span>
            </div>
          </a>
          <a class:active="{$page.url.pathname.includes('html')}" href="/html">
            <div class="nav-item">
              <svg xmlns="http://www.w3.org/2000/svg" xml:space="preserve" viewBox="0 0 32 32">
                <g fill="none" stroke="currentColor" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2">
                  {#if ($page.url.pathname.includes('html'))}
                    <path d="M27 12c0-6.075-4.925-11-11-11S5 5.925 5 12c0 8 11 19 11 19s11-11 11-19z"/>
                    <circle cx="16" cy="12" r="4"/>
                    {:else}
                    <circle cx="16" cy="12" r="4"/>
                  {/if}
                </g>
              </svg>
              <span>HTML</span>
            </div>
          </a>
          <a class:active="{$page.url.pathname.includes('css')}" href="/css">
            <div class="nav-item">
              <svg xmlns="http://www.w3.org/2000/svg" xml:space="preserve" viewBox="0 0 32 32">
                <g fill="none" stroke="currentColor" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2">
                  {#if ($page.url.pathname.includes('css'))}
                    <path d="M27 12c0-6.075-4.925-11-11-11S5 5.925 5 12c0 8 11 19 11 19s11-11 11-19z"/>
                    <circle cx="16" cy="12" r="4"/>
                    {:else}
                    <circle cx="16" cy="12" r="4"/>
                  {/if}
                </g>
              </svg>
              <span>CSS</span>
            </div>
          </a>
        </ul>
      </div>
      <div class="box" tabindex="0">
        <span class="link">Core</span>
        <ul>
          <a class:active="{$page.url.pathname.includes('variables')}" href="/variables">
            <div class="nav-item">
              <svg xmlns="http://www.w3.org/2000/svg" xml:space="preserve" viewBox="0 0 32 32">
                <g fill="none" stroke="currentColor" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2">
                  {#if ($page.url.pathname.includes('variables'))}
                    <path d="M27 12c0-6.075-4.925-11-11-11S5 5.925 5 12c0 8 11 19 11 19s11-11 11-19z"/>
                    <circle cx="16" cy="12" r="4"/>
                    {:else}
                    <circle cx="16" cy="12" r="4"/>
                  {/if}
                </g>
              </svg>
              <span>Variables</span>
            </div>
          </a>
          <a class:active="{$page.url.pathname.includes('classes')}" href="/classes">
            <div class="nav-item">
              <svg xmlns="http://www.w3.org/2000/svg" xml:space="preserve" viewBox="0 0 32 32">
                <g fill="none" stroke="currentColor" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2">
                  {#if ($page.url.pathname.includes('classes'))}
                    <path d="M27 12c0-6.075-4.925-11-11-11S5 5.925 5 12c0 8 11 19 11 19s11-11 11-19z"/>
                    <circle cx="16" cy="12" r="4"/>
                    {:else}
                    <circle cx="16" cy="12" r="4"/>
                  {/if}
                </g>
              </svg>
              <span>Classes</span>
            </div>
          </a>
          <a class:active="{$page.url.pathname.includes('shorthands')}" href="/shorthands">
            <div class="nav-item">
              <svg xmlns="http://www.w3.org/2000/svg" xml:space="preserve" viewBox="0 0 32 32">
                <g fill="none" stroke="currentColor" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2">
                  {#if ($page.url.pathname.includes('shorthands'))}
                    <path d="M27 12c0-6.075-4.925-11-11-11S5 5.925 5 12c0 8 11 19 11 19s11-11 11-19z"/>
                    <circle cx="16" cy="12" r="4"/>
                    {:else}
                    <circle cx="16" cy="12" r="4"/>
                  {/if}
                </g>
              </svg>
              <span>Shorthands</span>
            </div>
          </a>
        </ul>
      </div>
      <div class="box" tabindex="0">
        <span class="link">Prefab</span>
        <ul>
          <a class:active="{$page.url.pathname.includes('components')}" href="/components">
            <div class="nav-item">
              <svg xmlns="http://www.w3.org/2000/svg" xml:space="preserve" viewBox="0 0 32 32">
                <g fill="none" stroke="currentColor" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2">
                  {#if ($page.url.pathname.includes('components'))}
                    <path d="M27 12c0-6.075-4.925-11-11-11S5 5.925 5 12c0 8 11 19 11 19s11-11 11-19z"/>
                    <circle cx="16" cy="12" r="4"/>
                    {:else}
                    <circle cx="16" cy="12" r="4"/>
                  {/if}
                </g>
              </svg>
              <span>Components</span>
            </div>
          </a>
          <a class:active="{$page.url.pathname.includes('templates')}" href="/templates">
            <div class="nav-item">
              <svg xmlns="http://www.w3.org/2000/svg" xml:space="preserve" viewBox="0 0 32 32">
                <g fill="none" stroke="currentColor" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2">
                  {#if ($page.url.pathname.includes('templates'))}
                    <path d="M27 12c0-6.075-4.925-11-11-11S5 5.925 5 12c0 8 11 19 11 19s11-11 11-19z"/>
                    <circle cx="16" cy="12" r="4"/>
                    {:else}
                    <circle cx="16" cy="12" r="4"/>
                  {/if}
                </g>
              </svg>
              <span>Templates</span>
            </div>
          </a>
          <a class:active="{$page.url.pathname.includes('applications')}" href="/applications">
            <div class="nav-item">
              <svg xmlns="http://www.w3.org/2000/svg" xml:space="preserve" viewBox="0 0 32 32">
                <g fill="none" stroke="currentColor" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2">
                  {#if ($page.url.pathname.includes('applications'))}
                    <path d="M27 12c0-6.075-4.925-11-11-11S5 5.925 5 12c0 8 11 19 11 19s11-11 11-19z"/>
                    <circle cx="16" cy="12" r="4"/>
                    {:else}
                    <circle cx="16" cy="12" r="4"/>
                  {/if}
                </g>
              </svg>
              <span>Applications</span>
            </div>
          </a>
        </ul>
      </div>
    </div>
  </div>
</nav>

<style>
  nav {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 4rem;
    color: var(--gray-90);
    background-color: hsla(270, 50%, 5%, .9);
    backdrop-filter: blur(4px);
    border-bottom: 1px solid var(--gray-15);
    user-select: none;
    z-index: 1500;
  }
  .flex-row-center {
    display: flex;
    align-items: center;
    gap: 2rem;
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
    cursor: pointer;
  }
  .link {
    padding: 1rem;
    text-transform: uppercase;
  }
  .box ul {
    position: absolute;
    top: 1rem;
    left: -50%;
    margin-left: 1rem;
    padding: 1rem 2rem;
    background: var(--gray-5);
    border: 1px solid var(--gray-15);
    display: none;
    z-index: 1400;
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
  .nav-item svg {
    width: 1.5rem;
    transform: rotate(-90deg);
  }
</style>