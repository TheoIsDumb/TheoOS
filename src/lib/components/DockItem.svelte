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
    class="{bounce ? 'bounce' : ''} dock_item"
    on:click={() => {
      openApp(app.component, app.id);
      bouncefunc();
    }}
  >
    <Icon icon={app.icon} />
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
      <Icon icon={linkicon} />
    </a>
  </div>
{/if}

<style>
  div.dock_item {
    transition: all 0.3s;
  }
  div.dock_item:hover {
    transform: scale(1.2);
  }
  :global(div.dock_item svg) {
    height: 2rem;
    width: 2rem;
    color: white;
  }
  .bounce {
    animation: anim 0.5s ease-in-out;
  }
  @keyframes anim {
    0%,
    100% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(-2rem);
    }
  }
</style>
