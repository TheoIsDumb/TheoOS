<script>
  import { openedApps } from "$lib/store.js";
  import Panel from "$lib/components/Panel.svelte";
  import Dock from "$lib/components/Dock.svelte";
  import { scale } from "svelte/transition";
</script>

<div transition:scale>
  <Panel />

  {#each $openedApps as openedApp}
    <svelte:component this={openedApp.app} />
  {/each}
</div>

<Dock />

<style>
  div {
    width: 100dvw;
    height: 100dvh;
    position: relative;
    overflow: hidden;
    background: url("/wall/4k.avif") fixed center / cover;
  }
</style>
