<script>
    import Panel from "$lib/components/Panel.svelte";

    let openedApps = [];
    $: console.log(openedApps);
    $: console.log(openedApps[openedApps.length - 1]);
</script>

<Panel bind:openedApps/>

{#each openedApps as openedApp}
    <svelte:component this={openedApp}/>
{/each}