<script>
	export let commandsFormatted;
	import { fade } from "svelte/transition";
</script>

<div class="splash flex flex-ac flex-jc flex-dirc" transition:fade>
	Available commands are:
	<span>{commandsFormatted}</span>
</div>

<style>
	div.splash {
		position: absolute;
		top: 0;
		left: 0;
		height: 100%;
		width: inherit;
	}
</style>
