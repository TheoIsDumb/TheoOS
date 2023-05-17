<script>
    import Menu from './Menu.svelte';
    import Date from './Date.svelte';
    import Shutdown from './Shutdown.svelte';

    import Icon from "@iconify/svelte";

    export let openedApps;

    let menu = false;
    let shutdown = false;

    function openMenu() {
        menu = !menu;

        if (menu === true) {
            openedApps = [...openedApps, Menu]
        } else {
            openedApps = openedApps.filter((item) => {
                return item !== Menu;
            })
            openedApps = openedApps;
        }
    }

    function openShutdown() {
        shutdown = !shutdown;

        if (shutdown === true) {
            openedApps = [...openedApps, Shutdown]
        } 
    }
</script>

<div class="taskbar">
    <div class="inner-container">
        <button on:click={openMenu}>
            <Icon icon="cib:arch-linux"/>
        </button>

        <Date/>

        <button on:click={openShutdown}>
            <Icon icon="icons8:shutdown"/>
        </button>
    </div>
</div>

<style>
    div.taskbar {
        background-color: #100f0f61;
        height: 1.8rem;
        width: 100dvw;
        position: fixed;
        top: 0;
        backdrop-filter: blur(10px);
        color: white;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    div.inner-container {
        width: 96%;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    button {
        all: unset;
    }
</style>