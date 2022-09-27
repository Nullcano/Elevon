<script>
  let showPreview = false
  let showCode = false

  let hidden = true
  const handleMouseenter = () => hidden = false
	const handleMouseleave = () => hidden = true
</script>

<section class="position-relative display-flex flex-direction-column flex-direction-row-landscape">
  <div class="width-half width-full width-half-landscape min-height-vh-half padding-200 border-bottom-portrait border-right-landscape border-thin border-dark-lighten display-grid place-content-center">
    <h1 class="text-200 text-median text-uppercase">Meter Design</h1>
    <h2 class="text-300 text-black text-uppercase line-height-md">
      ⚡<i>Supercharged</i><br>
      HTML elements<br>
      <span class="box-shadow-box">out of the box</span>
    </h2>
  </div>
  <div class="position-relative width-full width-half-landscape min-height-vh-half padding-200 overflow-all-hidden">
    <div class="code-item" class:active={showPreview} on:click="{() => showPreview = !showPreview}">
      <pre><code>&lt;dl&gt;
  &lt;dt&gt;Version&lt;/dt&gt;
  &lt;dd&gt;1.0&lt;/dd&gt;
  &lt;dt&gt;Size&lt;/dt&gt;
  &lt;dd&gt;100KB&lt;/dd&gt;
  &lt;dt&gt;Contents&lt;/dt&gt;
  &lt;dd&gt;
    &lt;li&gt;meter.css&lt;/li&gt;
    &lt;li&gt;meter.js&lt;/li&gt;
  &lt;/dd&gt;
  &lt;dt&gt;Website&lt;/dt&gt;
  &lt;dd&gt;
    &lt;a href=&quot;/&quot;&gt;Meter.design&lt;/a&gt;
  &lt;/dd&gt;
&lt;/dl&gt;</code></pre>
    </div>
    <div class="preview-item" class:active={showCode} on:click="{() => showCode = !showCode}">
      <dl>
        <dt>Version</dt>
        <dd>1.0</dd>
        <dt>Size</dt>
        <dd>100KB</dd>
        <dt>Contents</dt>
        <dd>
          <li>meter.css</li>
          <li>meter.js</li>
        </dd>
        <dt>Website</dt>
        <dd>
          <a href="/">Meter.design</a>
        </dd>
      </dl>
    </div>
  </div>
</section>

<section class="position-relative min-height-vh-half display-flex flex-direction-column flex-direction-row-landscape border-top border-bottom border-thin border-dark-lighten">
  <div class="position-relative width-half width-full width-half-landscape min-height-vh-half padding-200 border-bottom-portrait border-right-landscape border-thin border-dark-lighten display-grid place-content-center">
    <div class="margin-200 slider">
      <div class="slide slide-one">
        <pre><code class="margin-none">class=""</code></pre>
        <div class="margin-150">
          <div class="width-300 height-300 border-radius-circle background-light"></div>
          <div class="card-xs height-150 border-radius-150 background-light"></div>
          <div class="width-400 height-200 border-radius-pill background-light"></div>
        </div>
      </div>
      <div class="slide slide-two">
        <pre><code class="margin-none">class="display-flex"</code></pre>
        <div class="margin-150 display-flex">
          <div class="width-300 height-300 border-radius-circle background-light"></div>
          <div class="card-xs height-150 border-radius-150 background-light"></div>
          <div class="width-400 height-200 border-radius-pill background-light"></div>
        </div>
      </div>
      <div class="slide slide-three">
        <pre><code class="margin-none">class="display-flex align-items-center"</code></pre>
        <div class="margin-150 display-flex align-items-center">
          <div class="width-300 height-300 border-radius-circle background-light"></div>
          <div class="card-xs height-150 border-radius-150 background-light"></div>
          <div class="width-400 height-200 border-radius-pill background-light"></div>
        </div>
      </div>
      <div class="slide slide-four">
        <pre><code class="margin-none">class="display-flex align-items-center gap-100"</code></pre>
        <div class="margin-150 display-flex align-items-center gap-100">
          <div class="width-300 height-300 border-radius-circle background-light"></div>
          <div class="card-xs height-150 border-radius-150 background-light"></div>
          <div class="width-400 height-200 border-radius-pill background-light"></div>
        </div>
      </div>
      <div class="slide slide-five">
        <pre><code class="margin-none">class="<del style="background:red">display-flex align-items-center</del> gap-100"</code></pre>
        <div class="margin-150 gap-100">
          <div class="width-300 height-300 border-radius-circle background-light"></div>
          <div class="card-xs height-150 border-radius-150 background-light"></div>
          <div class="width-400 height-200 border-radius-pill background-light"></div>
        </div>
      </div>
      <div class="slide slide-six">
        <pre><code class="margin-none">class="<del style="background:red">display-flex align-items-center</del> gap-100"</code></pre>
        <pre><code class="margin-none">class="<span style="background:green">row-center</span> gap-100"</code></pre>
        <div class="margin-150 row-center gap-100">
          <div class="width-300 height-300 border-radius-circle background-light"></div>
          <div class="card-xs height-150 border-radius-150 background-light"></div>
          <div class="width-400 height-200 border-radius-pill background-light"></div>
        </div>
      </div>
    </div>
  </div>
  <div class="width-half width-full width-half-landscape min-height-vh-half padding-200 display-grid place-content-center" data-section="features">
    <h1 class="text-150 text-median text-uppercase">Features</h1>
    <h2 class="text-250 text-black text-uppercase line-height-md">
      Cleaner markup with<br/>
      shorthand classes<br>
      and attributes<br>
    </h2>  
  </div>
</section>

<section class="position-relative">
  <a class="download" href="/">
    <div class="position-relative padding-250 row-center justify-content-center gap-100">
      <svg class="width-500 height-500" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12.75 2.25L12.75 14.7644L15.9375 11.5769L16.9982 12.6375L13.0544 16.5813L13.0607 16.5875L12 17.6482L7.00186 12.65L8.06252 11.5894L11.25 14.7768L11.25 2.25L12.75 2.25Z" fill="currentColor"/>
        <path d="M4.75 20.25V15.25H3.25V21.75H20.75V15.25H19.25V20.25H4.75Z" fill="currentColor"/>
      </svg>
      <h2 class="position-relative padding-200 text-300 text-bold text-uppercase">Download Meter <small class="position-absolute bottom-none right-none margin-right-200 margin-bottom-100 text-100 text-median-lighten">&hellip; If you want to try it of course</small></h2>
      <svg class="width-500 height-500" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12.75 2.25L12.75 14.7644L15.9375 11.5769L16.9982 12.6375L13.0544 16.5813L13.0607 16.5875L12 17.6482L7.00186 12.65L8.06252 11.5894L11.25 14.7768L11.25 2.25L12.75 2.25Z" fill="currentColor"/>
        <path d="M4.75 20.25V15.25H3.25V21.75H20.75V15.25H19.25V20.25H4.75Z" fill="currentColor"/>
      </svg>
    </div>  
  </a>
  <div class="display-flex flex-column-portrait border-top border-bottom border-thin border-dark-lighten">
    <a class="width-third hover-reset-underline" href="/docs">
      <div class="padding-200 row-center justify-space-between">
        <h3 class="text-150">Build Components</h3>
        <svg class="width-300 height-300" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M22.0606 12L14 20.0607L12.9393 19L19.1893 12.75H2.25V11.25H19.1893L12.9393 5.00002L14 3.93936L22.0606 12Z" fill="currentColor"/>
        </svg>
      </div>
    </a>
    <a class="width-third hover-reset-underline border-left border-right border-thin border-dark-lighten" href="/components">
      <div class="padding-200 row-center justify-space-between">
        <h3 class="text-150">Prefab Components</h3>
        <svg class="width-300 height-300" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M22.0606 12L14 20.0607L12.9393 19L19.1893 12.75H2.25V11.25H19.1893L12.9393 5.00002L14 3.93936L22.0606 12Z" fill="currentColor"/>
        </svg>
      </div>
    </a>
    <a class="width-third hover-reset-underline" href="/themes">
      <div class="padding-200 row-center justify-space-between">
        <h3 class="text-150">Prefab Themes</h3>
        <svg class="width-300 height-300" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M22.0606 12L14 20.0607L12.9393 19L19.1893 12.75H2.25V11.25H19.1893L12.9393 5.00002L14 3.93936L22.0606 12Z" fill="currentColor"/>
        </svg>
      </div>
    </a>
  </div>
</section>

<section class="padding-250 text-center text-thin text-200 text-median text-italic" on:mouseenter={handleMouseenter} on:mouseleave={handleMouseleave}>
  <div class="padding-250 pointer-events-none">This is the end... {#if !hidden}of the page.{/if}<div>
</section>

<style>
  .box-shadow-box {
    position: relative;
  }
  .box-shadow-box::before {
    background: var(--light);
    content: '';
    top: var(--size-100);
    left: 0px;
    position: absolute;
    transform: translate(-100%, 0) skewY(-45deg);
    transform-origin: left top;
    height: 100%;
    width: var(--size-100);
  }
  .box-shadow-box::after {
    background: var(--light-darken);
    content: '';
    bottom: 0px;
    left: 0px;
    position: absolute;
    transform: translate(0, 100%) skewX(-45deg);
    transform-origin: left top;
    height: var(--size-100);
    width: 100%;
  }
  .code-item, .preview-item {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 16rem;
    height: 16rem;
    border-radius: 50%;
    overflow: hidden;
  }
  .code-item {
    margin-top: -4rem;
    margin-left: -4rem;
    background: var(--median-darken);
    color: var(--light);
  }
  .preview-item {
    margin-top: 4rem;
    margin-left: 4rem;
    background: var(--median-lighten);
    color: var(--dark);
  }
  .code-item pre, .preview-item dl {
    width: 200%;
    margin: 3rem 0;
  }
  .preview-item.active, .code-item.active {
    margin: 0;
    top: 0;
    left: 0;
    transform: translate(0);
    width: 100%;
    height: 100%;
    border-radius: var(--size-none);
    z-index: 100;
  }
  .code-item.active pre {
    margin: 0;
  }

  .slider {
    position: absolute;
    width: 100%;
    height: 100%;
  }
  .slide {
    position: absolute;
    opacity: 0;
  }
  .slide-one  {
    animation: slide 3s linear;
  }
  .slide-two  {
    animation: slide 3s linear;
    animation-delay: 2.5s;
  }
  .slide-three  {
    animation: slide 3s linear;
    animation-delay: 5s;
  }
  .slide-four {
    animation: slide 3s linear;
    animation-delay: 7.5s;
  }
  .slide-five {
    animation: slide 3s linear forwards;
    animation-delay: 10s;
  }
  .slide-six {
    animation: last-slide 3s linear forwards;
    animation-delay: 12.5s;
  }
  @keyframes slide  {
    0% { opacity: 0 }
    20% { opacity: 1 }
    80% { opacity: 1 }
    100% { opacity: 0 }
  }
  @keyframes last-slide  {
    0% { opacity: 0 }
    20% { opacity: 1 }
    80% { opacity: 1 }
    100% { opacity: 1 }
  }
  [data-section] {
    background-repeat: no-repeat;
    background-position: 2rem 2rem;
    background-size: 33.333%;
  }
  [data-section="features"] {
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 502.642 502.642' style='enable-background:new 0 0 502.642 502.642' xml:space='preserve'%3E%3Cpath style='fill:hsl(250,15%,16%)' d='m84.924 362.821-2.653-51.058c-.82-16.502-3.602-29.164-8.369-37.921-4.724-8.758-12.317-16.351-22.736-22.649 11.066-7.01 18.508-14.345 22.563-22.002 4.055-7.636 6.644-15.704 7.744-24.073 1.122-8.434 2.006-26.661 2.739-54.725.237-10.138 2.071-16.955 5.35-20.492 3.322-3.516 13.482-5.242 30.48-5.242V82.746h-9.319c-16.329 0-28.905 1.445-37.77 4.314-8.909 2.869-16.157 7.528-21.786 13.935-5.608 6.428-9.189 14.431-10.591 23.922-1.488 9.513-2.222 24.159-2.222 43.897 0 25.907-3.192 42.624-9.621 50.023-6.45 7.399-15.984 11.195-28.732 11.303v42.106c12.964.453 21.786 3.473 26.489 9.017 4.638 5.565 7.787 11.67 9.448 18.357 1.618 6.687 2.416 21.959 2.416 45.816 0 21.614 2.265 37.317 6.86 47.024 4.53 9.75 11.907 16.717 22.067 21.032 10.181 4.206 24.634 6.407 43.379 6.407h9.103v-42.128c-14.258 0-23.34-1.273-27.33-3.753-3.95-2.569-6.452-6.279-7.509-11.197zM502.621 272.245v-42.149c-12.727-.475-21.377-3.365-26.014-8.671-4.595-5.306-7.787-11.195-9.599-17.58-1.833-6.428-2.74-22.045-2.74-46.809 0-21.592-2.243-37.253-6.816-46.938-4.551-9.685-11.95-16.674-22.132-20.945-10.203-4.228-24.634-6.407-43.379-6.407h-9.34v41.847c14.733 0 23.836 1.035 27.416 3.149 3.538 2.114 5.803 4.616 6.73 7.55.949 2.912 1.747 14.431 2.459 34.6.712 20.19 1.769 33.952 3.149 41.373 1.381 7.442 4.077 14.323 8.068 20.6 3.947 6.342 10.98 12.727 21.01 19.306-9.448 5.479-16.394 11.929-20.773 19.306-4.4 7.377-7.312 15.294-8.801 23.814-1.424 8.499-2.502 27.697-3.192 57.637-.216 10.419-2.222 17.343-5.867 20.708-3.667 3.408-13.633 5.091-29.919 5.091v42.128h9.275c16.308 0 28.862-1.467 37.77-4.314 8.866-2.891 16.157-7.528 21.765-13.956 5.587-6.428 9.103-14.431 10.462-23.922 1.467-9.556 2.136-24.267 2.136-44.155 0-25.777 3.214-42.387 9.664-49.85 6.385-7.507 15.962-11.282 28.689-11.411 0-.002-.021-.002-.021-.002z'/%3E%3Cpath style='fill:hsl(250,15%,16%)' d='M398.11 250.631c-.992-.086-1.855-.302-2.783-.41.884-.173 1.747-.367 2.74-.431h-5.652c-40.251-4.81-75.649-18.939-101.879-38.849-19.91-26.209-34.039-61.585-38.827-101.9v-5.587c-.086.949-.367 1.855-.431 2.783-.129-.928-.367-1.834-.453-2.783v5.587c-4.789 40.316-18.918 75.67-38.827 101.9-26.122 19.888-61.498 34.039-101.793 38.849h-5.587c.992.065 1.855.28 2.783.431-.928.108-1.79.302-2.783.388h5.608c40.273 4.81 75.649 18.939 101.857 38.827 19.91 26.252 34.039 61.606 38.827 101.922v5.587c.086-.949.324-1.855.453-2.804.086.928.345 1.833.431 2.804v-5.587c4.789-40.294 18.918-75.67 38.827-101.922 26.23-19.888 61.585-34.017 101.879-38.784l5.61-.021zm-135.162 11.26a42.117 42.117 0 0 0-11.605 18.918c-2.157-7.356-6.212-13.805-11.67-18.918a41.765 41.765 0 0 0-19.004-11.67 41.804 41.804 0 0 0 19.004-11.691c5.457-5.134 9.513-11.605 11.67-18.918a42.24 42.24 0 0 0 11.605 18.918c5.112 5.457 11.605 9.534 18.961 11.691a42.194 42.194 0 0 0-18.961 11.67z'/%3E%3C/svg%3E");
  }
  .download {
    position: relative;
    display: block;
  }
  .download::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: url('https://i.giphy.com/73WrT6n6yoVfq.gif') no-repeat center;
    background-size: cover;
    mix-blend-mode: luminosity;
    opacity: 0;
    transition: all .5s ease-in-out;
  }
  .download:hover::before {
    opacity: .25;
  }
  .download:hover h2 {
    color: var(--light-lighten);
    text-shadow:
      0 1px 0 rgb(190,190,190),
      0 2px 0 rgb(185,185,185),
      0 3px 0 rgb(180,180,180),
      0 4px 0 rgb(175,175,175),
      0 5px 0 rgb(170,170,170),
      0 6px 0 rgb(165,165,165),
      0 7px 0 rgb(160,160,160),
      0 1px 5px rgba(0,0,0,.05),
      0 3px 5px rgba(0,0,0,.10),
      0 5px 10px rgba(0,0,0,.25),
      0 7px 10px rgba(0,0,0,.50),
      0 10px 15px rgba(0,0,0,.75);
    transform: scale(1.1);
    transition: all .2s ease-in-out;
  }
  .download:hover small {
    transform: scale(0);
  }
</style>