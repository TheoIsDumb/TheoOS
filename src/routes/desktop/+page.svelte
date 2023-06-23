<script>
  import { openedApps } from "$lib/store.js";
  import Panel from "$lib/components/Panel.svelte";
  import { scale } from "svelte/transition";
</script>

<div transition:scale>
  <Panel />

  {#each $openedApps as openedApp}
    <svelte:component this={openedApp.app} />
  {/each}
</div>

<style>
  div {
    width: 100dvw;
    height: 100dvh;
    position: relative;
    overflow: hidden;
  }

  @media (max-width: 1920px) {
    div {
      background: url("/wall/1080.avif") fixed center / cover;
    }
  }

  @media (min-width: 2100px) {
    div {
      background: url("/wall/4k.avif") fixed center / cover;
    }
  }
</style>
