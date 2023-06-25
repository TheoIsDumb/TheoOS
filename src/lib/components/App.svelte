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
  id="parent"
>
  <slot />
</div>

<style>
  div#parent {
    resize: both;
    position: absolute;
    box-shadow: 0 0 0.8rem darkslategray;
    border-radius: 0.5rem !important;
    overflow: auto;
  }
  @media (max-width: 540px) {
    div#parent {
      width: 100%;
    }
  }
  @media (min-width: 540px) {
    div#parent {
      width: var(--lg-width);
    }
  }
</style>
