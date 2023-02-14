<script>
	import { errorMessages } from './+page.js';
  let randomMessage = errorMessages[Math.floor(Math.random() * errorMessages.length)];
</script>

<section class="error">
  <div class="box">
    <span>{randomMessage}</span>
  </div>
</section>

<style>
  .error {
    padding: 4rem 0;
  }
  .box {
    margin: 4rem 2rem;
    padding: 2rem;
    border-radius: 1.5rem;
    background: #000;
  }
</style>