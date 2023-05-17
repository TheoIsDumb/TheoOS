<script>
    import Hello from '/src/routes/apps/Hello.svelte';

    import Icon from "@iconify/svelte";
    let date;

    export let openedApps;

    setInterval(() => {
        date = new Date().toLocaleString('en-US', {hour12: false})
    }, 1000);
</script>

<div class="taskbar">
    <div class="inner-container">
        <button on:click={() => {openedApps = [...openedApps, Hello]}}>
            <Icon icon="cib:arch-linux"/>
        </button>

        <span>{date}</span>

        <Icon icon="icons8:shutdown"/>
    </div>
</div>

<style>
    div.taskbar {
        background-color: #100f0f61;
        height: 1.8rem;
        width: 100dvw;
        position: fixed;
        top: 0;
        backdrop-filter: blur(10px);
        color: white;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    div.inner-container {
        width: 96%;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    button {
        all: unset;
    }
</style>