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
        height: "25rem",
        width: "25rem",
    };
</script>

<App {...AppDetails}>
    <Titlebar {title} />

    <div class="content flex flex-col justify-center items-center gap-2">
        <div class="num flex justify-center items-center text-[7rem] h-full w-full italic text-blue-500 cursor-default">
            {first && last ? Math.round($diff) : 0}
        </div>

        <div class="input flex justify-between w-full fixed bottom-0 left-0 px-2 mb-2">
            <input class="[outline:0] border-zinc-500 border bg-transparent rounded focus:border-blue-500" type="date" bind:value={first} />
            <input class="[outline:0] border-zinc-500 border bg-transparent rounded focus:border-blue-500" type="date" bind:value={last} />
        </div>
    </div>
</App>