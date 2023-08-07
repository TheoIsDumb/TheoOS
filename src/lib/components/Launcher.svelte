<script>
  import { fade } from "svelte/transition";
  import { openedApps, apps, userName } from "$lib/store";
  import LauncherItem from "./LauncherItem.svelte";

  const closeLauncher = () => {
    $openedApps = $openedApps.filter((item) => item.id !== "Launcher");
  };
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<div
  class="fixed top-0 left-0 w-[100dvw] h-[100dvh] gap-4 z-[10] flex flex-col justify-center items-center backdrop-blur bg-[#04040480] text-white"
  transition:fade
  on:click|capture|self={closeLauncher}
>
  <div class="inner flex flex-col h-[100dvh] my-4 gap-4 overflow-auto [scrollbar-width:thin] relative">
    <span class="text-center text-4xl font-semibold">{$userName ? `welcome, ${$userName}!` : "welcome!"}</span>

    <div class="apps grid grid-cols-2 xl:grid-cols-4">
      {#each $apps as app}
        <LauncherItem {app} />
      {/each}
    </div>

    <button on:click={closeLauncher}
    class="close absolute bottom-4 right-4 text-2xl cursor-pointer hover:scale-110">✕</button>
  </div>
</div>