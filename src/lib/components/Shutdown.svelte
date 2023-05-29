<script>
    import { fade } from 'svelte/transition';
    import { openedApps } from "../store";
    import Icon from '@iconify/svelte';

    export let title = "Shutdown";

    const closeApp = () => {
        $openedApps = $openedApps.filter((item) => item.id !== title);
    }
</script>

<div
    id="shutdown"
    class="fullscreen shutdown_blur flex flex-jc flex-ac flex-dirc"
    transition:fade>
        <div style:font-style=italic>anganeyang poyaalo</div>

        <Icon icon="noto:pleading-face"/>

        <button on:click={closeApp}>I won't go</button>
</div>

<style>
    div#shutdown :global(svg) {
        height: 20rem;
        width: 20rem;
    }

    button {
        all: unset;
        padding: 0.3rem 1.3rem;
        border: 1px solid white;
        border-radius: 0.2rem;
        cursor: pointer;
        transition: all 0.4s;
        color: white;
    }
    button:hover {
        background-color: gainsboro;
        color: #131313;
    }
</style>