<script>
  import { openedApps } from "$lib/store.js";
  import Panel from "$lib/components/Panel.svelte";
  import Dock from "$lib/components/Dock.svelte";
  import { scale, fade } from "svelte/transition";

  let outOfFocus = false;

  function enter() {
    outOfFocus = false;
  }
  function leave() {
    outOfFocus = true;
  }
</script>

<div class="parent" transition:scale on:mouseenter={enter} on:mouseleave={leave}>
  <Panel />

  {#each $openedApps as openedApp}
    <svelte:component this={openedApp.app} />
  {/each}

  {#if outOfFocus}
    <div transition:fade class="fullscreen shutdown_blur flex flex-jc flex-ac">
      <h1>where<br>ya<br>goin?</h1>
    </div>
  {/if}
</div>

<Dock />

<style>
  div.parent {
    width: 100dvw;
    height: 100dvh;
    position: relative;
    overflow: hidden;
    background: url("/wall/4k.avif") fixed center / cover;
  }
</style>
