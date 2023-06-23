<script>
  import { openedApps, apps } from "$lib/store";
  import Icon from '@iconify/svelte';

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
          closeLauncher()
      } else {
          console.log("already opened")
      }
  }
</script>

<div class="dock flex">
  {#each $apps as app}
    <!-- svelte-ignore a11y-click-events-have-key-events -->
    <div class="dock_item"
      on:click={() => openApp(app.component, app.id)}>
        <Icon icon={app.icon}/>
    </div>
  {/each}
</div>

<style>
  div.dock {
    position: fixed;
    bottom: 1rem;
    gap: 1rem;
    left: 50%;
    transform: translate(-50%);
    background-color: rgba(255, 255, 255, 0.196);
    backdrop-filter: blur(2px);
    padding: 0.5rem 1rem;
    border-radius: 0.3rem;
    overflow: auto;
  }
  div.dock_item {
    transition: all 0.3s;
  }
  div.dock_item:hover {
    transform: scale(1.2);
  }
  :global(div.dock_item svg) {
    height: 2rem;
    width: 2rem;
  }
</style>