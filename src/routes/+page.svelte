<script>
    import Panel from "$lib/components/Panel.svelte";
    import App from "../lib/components/App.svelte";
    import AppShowcase from "./apps/AppShowcase.svelte";

    let openedApps = [];
    $: console.log(openedApps)
</script>

<Panel bind:openedApps/>

<AppShowcase bind:openedApps/>

{#each openedApps as openedApp}
    <svelte:component this={openedApp}/>
{/each}