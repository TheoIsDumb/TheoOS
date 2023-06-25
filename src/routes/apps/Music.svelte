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
        <div class="img" />
        <audio
            src="/divewithme.mp3"
            bind:currentTime
            bind:paused
            bind:duration
        />

        <div id="box" class="flex flex-dirc flex-ac">
            <div class="info flex flex-dirc">
                <span id="title">Dive With Me</span>
                <span id="artist">Ramgopal Harikrishnan</span>
            </div>

            <div class="progress_time flex flex-ac">
                <span>{format(currentTime)}</span>

                <div class="progress flex flex-ac">
                    <div
                        class="progessbar"
                        style="--progress: {currentTime / duration}%"
                    />
                </div>

                <span>{format(duration)}</span>
            </div>

            <div class="buttons">
                <button
                    on:click={() => {
                        paused = !paused;
                    }}
                >
                    {#if paused}
                        <Icon icon="fluent:play-32-regular" />
                    {:else}
                        <Icon icon="fluent:pause-32-regular" />
                    {/if}
                </button>

                <a
                    href="https://youtube.com/watch?v=DPgFHYyHNa8"
                    target="_blank"
                >
                    <Icon icon="fluent:open-32-regular" />
                </a>
            </div>
        </div>
    </div>
</App>

<style>
    div.img {
        width: 100%;
        height: 80%;
        background: url("/divewithme.avif");
        background-size: cover;
    }
    div#box {
        position: fixed;
        bottom: 0.3rem;
        width: 100%;
        background-color: white;
    }
    .progress_time {
        width: 100%;
        gap: 0.5rem;
        padding: 0 0.5rem;
    }
    .progress_time span {
        font-size: 0.7rem;
    }
    div.info {
        text-align: center;
    }
    span#title {
        font-weight: 600;
        font-size: 1rem;
    }
    span#artist {
        font-size: 0.7rem;
    }
    .progress {
        width: 100%;
        background-color: gainsboro;
        border-radius: 0.3rem;
        height: 0.3rem;
    }
    .progessbar {
        width: calc(100 * var(--progress));
        height: inherit;
        border-radius: inherit;
        background-color: dodgerblue;
    }
    button,
    a {
        all: unset;
        color: dodgerblue;
    }
    div.buttons :global(svg) {
        height: 2rem;
        width: 2rem;
    }
</style>
