<script>
  import { onMount } from 'svelte';

  let showButton = false;

  onMount(() => {
    window.addEventListener('scroll', () => {
      showButton = window.scrollY > 100;
    });
  });

  function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
</script>

<button on:click={scrollToTop} class:show={showButton}>
  <svg class="w3 h3" viewBox="0 0 450 584" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M225 558.333V25L425 225M125 125L25 225" stroke="currentColor" stroke-width="50" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>
</button>

<style>
  button {
    position: fixed;
    bottom: 1.5rem;
    left: 1.5rem;
    width: 3rem;
    height: 3rem;
    background: white;
    color: black;
    border: none;
    border-radius: 50%;
    cursor: pointer;
    transition: opacity .25s ease-in-out;
    opacity: 0;
    pointer-events: none;
  }
  button.show {
    opacity: 1;
    pointer-events: unset;
  }
</style>
