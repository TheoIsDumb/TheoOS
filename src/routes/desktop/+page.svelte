<script>
  import { openedApps } from "$lib/store.js"
  import Panel from "$lib/components/Panel.svelte"
  import Dock from "$lib/components/Dock.svelte"
  import { scale } from "svelte/transition"
</script>

<div class="parent w-[100dvw] h-[100dvh] relative overflow-hidden" transition:scale>
  <Panel />

  {#each $openedApps as openedApp}
    <svelte:component this={openedApp.app} />
  {/each}
</div>

<Dock />

<style>
  div.parent { background: url("/wall/image.avif") fixed center / cover; }
</style>