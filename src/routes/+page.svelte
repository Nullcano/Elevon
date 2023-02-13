<script>
  import { onMount } from 'svelte'

  let length

  onMount(() => {
    const path = document.querySelector("#em-l4")
    length = path.getTotalLength()

    console.log(length)
  })
</script>

<div class="illustration">
  <svg viewBox="0 0 782 782" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle class="a-rot" cx="390.723" cy="390.723" r="380.723" stroke="var(--gray-30)" stroke-width="10" stroke-dasharray="70 70"/>
    <circle cx="390.723" cy="390.723" r="380.723" stroke="var(--gray-20)" stroke-width="20" stroke-dasharray="70 70"/>
  </svg>
</div>
<div class="splash">
  <div class="inner">
    <svg class="logo" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 647 100">
      <path fill="currentColor" d="M10 0h90L90 10H0L10 0ZM10 90h90l-10 10H0l10-10ZM0 20h10v25h80L80 55H10v25L0 90V20ZM109 100l10-10h90l-10 10h-90ZM109 90V10l10-10v80l-10 10ZM229.8 0H318l-9.8 10H220l9.8-10ZM229.8 90H318l-9.8 10H220l9.8-10ZM220 20h9.8v25h78.4l-9.8 10h-68.6v25L220 90V20ZM369 80 329 0h10l35 70-5 10ZM379 100l-5-10 45-90h10l-50 100Z"/>
      <path stroke="currentColor" stroke-width="9" d="M533.5 50c0 25.129-20.371 45.5-45.5 45.5S442.5 75.129 442.5 50 462.871 4.5 488 4.5s45.5 20.371 45.5 45.5Z"/>
      <path fill="currentColor" d="M637.1 80V10L647 0v90l-9.9-10ZM548 0v100l9.9-10V25l74.25 75H647L548 0Z"/>
    </svg>
    <h1>All-Inclusive Design System <br/>for the Modern Web</h1>  
  </div>
</div>

<section>
  <div class="inner">
    <article>
      <svg viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M14.1176 14.1176C11.6912 16.544 9.01956 18.2307 6.6803 19.0104C4.30932 19.8007 2.43986 19.6174 1.41124 18.5888C0.382625 17.5601 0.199258 15.6907 0.989586 13.3197C1.76934 10.9804 3.45603 8.30876 5.8824 5.8824C8.30876 3.45603 10.9804 1.76934 13.3197 0.989586C15.6907 0.199258 17.5601 0.382625 18.5888 1.41124C19.6174 2.43986 19.8007 4.30932 19.0104 6.6803C18.2307 9.01956 16.544 11.6912 14.1176 14.1176Z" stroke="#4066BF" stroke-linecap="round"/>
        <path d="M18.5888 18.5888C17.5601 19.6174 15.6907 19.8007 13.3197 19.0104C10.9804 18.2307 8.30876 16.544 5.8824 14.1176C3.45603 11.6912 1.76934 9.01956 0.989586 6.6803C0.199258 4.30932 0.382625 2.43986 1.41124 1.41124C2.43986 0.382625 4.30932 0.199258 6.6803 0.989586C9.01956 1.76934 11.6912 3.45603 14.1176 5.8824C16.544 8.30876 18.2307 10.9804 19.0104 13.3197C19.8007 15.6907 19.6174 17.5601 18.5888 18.5888Z" stroke="#4066BF" stroke-linecap="round"/>
        <circle cx="10" cy="10" r="2" fill="#9FB2DF"/>
      </svg>
      <h2>Elevon Atoms</h2>
      <p>Collection of CSS variables to customize your application.</p>
    </article>
    <article>
      <svg viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M10 5L10 9" stroke="#9FB2DF"/>
        <path d="M7 14L5 16" stroke="#9FB2DF"/>
        <path d="M13 14L15 16" stroke="#9FB2DF"/>
        <path d="M5.5 17C5.5 18.3807 4.38071 19.5 3 19.5C1.61929 19.5 0.5 18.3807 0.5 17C0.5 15.6193 1.61929 14.5 3 14.5C4.38071 14.5 5.5 15.6193 5.5 17Z" stroke="#4066BF" stroke-linecap="round"/>
        <path d="M12.5 3C12.5 4.38071 11.3807 5.5 10 5.5C8.61929 5.5 7.5 4.38071 7.5 3C7.5 1.61929 8.61929 0.5 10 0.5C11.3807 0.5 12.5 1.61929 12.5 3Z" stroke="#4066BF" stroke-linecap="round"/>
        <path d="M19.5 17C19.5 18.3807 18.3807 19.5 17 19.5C15.6193 19.5 14.5 18.3807 14.5 17C14.5 15.6193 15.6193 14.5 17 14.5C18.3807 14.5 19.5 15.6193 19.5 17Z" stroke="#4066BF" stroke-linecap="round"/>
        <path d="M13.5 12C13.5 13.933 11.933 15.5 10 15.5C8.067 15.5 6.5 13.933 6.5 12C6.5 10.067 8.067 8.5 10 8.5C11.933 8.5 13.5 10.067 13.5 12Z" fill="#9FB2DF" stroke="#4066BF" stroke-linecap="round"/>
      </svg>
      <h2>Elevon Molecules</h2>
      <p>An extensive library of CSS classes for easy layout, spacing, and typography.</p>
    </article>
    <article>
      <svg viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M2 0.5H8C8.82843 0.5 9.5 1.17157 9.5 2V3C9.5 3.27614 9.27614 3.5 9 3.5C8.17157 3.5 7.5 4.17157 7.5 5V7C7.5 7.82843 8.17157 8.5 9 8.5C9.27614 8.5 9.5 8.72386 9.5 9V11C9.5 11.2761 9.27614 11.5 9 11.5C8.17157 11.5 7.5 12.1716 7.5 13V15C7.5 15.8284 8.17157 16.5 9 16.5C9.27614 16.5 9.5 16.7239 9.5 17V18C9.5 18.8284 8.82843 19.5 8 19.5H2C1.17157 19.5 0.5 18.8284 0.5 18V2C0.5 1.17157 1.17157 0.5 2 0.5Z" stroke="#4066BF"/>
        <path d="M18 0.5H12C11.1716 0.5 10.5 1.17157 10.5 2V3C10.5 3.82843 9.82843 4.5 9 4.5C8.72386 4.5 8.5 4.72386 8.5 5V7C8.5 7.27614 8.72386 7.5 9 7.5C9.82843 7.5 10.5 8.17157 10.5 9V11C10.5 11.8284 9.82843 12.5 9 12.5C8.72386 12.5 8.5 12.7239 8.5 13V15C8.5 15.2761 8.72386 15.5 9 15.5C9.82843 15.5 10.5 16.1716 10.5 17V18C10.5 18.8284 11.1716 19.5 12 19.5H18C18.8284 19.5 19.5 18.8284 19.5 18V2C19.5 1.17157 18.8284 0.5 18 0.5Z" stroke="#9FB2DF"/>
      </svg>
      <h2>Elevon Structures</h2>
      <p>A pre-made component library that adheres to Elevon's design and interface standards.</p>
    </article>
    <article>
      <svg viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M17.5 10C17.5 14.1421 14.1421 17.5 10 17.5C5.85786 17.5 2.5 14.1421 2.5 10C2.5 5.85786 5.85786 2.5 10 2.5C14.1421 2.5 17.5 5.85786 17.5 10Z" stroke="#4066BF" stroke-linecap="round"/>
        <path d="M3.5 10C3.5 10.8284 2.82843 11.5 2 11.5C1.17157 11.5 0.5 10.8284 0.5 10C0.5 9.17157 1.17157 8.5 2 8.5C2.82843 8.5 3.5 9.17157 3.5 10Z" fill="#9FB2DF" stroke="#4066BF" stroke-linecap="round"/>
        <path d="M11.5 2C11.5 2.82843 10.8284 3.5 10 3.5C9.17157 3.5 8.5 2.82843 8.5 2C8.5 1.17157 9.17157 0.5 10 0.5C10.8284 0.5 11.5 1.17157 11.5 2Z" fill="#9FB2DF" stroke="#4066BF" stroke-linecap="round"/>
        <path d="M11.5 18C11.5 18.8284 10.8284 19.5 10 19.5C9.17157 19.5 8.5 18.8284 8.5 18C8.5 17.1716 9.17157 16.5 10 16.5C10.8284 16.5 11.5 17.1716 11.5 18Z" fill="#9FB2DF" stroke="#4066BF" stroke-linecap="round"/>
        <path d="M19.5 10C19.5 10.8284 18.8284 11.5 18 11.5C17.1716 11.5 16.5 10.8284 16.5 10C16.5 9.17157 17.1716 8.5 18 8.5C18.8284 8.5 19.5 9.17157 19.5 10Z" fill="#9FB2DF" stroke="#4066BF" stroke-linecap="round"/>
        <circle cx="10" cy="10" r="2" fill="#9FB2DF"/>
      </svg>
      <h2>Elevon Ecosystems</h2>
      <p>Time-saving HTML templates for building out app layouts and structures.</p>
    </article>
    <article>
      <svg viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="0.5" y="0.5" width="19" height="19" rx="1.5" stroke="#4066BF"/>
        <path d="M3 5C3 3.89543 3.89543 3 5 3H15C16.1046 3 17 3.89543 17 5C17 6.10457 16.1046 7 15 7H9.15037C8.72768 7 8.31586 7.13392 7.97402 7.38253C6.40753 8.52179 7.21341 11 9.15037 11H15C16.1046 11 17 11.8954 17 13V15C17 16.1046 16.1046 17 15 17H5C3.89543 17 3 16.1046 3 15V5Z" fill="#9FB2DF"/>
      </svg>
      <h2>Elevon Graphics</h2>
      <p>A library of visually appealing icons to enhance your application.</p>
    </article>
    <article>
      <svg viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M18 19.5L2 19.5C1.17157 19.5 0.5 18.8284 0.5 18L0.5 2C0.5 1.17157 1.17157 0.5 2 0.5L18 0.500002C18.8284 0.500002 19.5 1.17158 19.5 2V18C19.5 18.8284 18.8284 19.5 18 19.5Z" stroke="#4066BF"/>
        <path d="M16 3C16.5523 3 17 3.44772 17 4V6C17 6.55228 16.5523 7 16 7C15.4477 7 15 6.55228 15 6C15 5.44772 14.5523 5 14 5H12C11.4477 5 11 5.44772 11 6V14C11 14.5523 11.4477 15 12 15C12.5523 15 13 15.4477 13 16C13 16.5523 12.5523 17 12 17H8C7.44772 17 7 16.5523 7 16C7 15.4477 7.44772 15 8 15C8.55228 15 9 14.5523 9 14V6C9 5.44772 8.55228 5 8 5H6C5.44772 5 5 5.44772 5 6C5 6.55228 4.55228 7 4 7C3.44772 7 3 6.55228 3 6V4C3 3.44772 3.44772 3 4 3L16 3Z" fill="#9FB2DF"/>
      </svg>
      <h2>Elevon Typefaces</h2>
      <p>Elevon offers font families with both sans-serif and monospace options.</p>
    </article>
    <article>
      <svg viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M17 3C20.889 6.88899 20.9722 13.1943 17.0833 17.0833C13.1943 20.9722 6.88899 20.889 3 17L17 3Z" fill="#4066BF"/>
        <path d="M14.1176 14.1176C11.6912 16.544 9.01956 18.2307 6.6803 19.0104C4.30932 19.8007 2.43986 19.6174 1.41124 18.5888C0.382625 17.5601 0.199258 15.6907 0.989586 13.3197C1.76934 10.9804 3.45603 8.30876 5.8824 5.8824C8.30876 3.45603 10.9804 1.76934 13.3197 0.989586C15.6907 0.199258 17.5601 0.382625 18.5888 1.41124C19.6174 2.43986 19.8007 4.30932 19.0104 6.6803C18.2307 9.01956 16.544 11.6912 14.1176 14.1176Z" stroke="#9FB2DF" stroke-linecap="round"/>
        <path d="M2.99999 17C-0.888991 13.111 -0.972252 6.80573 2.91673 2.91674C6.80572 -0.972245 13.111 -0.888984 17 3V8L8 17L2.99999 17Z" fill="#4066BF"/>
      </svg>
      <h2>Elevon Biosphere</h2>
      <p>Applications created using Elevon's design system, all in one collection.</p>
    </article>
  </div>
</section>

<style>
  .inner {
    position: relative;
  }
  section .inner {
    margin: 0 auto;
    width: 90em;
    max-width: 90%;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
    gap: 2.5rem;
  }
  article {
    padding: 1.5rem;
    background: var(--gray-5);
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }
  article svg {
    width: 3rem;
  }
  h2 {
    font-size: 1.5rem;
    font-weight: 600;
    text-transform: uppercase;
  }
  p {
    font-size: 1.25rem;
  }
  .splash {
    position: relative;
    height: 75vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
  }
  .splash svg {
    width: 50vw;
  }
  h1 {
    margin: 8rem 0 0 0;
    max-width: 28ch;
    padding: 0;
    font-size: 3vw;
    text-transform: uppercase;
    font-weight: 600;
    line-height: 1.25;
  }
  .illustration svg  {
    position: fixed;
    bottom: -30em;
    right: -30em;
    width: 70em;
    height: 70em;
  }
  .a-rot {
    transform-box: fill-box;
    transform-origin: center;
    animation: rotate 60s linear infinite;
  }
  @keyframes rotate {
    to { transform: rotate(360deg) }
  }
  @media (max-width: 60em) {
    h1 {
      font-size: 2rem;
    }
  }
</style>