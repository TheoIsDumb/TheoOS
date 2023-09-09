<script>
  export let app = "";

  import { openedApps } from "$lib/store";

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
      console.log("already opened");
    }
  };

  let bounce = false;

  function bouncefunc() {
    bounce = true;
    setTimeout(() => {
      bounce = false;
    }, 750);
  }
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
{#if app !== ""}
  <div
    class="{bounce ? 'bounce' : ''} dock_item transition duration-300 hover:scale-125"
    on:click={() => {
      openApp(app.component, app.id);
      bouncefunc();
    }}
  >
    <svelte:component this={app.icon} />
  </div>
{/if}

<style>
  .bounce { animation: anim 0.5s ease-in-out; }
  @keyframes anim {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(-2rem); }
  }
</style>