<script>
  const categories = [
    {
      title: 'Core',
      links: [
        { slug: 'props', title: 'Props' },
        { slug: 'classes', title: 'Classes' },
      ],
    },
    {
      title: 'Prefab',
      links: [
        { slug: 'components', title: 'Components' },
        { slug: 'templates', title: 'Templates' },
        { slug: 'applications', title: 'Applications' },
      ],
    },
    {
      title: 'Assets',
      links: [
        { slug: 'icons', title: 'Icons' },
        { slug: 'fonts', title: 'Fonts' },
      ],
    },
    {
      title: 'Extra',
      links: [
        { slug: 'html', title: 'HTML Reference' },
        { slug: 'css', title: 'CSS Reference' },
      ],
    },
  ]

  let openDropdown = null

  function toggleDropdown(index) {
    if (openDropdown === index) {
      openDropdown = null
    } else {
      openDropdown = index
    }
  }

  function handleBodyClick(event) {
    const nav = event.target.closest('nav')
    if (!nav) {
      openDropdown = null
    }
  }
</script>

<svelte:body on:click={handleBodyClick} />

<nav>
  {#each categories as category, index}
    <div class="nav-item nav-item-{index}" on:click={() => toggleDropdown(index)}>
      <span class="px3 py2">{category.title}</span>
      {#if openDropdown === index}
        <div class="nav-dropdown nav-dropdown-active w11 p2 bg-night-3">
          {#each category.links as link}
            <a class="px3 py2" href="{`/${link.slug}`}">{link.title}</a>
          {/each}
        </div>
      {/if}
    </div>
  {/each}
</nav>

<style>
  nav {
    display: flex;
    gap: 1rem;
    user-select: none;
  }
  nav span {
    display: block;
    cursor: pointer;
  }
  .nav-item {
    border-radius: var(--size-2);
  }
  .nav-item:hover  {
    background-color: var(--night-2);
  }
  .nav-dropdown {
    position: absolute;
    display: none;
    flex-direction: column;
    gap: var(--size-2);
    background-color: var(--night-3);
    border-radius: var(--size-2);
  }
  a {
    border-radius: var(--size-2);
  }
  .nav-dropdown a:hover {
    background-color: var(--night-1);
  }
  .nav-dropdown-active {
    display: flex;
  }
</style>
