<script>
    import Titlebar from "$lib/components/Titlebar.svelte";
    import App from "$lib/components/App.svelte";
    import Icon from "@iconify/svelte";

    let title = "Music";

    let paused = true;
    let currentTime = 0;
    let duration = 0;

    function format(time) {
        if (isNaN(time)) return "...";

        const minutes = Math.floor(time / 60);
        const seconds = Math.floor(time % 60);

        return `${minutes}:${seconds < 10 ? `0${seconds}` : seconds}`;
    }

    const AppDetails = {
        backgroundColor: "white",
        color: "black",
        height: "29rem",
        width: "23rem",
    };
</script>

<App {...AppDetails}>
    <Titlebar {title} />

    <div class="content">
        <div class="img w-full h-4/5 bg-cover" />
        <audio
            src="/divewithme.mp3"
            bind:currentTime
            bind:paused
            bind:duration
        />

        <div class="flex items-center flex-col fixed bottom-1 w-full bg-white">
            <div class="info flex flex-col text-center">
                <span class="title font-semibold text-base">Dive With Me</span>
                <span class="artist text-sm">Ramgopal Harikrishnan</span>
            </div>

            <div class="progress_time flex items-center w-full gap-2 px-2">
                <span class="text-sm">{format(currentTime)}</span>

                <div class="progress flex items-center w-full bg-[gainsboro] rounded h-1">
                    <div
                        class="progessbar rounded bg-blue-500"
                        style="--progress: {currentTime / duration}%"
                    />
                </div>

                <span class="text-sm">{format(duration)}</span>
            </div>

            <div class="buttons flex">
                <button class="text-blue-500"
                    on:click={() => paused = !paused } >
                    {#if paused}
                        <Icon class="h-8 w-8" icon="fluent:play-32-regular" />
                    {:else}
                        <Icon class="h-8 w-8" icon="fluent:pause-32-regular" />
                    {/if}
                </button>

                <a class="text-blue-500"
                    href="https://youtube.com/watch?v=DPgFHYyHNa8"
                    target="_blank"
                >
                    <Icon class="h-8 w-8" icon="fluent:open-32-regular" />
                </a>
            </div>
        </div>
    </div>
</App>

<style>
    div.img { background: url("/divewithme.avif"); }
    .progessbar { width: calc(100 * var(--progress)); }
</style>