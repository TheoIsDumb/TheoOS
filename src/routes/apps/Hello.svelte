<script>
    import { draggable } from '@neodrag/svelte';
    import Titlebar from '$lib/components/Titlebar.svelte';
</script>

<div class="app"
    use:draggable={{ bounds: {top: 30, right: 0, left: 0, bottom: 0},
    defaultPosition: {x: 100, y: 100 },
    handle: '.titlebar' }}>
    <Titlebar/>
    hello
</div>

<style>
    div.app {
        color: white;
        background: #6d139e;
        height: 20rem;
        width: 20rem;
        display: flex;
        justify-content: center;
        align-items: center;
        resize: both;
        overflow: auto;
        border-radius: 0.3rem !important;
    }
</style>