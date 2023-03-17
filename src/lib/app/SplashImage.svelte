<div class="splash">
  <img src="../images/craft.png" alt="Spacecraft" />
</div>

<style>
  .splash {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 50%;
  }
  .splash::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(var(--night-4-08), var(--night-4));
  }
  img {
    position: relative;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
</style>