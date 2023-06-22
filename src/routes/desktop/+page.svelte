<script>
  import { openedApps } from "$lib/store.js";
  import Panel from "$lib/components/Panel.svelte";
  import { scale } from "svelte/transition";
</script>

<div transition:scale={{ duration: 400 }}>
  <Panel />

  {#each $openedApps as openedApp}
    <svelte:component this={openedApp.app} />
  {/each}
</div>

<style>
  div {
    width: 100dvw;
    height: 100dvh;
    background: url("/wall.avif") fixed center / cover;
    position: relative;
    overflow: hidden;
  }
</style>
