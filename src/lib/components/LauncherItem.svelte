<script>
    export let app;

    import { openedApps } from '$lib/store.js';
    import Icon from '@iconify/svelte';

    export const check = (appName) => {
            for (let i=0; i<$openedApps.length; i++) {
                if ($openedApps[i].id === appName) {
                    return false;
                    }
                }
    }
    const closeLauncher = () => {
            $openedApps = $openedApps.filter((item) => item.id !== "Launcher");
    }

    const openApp = (App, Name) => {
        if ($openedApps.length === 0 || check(Name) !== false) {
            $openedApps = [...$openedApps, {id: Name, app: App}];
            closeLauncher()
        } else {
            console.log("already opened")
        }
    }
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<div class="item flex flex-jc flex-ac flex-dirc"
on:click={() => openApp(app.component, app.id)}>
    <Icon icon={app.icon}/>
    <span>{app.id}</span>
    </div>

<style>
    div.item {
        height: 10rem;
        width: 10rem;
        color: white;
        border-radius: 0.2rem;
        cursor: pointer;
        position: relative;
        transition: transform 0.5s;
    }
    div.item:hover {
        transform: scale(1.1);
    }
    div.item span {
        position: absolute;
        bottom: 0.2rem;
        font-size: 0.8rem;
    }
    div.item :global(svg) {
        height: 4rem;
        width: 4rem;
    }
</style>