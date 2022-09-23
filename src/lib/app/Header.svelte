<script>
  let searchInput
	let searchQuery
  let searchIsOpen
  let keysPressed = {}

  function handleKeyDown(e) {
    keysPressed[e.key] = true
    if (keysPressed['Control'] && e.key == 'k') {
      e.preventDefault()
      searchIsOpen = true
      searchInput.focus()
    }
	}

  function focusElem(elem) {
		elem.focus()
	}
  
  const handleKeyUp = function() {
		message.length === 0 ? showInput = false : showInput = true
	}

  const openSearch = function() {
    searchIsOpen = true
  }

  const closeSearch = function() {
    searchIsOpen = false
  }

</script>

<svelte:window on:keydown={handleKeyDown} />

<header class="position-sticky pull-top pull-left pull-right width-full background-dark backdrop-blur z-index-3">
  <div class="margin-auto max-width-xl height-400 margin-x-lg">
    <div class="width-parent height-parent display-flex align-items-center justify-space-between">
      <div class="display-flex align-items-center">
        <a class="display-block text-light-lighten" href="/">
          <svg id="logo" class="height-150" viewBox="0 0 470 97" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
            <path d="M10.616 95.28c-2.56 0-4.608-.683-6.144-2.048-1.536-1.365-2.304-3.243-2.304-5.632V34.864c0-9.899 2.816-17.664 8.448-23.296C16.248 5.936 24.013 3.12 33.912 3.12c4.779 0 9.259 1.195 13.44 3.584 4.267 2.304 7.936 5.632 11.008 9.984 2.987-4.437 6.57-7.808 10.752-10.112 4.267-2.304 8.875-3.456 13.824-3.456 9.899 0 17.664 2.816 23.296 8.448 5.632 5.632 8.448 13.397 8.448 23.296V87.6c0 2.304-.811 4.181-2.432 5.632-1.536 1.365-3.584 2.048-6.144 2.048s-4.608-.683-6.144-2.048c-1.536-1.365-2.304-3.243-2.304-5.632V34.864c0-6.485-1.195-11.136-3.584-13.952-2.39-2.901-6.315-4.352-11.776-4.352-4.95 0-8.79 1.579-11.52 4.736-2.645 3.157-3.968 7.68-3.968 13.568V87.6c0 2.39-.768 4.267-2.304 5.632-1.536 1.365-3.584 2.048-6.144 2.048s-4.608-.683-6.144-2.048c-1.45-1.365-2.176-3.243-2.176-5.632V34.864c0-5.717-1.365-10.197-4.096-13.44-2.73-3.243-6.528-4.864-11.392-4.864-5.461 0-9.387 1.45-11.776 4.352-2.39 2.816-3.584 7.467-3.584 13.952V87.6c0 2.304-.81 4.181-2.432 5.632-1.536 1.365-3.584 2.048-6.144 2.048ZM149.523 94c-6.485 0-11.52-1.707-15.104-5.12-3.584-3.413-5.376-8.192-5.376-14.336v-51.2c0-5.973 1.707-10.624 5.12-13.952 3.499-3.328 8.32-4.992 14.464-4.992h39.808c2.56 0 4.523.597 5.888 1.792 1.365 1.11 2.048 2.73 2.048 4.864 0 2.048-.725 3.67-2.176 4.864-1.365 1.11-3.285 1.664-5.76 1.664h-36.864c-1.707 0-3.072.555-4.096 1.664-.939 1.11-1.408 2.645-1.408 4.608v17.792h32.64c2.56 0 4.523.597 5.888 1.792 1.365 1.11 2.048 2.73 2.048 4.864 0 2.048-.725 3.67-2.176 4.864-1.365 1.11-3.285 1.664-5.76 1.664h-32.64v19.712c0 1.963.469 3.499 1.408 4.608 1.024 1.11 2.389 1.664 4.096 1.664h39.68c2.56 0 4.523.597 5.888 1.792 1.365 1.11 2.048 2.73 2.048 4.864 0 2.048-.725 3.67-2.176 4.864-1.365 1.11-3.285 1.664-5.76 1.664h-41.728Zm100.018 1.28c-2.56 0-4.608-.683-6.144-2.048-1.536-1.365-2.304-3.243-2.304-5.632V17.584h-24.704c-2.475 0-4.437-.555-5.888-1.664-1.365-1.195-2.048-2.816-2.048-4.864 0-2.133.683-3.755 2.048-4.864 1.365-1.195 3.328-1.792 5.888-1.792h66.432c2.56 0 4.523.597 5.888 1.792 1.365 1.11 2.048 2.73 2.048 4.864 0 2.048-.725 3.67-2.176 4.864-1.365 1.11-3.285 1.664-5.76 1.664h-24.704V87.6c0 2.304-.811 4.181-2.432 5.632-1.536 1.365-3.584 2.048-6.144 2.048Zm137.377-71.936c0-5.973 1.707-10.624 5.12-13.952 3.499-3.328 8.32-4.992 14.464-4.992h22.784c12.715 0 22.315 2.475 28.8 7.424 6.485 4.95 9.728 12.33 9.728 22.144 0 9.13-2.731 16.256-8.192 21.376-5.376 5.12-12.629 7.68-21.76 7.68l19.456 19.328c1.536 1.536 2.304 3.285 2.304 5.248 0 2.048-.896 3.84-2.688 5.376-1.877 1.45-3.712 2.176-5.504 2.176-2.475 0-4.736-1.11-6.784-3.328l-27.648-28.288h-13.056V87.6c0 2.39-.811 4.267-2.432 5.632-1.621 1.365-3.669 2.048-6.144 2.048-2.56 0-4.608-.683-6.144-2.048-1.536-1.365-2.304-3.243-2.304-5.632V23.344Zm41.856 27.008c5.632 0 10.027-.555 13.184-1.664 3.157-1.11 5.376-2.816 6.656-5.12 1.365-2.39 2.048-5.59 2.048-9.6 0-5.803-1.792-9.984-5.376-12.544-3.499-2.56-9.003-3.84-16.512-3.84h-19.328c-1.707 0-3.072.555-4.096 1.664-.939 1.11-1.408 2.645-1.408 4.608v26.496h24.832ZM350.352 94c6.485 0 11.52-1.707 15.104-5.12 3.584-3.413 5.376-8.192 5.376-14.336v-51.2c0-5.973-1.707-10.624-5.12-13.952-3.499-3.328-8.32-4.992-14.464-4.992H311.44c-2.56 0-4.523.597-5.888 1.792-1.365 1.11-2.048 2.73-2.048 4.864 0 2.048.725 3.67 2.176 4.864 1.365 1.11 3.285 1.664 5.76 1.664h36.864c1.707 0 3.072.555 4.096 1.664.939 1.11 1.408 2.645 1.408 4.608v17.792h-32.64c-2.56 0-4.523.597-5.888 1.792-1.365 1.11-2.048 2.73-2.048 4.864 0 2.048.725 3.67 2.176 4.864 1.365 1.11 3.285 1.664 5.76 1.664h32.64v19.712c0 1.963-.469 3.499-1.408 4.608-1.024 1.11-2.389 1.664-4.096 1.664h-39.68c-2.56 0-4.523.597-5.888 1.792-1.365 1.11-2.048 2.73-2.048 4.864 0 2.048.725 3.67 2.176 4.864 1.365 1.11 3.285 1.664 5.76 1.664h41.728Z" fill="currentColor"/>
          </svg>
        </a>
      </div>
      <div class="width-parent display-flex align-items-center justify-content-end">
        <button type="button" class="margin-x-m display-flex flex-1 align-items-center background-dark border-regular border-dark" on:click={openSearch}>
          <svg viewBox="0 0 24 24" focusable="false" class="width-4 height-150 display-inline-block text-light">
            <path fill="currentColor" d="M23.384,21.619,16.855,15.09a9.284,9.284,0,1,0-1.768,1.768l6.529,6.529a1.266,1.266,0,0,0,1.768,0A1.251,1.251,0,0,0,23.384,21.619ZM2.75,9.5a6.75,6.75,0,1,1,6.75,6.75A6.758,6.758,0,0,1,2.75,9.5Z"></path>
          </svg>
          <div class="">
            <p class="">Search the docs</p>
            <div>
              <span>Press </span>
              <kbd>
                <abbr title="Control" class="text-nano-large">Ctrl</abbr>
              </kbd>
              <span> and </span>
              <kbd>K</kbd>
              <span> to-search</span>
            </div>
          </div>
        </button>
        <nav class="margin-horizontal-large display-flex gap-large">
          <a class="padding-4 text-light-lighten hover-reset-underline" href="/docs">
            <div class="padding-medium">Documentation</div>
          </a>
          <a class="padding-4 text-light-lighten hover-reset-underline" href="/components">
            <div class="padding-medium">Components</div>
          </a>
          <a class="padding-4 text-light-lighten hover-reset-underline" href="/themes">
            <div class="padding-medium">Themes</div>
          </a>
        </nav>  
      </div>
    </div>
  </div>
</header>

{#if searchIsOpen}
  <div class="position-fixed pull-top width-device height-device background-dark-darken-90 backdrop-blur z-index-100" on:click={closeSearch}></div>
  <div class="position-absolute width-parent tc z-index-110">
    <input class="margin-left-10 width-half padding-4 background-dark reset-border text-light-lighten" type="text" bind:this={searchInput} bind:value={searchQuery} use:focusElem on:keyup={handleKeyUp} placeholder="Search" />
  </div>
{/if}