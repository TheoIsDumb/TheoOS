<script>
    import { scale } from 'svelte/transition'

    export let m = { x: 0, y: 0 }

	const options = ["Cut", "Copy", "Paste", "Refresh"]
</script>

<div transition:scale={{ duration: 200 }}
class="dialog h-auto w-40 border border-neutral-600 bg-neutral-950 text-neutral-200 rounded-md shadow-md fixed z-10 p-2"
style="left: {m.x}px; top: {m.y}px">
    {#each options as opt}
        <div class="border-b border-neutral-700 p-1 last:border-b-0">{opt}</div>
    {/each}
</div>