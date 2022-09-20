<script>
  import ComponentPreview from '$lib/app/ComponentPreview.svelte'
  import ComponentCode from '$lib/app/ComponentCode.svelte';
</script>

<h2 id="widths" class="padding-top-large padding-bottom-small">Widths</h2>

<h3>General</h3>

<div class="display-list gap-medium">
  <div>
    <ComponentPreview>
      <div class="width-0 background-dark-lighten">
        <div class="padding-3">Width 0</div>
      </div>
    </ComponentPreview>
    <ComponentCode>&#x3C;div class=&#x22;reset-width&#x22;&#x3E;Reset Width&#x3C;/div&#x3E;</ComponentCode>
    <div class="padding-3 background-dark-lighten">Resets element width to 0.</div>
  </div>
  <div>
    <ComponentPreview>
      <div class="half-width background-dark-lighten">
        <div class="padding-3">Half Width</div>
      </div>
    </ComponentPreview>
    <ComponentCode>&#x3C;div class=&#x22;half-width&#x22;&#x3E;Half Width&#x3C;/div&#x3E;</ComponentCode>
    <div class="padding-3 background-dark-lighten">Sets element width to 50%.</div>
  </div>
  <div>
    <ComponentPreview>
      <div class="parent-width background-dark-lighten">
        <div class="padding-3">Parent Width</div>
      </div>
    </ComponentPreview>
    <ComponentCode>&#x3C;div class=&#x22;parent-width&#x22;&#x3E;Parent Width&#x3C;/div&#x3E;</ComponentCode>
    <div class="padding-3 background-dark-lighten">Sets element width to 100%.</div>
  </div>
  <div>
    <ComponentPreview>
      <div class="device-width background-dark-lighten">
        <div class="padding-3">Device Width</div>
      </div>
    </ComponentPreview>
    <ComponentCode>&#x3C;div class=&#x22;device-width&#x22;&#x3E;Device Width&#x3C;/div&#x3E;</ComponentCode>
    <div class="padding-3 background-dark-lighten">Sets element width to 100vw.</div>
  </div>
</div>

<h3>Narrow</h3>


<h3>Wide</h3>

.narrow-extra-small &lcub; width: 1rem &rcub;
.narrow-small &lcub; width: 2.5rem &rcub;
.narrow-medium &lcub; width: 5rem &rcub;
.narrow-large &lcub; width: 10rem &rcub;
.narrow-extra-large &lcub; width: 15rem &rcub;
.narrow-extra-extra-large &lcub; width: 20rem &rcub;

.wide-extra-small &lcub; width: 30rem &rcub;
.wide-small &lcub; width: 40rem &rcub;
.wide-medium &lcub; width: 50rem &rcub;
.wide-large &lcub; width: 60rem &rcub;
.wide-extra-large &lcub; width: 70rem &rcub;
.wide-extra-extra-large &lcub; width: 80rem &rcub;