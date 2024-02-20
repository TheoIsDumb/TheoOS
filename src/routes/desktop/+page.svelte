<script>
  import { scale } from "svelte/transition"
  import { openedApps } from "$lib/store.js"
  import Panel from "$lib/components/Panel.svelte"
  import Dock from "$lib/components/Dock.svelte"
  import ContextMenu from "$lib/components/ContextMenu.svelte"

	let m = { x: 0, y: 0 }
	
	let rightClicked = false
	
	function handleContextMenu(event) {
		rightClicked = true
		
		m.x = event.clientX;
		m.y = event.clientY;
		console.log(event.clientX, event.clientY);
	}
	
	function disable(e) {
		if (e.which === 1) {
		rightClicked = false
		}
	}
</script>

<!-- svelte-ignore a11y-no-static-element-interactions -->
<!-- svelte-ignore a11y-click-events-have-key-events -->
<div class="parent w-[100dvw] h-[100dvh] relative overflow-hidden" transition:scale
on:contextmenu|preventDefault|self={handleContextMenu} on:click|self={disable}>
  <Panel />

  {#each $openedApps as openedApp}
    <svelte:component this={openedApp.app} />
  {/each}
</div>

{#if rightClicked}
  <ContextMenu {m} />
{/if}

<Dock />

<style>
  div.parent { background: url("/wall/image.avif") fixed center / cover; }
</style>