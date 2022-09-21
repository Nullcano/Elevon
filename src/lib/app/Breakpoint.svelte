<script>
  export let size = undefined;

  export let sizes = {
    m: false,
    l: false,
    xl: false
  }

  import { createEventDispatcher } from "svelte";
  import { breakpointObserver } from "./breakpointObserver";
  import { breakpoints } from "./breakpoints";

  const dispatch = createEventDispatcher();
  const observer = breakpointObserver();

  $: size = $observer;
  $: sizes = {
    m: size == "m",
    l: size == "l",
    xl: size == "xl",
  };
  $: if (size != undefined)
    dispatch("change", { size, breakpointValue: breakpoints[size] });
</script>

<slot size="{size}" sizes="{sizes}" />