<script>
	import { errorMessages } from './+page.js';
  let randomMessage = errorMessages[Math.floor(Math.random() * errorMessages.length)];
</script>

<span>{randomMessage}</span>