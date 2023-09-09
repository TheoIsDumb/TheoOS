<script>
    import { fade } from 'svelte/transition';
    import { openedApps } from "../store";
    import IconPleadingFace from '$lib/icons/IconPleadingFace.svelte'

    export let title = "Shutdown";

    const closeApp = () => {
        $openedApps = $openedApps.filter((item) => item.id !== title);
    }
</script>

<div class="fixed top-0 left-0 w-[100dvw] h-[100dvh] gap-4 z-[10] backdrop-blur bg-[#04040480] text-white flex flex-col justify-center items-center" transition:fade>
        <div class="italic">anganeyang poyaalo</div>

        <IconPleadingFace />

        <button class="px-5 py-1 text-black bg-white cursor-pointer rounded transition duration-300 hover:bg-blue-500 hover:text-white"
            on:click={closeApp}>I won't go</button>
</div>