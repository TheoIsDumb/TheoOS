<script>
  export let app = "";
  export let link = "";
  export let linkicon = "";

  import { openedApps } from "$lib/store";
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
    <Icon icon={app.icon} class="h-8 w-8"/>
  </div>
{/if}

<!-- svelte-ignore a11y-click-events-have-key-events -->
{#if link !== ""}
  <div
    class="{bounce ? 'bounce' : ''} dock_item"
    on:click={() => {
      bouncefunc();
    }}
  >
    <a href={link} target="_blank">
      <Icon icon={linkicon} class="h-8 w-8 text-white"/>
    </a>
  </div>
{/if}

<style>
  .bounce { animation: anim 0.5s ease-in-out; }
  @keyframes anim {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(-2rem); }
  }
</style>