<script>
  import { fly } from "svelte/transition";
  import { apps } from "$lib/store";
  import DockItem from "./DockItem.svelte";
  import IconCode from "$lib/icons/IconCode.svelte";
  import IconGithub from "$lib/icons/IconGithub.svelte";
</script>

<div class="dock flex fixed bottom-0 gap-4 backdrop-blur py-2 px-4 overflow-auto bg-[#100f0f61] xl:border border-gray-600 w-[100dvw] md:bottom-4 md:left-1/2 md:w-auto md:translate-x-[-50%] md:rounded"
  in:fly={{ y: 50, delay: 300 }}>
  {#each $apps as app}
    <DockItem {app} />
  {/each}

  <a href="https://github.com/TheoIsDumb/TheoOS" target="_blank" noreferrer>
    <IconCode />
    </a>

  <a href="https://github.com/TheoIsDumb" target="_blank" noreferrer>
    <IconGithub />
    </a>
</div>