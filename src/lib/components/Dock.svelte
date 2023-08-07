<script>
  import { fly } from "svelte/transition";
  import { apps } from "$lib/store";
  import DockItem from "./DockItem.svelte";
</script>

<div class="dock flex fixed gap-4 backdrop-blur py-2 px-4 overflow-auto bg-[#ffffff30] bottom-0 w-[100dvw] md:bottom-4 md:left-1/2 md:w-auto md:translate-x-[-50%] md:rounded"
  in:fly={{ y: 50, delay: 300 }}>
  {#each $apps as app}
    <DockItem {app} />
  {/each}

  <DockItem link="https://github.com/TheoIsDumb/TheoOS" linkicon="ph:code" />

  <DockItem
    link="https://github.com/TheoIsDumb"
    linkicon="simple-icons:github"
  />
</div>