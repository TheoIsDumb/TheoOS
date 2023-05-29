<script>
    import { fade } from 'svelte/transition';
    import { openedApps, apps, userName } from "$lib/store";
    import LauncherItem from './LauncherItem.svelte';

    const closeLauncher = () => {
            $openedApps = $openedApps.filter((item) => item.id !== "Launcher");
    }
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<div
    class="fullscreen flex flex-jc flex-ac flex-dirc shutdown_blur"
    transition:fade
    on:click|capture|self={closeLauncher}
            >
    <div class="inner flex flex-dirc">
        <span>{$userName ? `welcome, ${$userName}!`: 'welcome!'}</span>

        <div class="apps">
        {#each $apps as app}
            <LauncherItem {app}/>
        {/each}
        </div>
    </div>
</div>

<style>
    div.inner {
        height: 100dvh;
        margin: 1rem 0;
        gap: 1rem;
        overflow: auto;
        scrollbar-width: thin;
        padding-right: 1.3rem;
    }
    span {
        text-align: center;
        font-size: 2rem;
        font-weight: 600;
    }
    div.apps {
        height: 90%;
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        grid-template-rows: repeat(6, 1fr);
        gap: 0.5rem;
    }
</style>