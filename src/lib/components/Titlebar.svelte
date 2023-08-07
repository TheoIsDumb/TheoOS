<script>
    import { openedApps } from "../store";

    export let title = "App";

    const closeApp = () => {
        $openedApps = $openedApps.filter((item) => item.id !== title);
    };
</script>

<div class="titlebar flex absolute top-1 w-full cursor-grab gap-2 pl-2">
    <button class="cursor-pointer transition hover:text-rose-500" on:click={closeApp}>✕</button>
    <span>{title}</span>
</div>