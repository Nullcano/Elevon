<section class="position-relative min-height-vh-half display-flex align-items-center background-light-lighten">
  <div class="padding-md" data-layout="contained">
    <h1 class="text-200 text-median text-uppercase">Meter Design</h1>
    <h2 class="text-300 text-bold text-uppercase line-height-md">
      <i>Supercharged</i><br>
      HTML elements<br>
      <span class="box-shadow-box">out of the box</span>
    </h2>
  </div>
</section>

<section class="position-relative min-height-vh-half display-flex align-items-center background-dark-lighten">
  <div class="padding-md" data-layout="contained">
    <h1 class="text-200 text-median text-uppercase">Meter Design</h1>
    <h2 class="text-300 text-bold text-uppercase line-height-md">
      <i>Supercharged</i><br>
      HTML elements<br>
      <span class="box-shadow-box">out of the box</span>
    </h2>
  </div>
</section>

<section class="position-relative min-height-vh-half display-flex align-items-center">
  <div class="padding-md" data-layout="contained">
    <h2 class="padding-md">How would you like to start?</h2>
    <div class="display-grid auto-fit-sm gap-md">
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
</style>