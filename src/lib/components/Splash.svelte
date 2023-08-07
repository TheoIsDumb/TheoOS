<script>
	export let commandsFormatted;
	import { fade } from "svelte/transition";
</script>

<div class="splash flex flex-col justify-center items-center absolute h-full w-full top-0 left-0" transition:fade>
	Available commands are: <span>{commandsFormatted}</span>
</div>