<script>
    import { openedApps } from "../store";

    export let title = "App";

    const closeApp = () => {
        $openedApps = $openedApps.filter((item) => item.id !== title);
    }
</script>

<div class="titlebar flex">
        <button on:click={closeApp}>✕</button>
        <span>{title}</span>
</div>

<style>
    div.titlebar {
        position: absolute;
        top: 0.4rem;
        width: 100%;
        justify-content: start;
        cursor: grab;
        gap: 0.5rem;
        padding-left: 0.5rem;
    }
    button {
        all: unset;
        cursor: pointer;
        transition: 0.5s;
    }
    button:hover {
        color: rgb(252, 105, 105);
    }
</style>