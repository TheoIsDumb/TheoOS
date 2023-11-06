<script>
  export let backgroundColor = "#131313";
  export let color = "white";
  export let height = "30rem";
  export let width = "25rem";
  export let inset = "25%";

  import { scale, fade } from "svelte/transition";
  import { draggable } from "@neodrag/svelte";
</script>

<div
  in:scale
  out:fade={{ duration: 400 }}
  use:draggable={{ handle: ".titlebar" }}
  style:background-color={backgroundColor}
  style:color
  style:height
  style="--lg-width: {width}; box-shadow: 0 0 0.8rem black"
  style:inset
  class="resize absolute rounded-lg overflow-auto w-[95%] sm:w-[var(--lg-width)]"
>
  <slot />
</div>