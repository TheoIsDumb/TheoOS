<script>
  import { fly } from "svelte/transition";
  import { apps } from "$lib/store";
  import DockItem from "./DockItem.svelte";
</script>

<div class="dock flex flex-ac flex-jc" in:fly={{ y: 50, delay: 300 }}>
  {#each $apps as app}
    <DockItem {app} />
  {/each}
</div>

<style>
  div.dock {
    position: fixed;
    gap: 1rem;
    background-color: rgba(142, 142, 142, 0.301);
    backdrop-filter: blur(2px);
    padding: 0.5rem 1rem;
    overflow: auto;
  }
  @media (max-width: 540px) {
    div.dock {
      bottom: 0;
      width: 100dvw;
    }
  }
  @media (min-width: 540px) {
    div.dock {
      bottom: 1rem;
      left: 50%;
      transform: translate(-50%);
      border-radius: 0.3rem;
    }
  }
</style>
