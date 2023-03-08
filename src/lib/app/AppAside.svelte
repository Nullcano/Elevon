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
      <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M27 1.16304C21.1364 3.53659 17 9.28525 17 16C17 22.7148 21.1364 28.4634 27 30.837C25.1472 31.587 23.1218 32 21 32C12.1635 32 5 24.8366 5 16C5 7.16344 12.1635 0 21 0C23.1218 0 25.1472 0.413025 27 1.16304Z" fill="currentColor"/>
      </svg>
      <span>Night Mode</span>
    </div>
    <div class="link {!$nightMode ? 'active' : ''}" on:click={() => $nightMode = false}>
      <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M15 0H17V7H15V0Z" fill="currentColor"/>
        <path d="M15 25H17V32H15V25Z" fill="currentColor"/>
        <path d="M32 15V17H25V15H32Z" fill="currentColor"/>
        <path d="M7 15V17H0L8.74228e-08 15H7Z" fill="currentColor"/>
        <path d="M24.866 29.3564L23.134 30.3564L19.634 24.2942L21.366 23.2942L24.866 29.3564Z" fill="currentColor"/>
        <path d="M12.366 7.70577L10.634 8.70577L7.13398 2.64359L8.86603 1.64359L12.366 7.70577Z" fill="currentColor"/>
        <path d="M29.3564 7.13397L30.3564 8.86602L24.2942 12.366L23.2942 10.634L29.3564 7.13397Z" fill="currentColor"/>
        <path d="M7.70577 19.634L8.70577 21.366L2.64359 24.866L1.64359 23.134L7.70577 19.634Z" fill="currentColor"/>
        <path d="M23.134 1.64359L24.866 2.64359L21.366 8.70577L19.634 7.70577L23.134 1.64359Z" fill="currentColor"/>
        <path d="M10.634 23.2942L12.366 24.2942L8.86603 30.3564L7.13398 29.3564L10.634 23.2942Z" fill="currentColor"/>
        <path d="M30.3564 23.134L29.3564 24.866L23.2942 21.366L24.2942 19.634L30.3564 23.134Z" fill="currentColor"/>
        <path d="M8.70577 10.634L7.70577 12.366L1.64359 8.86602L2.64359 7.13397L8.70577 10.634Z" fill="currentColor"/>
        <path d="M24 16C24 20.4183 20.4183 24 16 24C11.5817 24 8 20.4183 8 16C8 11.5817 11.5817 8 16 8C20.4183 8 24 11.5817 24 16Z" fill="currentColor"/>
      </svg>
      <span>Day Mode</span>
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
    border-right: 1px dashed var(--night-1);
    background: var(--night-3-08);
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
    color: rgba(255,255,255,.5);
    text-decoration: none;
    transition: all .25s linear;
    border-radius: 1rem;
  }
  a:hover, .active, .link:hover, .link.active {
    background-color: var(--night-2);
    color: var(--day-1);
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