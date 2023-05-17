<script>
    import { draggable } from '@neodrag/svelte';
    import { fade } from 'svelte/transition';
</script>

<div class="app"
    use:draggable={{ bounds: {top: 30, right: 0, left: 0, bottom: 0},
    defaultPosition: {x: 100, y: 100 },
    handle: '.titlebar' }}
    transition:fade
    >
    <slot/>
</div>

<style>
    div.app {
        color: white;
        height: 20rem;
        width: 20rem;
        resize: both;
        overflow: auto;
        border-radius: 0.5rem !important;
    }
</style>