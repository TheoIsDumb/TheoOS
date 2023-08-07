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
  style="--lg-width: {width}"
  style:inset
  class="resize absolute rounded-lg overflow-auto shadow-2xl w-full md:w-[var(--lg-width)]"
>
  <slot />
</div>