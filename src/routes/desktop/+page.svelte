<script>
  import { openedApps } from "$lib/store.js";
  import Panel from "$lib/components/Panel.svelte";
  import Dock from "$lib/components/Dock.svelte";
  import { scale, fade } from "svelte/transition";

  let outOfFocus = false;
  function enter() { outOfFocus = false; }
  function leave() { outOfFocus = true; }
</script>

<div class="parent w-[100dvw] h-[100dvh] relative overflow-hidden"
  transition:scale on:mouseenter={enter} on:mouseleave={leave}>
  <Panel />

  {#each $openedApps as openedApp}
    <svelte:component this={openedApp.app} />
  {/each}

  {#if outOfFocus}
    <div transition:fade class="fixed top-0 left-0 w-[100dvw] h-[100dvh] gap-4 z-[10] backdrop-blur bg-[#04040480] text-white flex justify-center items-center">
      <h1 class="text-3xl font-bold">where<br>ya<br>goin?</h1>
    </div>
  {/if}
</div>

<Dock />

<style>
  div.parent { background: url("/wall/4k.avif") fixed center / cover; }
</style>
