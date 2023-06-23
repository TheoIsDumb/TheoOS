<script>
    import { openedApps } from '../store';
    import Launcher from './Launcher.svelte';
    import Date from './Date.svelte';
    import Shutdown from './Shutdown.svelte';

    import Icon from "@iconify/svelte";

    const check = (appName) => {
        for (let i=0; i<$openedApps.length; i++) {
            if ($openedApps[i].id === appName) {
                return false;
                }
            }
    }

    const openApp = (App, Name) => {
        if ($openedApps.length === 0 || check(Name) !== false) {
            $openedApps = [...$openedApps, {id: Name, app: App}];
        } else {
            $openedApps = $openedApps.filter((item) => item.id !== Name);
        }
    }
</script>

<div class="panel flex flex-jc flex-ac">
    <div class="inner-container flex flex-ac">
        <button on:click={() => {openApp(Launcher, "Launcher")}}>
            <Icon icon="ph:circle-bold"/>
        </button>

        <Date/>

        <button on:click={() => {openApp(Shutdown, "Shutdown")}}>
            <Icon icon="ph:power-bold"/>
        </button>
    </div>
</div>

<style>
    div.panel {
        background-color: #100f0f61;
        height: 2.1rem;
        width: 100dvw;
        position: fixed;
        top: 0;
        backdrop-filter: blur(10px);
        color: white;
    }
    div.inner-container {
        width: 96%;
        justify-content: space-between;
    }
    button {
        all: unset;
        width: 1rem;
        height: 1rem;
    }
    div.panel :global(svg) {
        transition: all 0.3s;
        cursor: pointer;
    }
    div.panel :global(svg:hover) {
        filter: drop-shadow(0 0 0.3rem white);
    }
    @media (max-width: 1000px) {
        div.inner-container {
            width: 90%;
        }
    }
</style>