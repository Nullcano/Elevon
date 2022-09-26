<script>
  let showPreview = false
  let showCode = false
</script>

<section class="position-relative min-height-vh-half height-vh-full-landscape display-flex flex-direction-column-landscape align-items-center background-light-lighten">
  <div class="width-half width-full-landscape padding-y-lg display-flex flex-direction-column align-items-center">
    <div>
      <h1 class="text-200 text-median text-uppercase">Meter Design</h1>
      <h2 class="text-300 text-black text-uppercase line-height-md">
        ⚡<i>Supercharged</i><br>
        HTML elements<br>
        <span class="box-shadow-box">out of the box</span>
      </h2>
    </div>
  </div>
  <div class="position-relative width-half width-full-landscape height-full">
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

<section class="position-relative min-height-vh-half display-flex align-items-center background-dark-darken text-light">
  <div class="padding-md display-flex" data-layout="contained">
    <div class="width-half display-flex align-items-center justify-content-center">
      <div class="slider">
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
    <div class="width-half width-full-landscape padding-y-lg display-flex flex-direction-column align-items-center">
      <div>
        <h1 class="text-200 text-median text-uppercase">Features</h1>
        <h2 class="text-300 text-black text-uppercase line-height-md">
          Shorthand classes<br>
          and attributes<br>
          for cleaner markup
        </h2>  
      </div>
    </div>
  </div>
</section>

<section class="position-relative min-height-vh-half display-flex align-items-center">
  <div class="padding-md" data-layout="contained">
    <h2 class="padding-md">How would you like to start?</h2>
    <div class="display-grid auto-fit-sm gap-150">
      <a class="hover-reset-underline" href="/docs">
        <div class="padding-md background-light-lighten">
          <h3>Build Components</h3>
          <div class="height-100"></div>
          <p>Read the <b>Meter CSS</b> documentation and build your own layouts and components.</p>
        </div>
      </a>
      <a class="hover-reset-underline" href="/components">
        <div class="padding-md background-light-lighten">
          <h3>Find Components</h3>
          <div class="height-100"></div>
          <p>Browse <b>Meter Components</b> and copy/modify pre-built components.</p>
        </div>
      </a>
      <a class="hover-reset-underline" href="/themes">
        <div class="padding-md background-light-lighten">
          <h3>Starter Themes</h3>
          <div class="height-100"></div>
          <p>Browse <b>Meter Themes</b> and copy/modify pre-built application layouts.</p>
        </div>
      </a>
    </div>
  </div>
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
    background: var(--dark);
    color: var(--light);
  }
  .preview-item {
    margin-top: 4rem;
    margin-left: 4rem;
    background: var(--light);
    color: var(--dark);
  }
  .code-item pre, .preview-item dl {
    width: 200%;
    margin: 3rem 0;
  }
  .preview-item.active, .code-item.active {
    position: fixed;
    margin: 0;
    width: var(--container-md);
    max-width: 90%;
    border-radius: var(--size-150);
    height: auto;
    z-index: 100;
  }

  .slider {
    position: relative;
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
</style>