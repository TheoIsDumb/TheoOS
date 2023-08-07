<script>
    import { fly } from "svelte/transition";
    import { openedApps } from "../store";
    import Launcher from "./Launcher.svelte";
    import Date from "./Date.svelte";
    import Shutdown from "./Shutdown.svelte";

    import Icon from "@iconify/svelte";

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

<div class="panel flex items-center h-8 w-[100dvw] fixed top-0 backdrop-blur bg-[#100f0f61] text-white justify-between px-4"
    in:fly={{ y: -50, delay: 300 }}>
        <button class="transition cursor-pointer"
            on:click={() => {
                openApp(Launcher, "Launcher");
            }}
        >
            <Icon class="transition cursor-pointer glow" icon="ph:circle-bold"/>
        </button>

        <Date />

        <button
            on:click={() => {
                openApp(Shutdown, "Shutdown");
            }}
        >
            <Icon class="transition cursor-pointer glow" icon="ph:power-bold"/>
        </button>
</div>