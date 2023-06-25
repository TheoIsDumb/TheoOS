<script>
    import Titlebar from "$lib/components/Titlebar.svelte";
    import App from "$lib/components/App.svelte";
    import { tweened } from "svelte/motion";

    let title = "DateCalc";

    let first = 0;
    let last = 0;
    let diffmilli = 0;

    let diff = tweened(0);

    $: {
        if (first != 0 && last != 0) {
            diffmilli =
                Math.abs(new Date(first) - new Date(last)) /
                (1000 * 60 * 60 * 24);
            $diff = diffmilli;
        }
    }

    const AppDetails = {
        backgroundColor: "white",
        color: "black",
        height: "25rem",
        width: "25rem",
    };
</script>

<App {...AppDetails}>
    <Titlebar {title} />

    <div class="content flex flex-jc flex-ac flex-dirc">
        <div class="num flex flex-jc flex-ac">
            {first && last ? Math.round($diff) : 0}
        </div>

        <div class="input flex flex-jc">
            <div class="input-wrapper flex flex-ac">
                <input type="date" bind:value={first} />
                <input type="date" bind:value={last} />
            </div>
        </div>
    </div>
</App>

<style>
    div.content {
        gap: 0.5rem;
    }
    input {
        outline: 0;
    }
    input:focus {
        border: 2px solid burlywood;
    }
    div.input {
        width: 100%;
        position: fixed;
        bottom: 0;
        left: 0;
    }
    div.input-wrapper {
        width: 96%;
        justify-content: space-between;
        padding: 0.5rem;
    }
    div.num {
        font-size: 7rem;
        height: 100%;
        width: 100%;
        font-style: italic;
        color: burlywood;
    }
</style>
