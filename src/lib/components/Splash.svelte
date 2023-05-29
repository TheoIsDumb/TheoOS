<script>
	export let commandsFormatted;
	import { fade } from 'svelte/transition';
</script>

<style>
	div.splash {
		position: absolute;
		top: 0;
		left: 0;
		height: 100%;
		width: inherit;
	}
</style>

<div
	class="splash flex flex-ac flex-jc"
	transition:fade>
		Available commands are:<br>
		{commandsFormatted}.
</div>