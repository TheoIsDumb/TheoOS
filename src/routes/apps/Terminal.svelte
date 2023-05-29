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
		<div class="neofetch flex flex-ac" style="gap: 1rem;">
			<img src="/logo.svg" alt="logo" width="100rem" height="100rem"/>
			<div class="text">
				<b>os:</b> theoOS<br>
				<b>powered by:</b>
					<a style="color: white;" href="https://kit.svelte.dev" target="_blank">SvelteKit</a><br>
				<b>created by:</b>
					<a style="color: white;" href="https://github.com/TheoIsDumb" target="_blank">Theo</a><br>
				<b>source code:</b>
					<a style="color: white;" href="https://github.com/TheoIsDumb/TheoOS" target="_blank">Github</a><br>
				<b>courtesy:</b>
					<a style="color: white;" href="https://vkdbois.xyz" target="_blank">vkdbois.xyz</a><br>
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
			outputs = [...outputs, `${input}: <span style="color: red;">command not found</span>`];
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
    <div class="content flex flex-ac flex-jc flex-dirc">
        <div class="output" bind:this={outputContainer}>
		{#if outputs.length === 0}
					<Splash {commandsFormatted}/>
				{/if}
		
		{#each outputs as output}
			<div transition:fade>
				<span style:color=slateblue>>>></span>
					{@html output}
		</div>
		{/each}
	</div>
	
	<div class="input flex flex-jc flex-ac">$
		<input type="text" on:keypress={handleInput}/>
    </div>
</App>

<style>
    div.content {
        gap: 0.5rem;
    }
    div.output {
		width: 100%;
        margin-top: 2rem;
        padding: 0 1rem;
		padding-bottom: 2rem;
		height: 90%;
		overflow: auto;
		position: relative;
	}
	div.input {
		background: #1a1a1d;
		border-top: 3px solid darkslateblue;
		height: 10%;
		width: 100%;
		padding: 0 0.4rem;
		gap: 0.4rem;
	}
	div.input input {
		width: 100%;
		background: transparent;
		color: #818add;
		margin: 0;
		outline: 0;
		padding: 0;
		border: 0;
	}
</style>