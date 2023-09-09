<script>
    import { onMount } from 'svelte';
	import { fade } from 'svelte/transition';
	import Splash from '$lib/components/Splash.svelte';
    import Titlebar from "$lib/components/Titlebar.svelte";
    import App from "$lib/components/App.svelte";

    let title = "Terminal"

    const AppDetails = {
        height: "25rem",
        width: "40rem"
    }

	let outputContainer;
	onMount(() => outputContainer = document.querySelector('div.output'));
	
	let input;
	let outputs = [];
	let commands = ["echo", "neofetch", "useragent", "clear", "help"];
	let commandsFormatted = new Intl.ListFormat('en', {type: "conjunction"}).format(commands);

	function neofetch() {
		return `<br>
		<div class="neofetch flex items-center gap-4">
			<img src="/logo.svg" alt="logo" class="w-1/4 h-1/4"/>
			<div class="text">
				<b>os:</b> theoOS<br>
				<b>powered by:</b>
					<a class="text-white" href="https://kit.svelte.dev" target="_blank">SvelteKit</a><br>
				<b>created by:</b>
					<a class="text-white" href="https://github.com/TheoIsDumb" target="_blank">Theo</a><br>
				<b>source code:</b>
					<a class="text-white" href="https://github.com/TheoIsDumb/TheoOS" target="_blank">Github</a><br>
				<b>courtesy:</b>
					<a class="text-white" href="https://vkdbois.xyz" target="_blank">vkdbois.xyz</a><br>
			</div>
		</div>
		`
	}
	
	function produceOutput(input) {
		if (input.startsWith("echo")) {
			outputs = [...outputs, input.replace("echo", " ")];
		} else if (input === "useragent") {
			outputs = [...outputs, navigator.userAgent];
		} else if (input === "help") {
			outputs = [...outputs, "<b>Available commands: </b>" + commandsFormatted];
		} else if (input === "neofetch") {
			outputs = [...outputs, neofetch()];
		} else if (input === "clear") {
			outputs = [];
		} else {
			outputs = [...outputs, `${input}: <span class="text-rose-500 font-semibold">command not found</span>`];
		}
	}
	
	function handleInput(e) {
		if (e.key === "Enter") {
			input = this.value;
			produceOutput(input);
			outputContainer.scrollTop = outputContainer.scrollHeight;
			this.value = "";
		}
	}
</script>

<App {...AppDetails}>
    <Titlebar {title}/>
    <div class="content flex flex-col justify-center items-center gap-2">
        <div class="output w-full mt-8 px-4 pb-8 h-[90%] overflow-auto relative"
			bind:this={outputContainer}>
		{#if outputs.length === 0}
					<Splash {commandsFormatted}/>
				{/if}
		
		{#each outputs as output}
			<div transition:fade>
				<span class="text-blue-400 font-semibold">>>></span>
					{@html output}
		</div>
		{/each}
	</div>
	
	<div class="input flex justify-center items-center border-t-2 border-blue-500 h-[10%] w-full px-2 gap-2">$
		<input class="w-full bg-transparent m-0 [outline:0] p-0 border-0"
			type="text" on:keypress={handleInput}/>
    </div>
</App>