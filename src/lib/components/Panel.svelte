<script>
    import { fly } from "svelte/transition";
    import { openedApps } from "../store";
    import Launcher from "./Launcher.svelte";
    import Date from "./Date.svelte";
    import Shutdown from "./Shutdown.svelte";
    
    import IconArch from '$lib/icons/IconArch.svelte'
    import IconPower from '$lib/icons/IconPower.svelte'

    const check = (appName) => {
        for (let i = 0; i < $openedApps.length; i++) {
            if ($openedApps[i].id === appName) {
                return false;
            }
        }
    };

    const openApp = (App, Name) => {
        if ($openedApps.length === 0 || check(Name) !== false) {
            $openedApps = [...$openedApps, { id: Name, app: App }];
        } else {
            $openedApps = $openedApps.filter((item) => item.id !== Name);
        }
    };
</script>

<div class="panel flex items-center justify-between xl:flex-col
    h-8 w-[100dvw] xl:w-10 xl:h-[calc(100dvh-2rem)] px-4 xl:py-4 xl:ml-3
    fixed top-0 xl:top-1/2 xl:-translate-y-1/2
    xl:border border-gray-600
    backdrop-blur bg-[#000000a3] xl:rounded-lg text-white"
    in:fly={{ y: -50, delay: 300 }}>
        <button class="transition cursor-pointer"
        on:click={() => { openApp(Launcher, "Launcher"); }}>
            <IconArch />
        </button>

        <Date />

        <button on:click={() => { openApp(Shutdown, "Shutdown"); }}>
            <IconPower />
        </button>
</div>