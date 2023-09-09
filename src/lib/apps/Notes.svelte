<script>
    import Titlebar from "$lib/components/Titlebar.svelte";
    import App from "$lib/components/App.svelte";

    let title = "Notes";
    let data = localStorage.getItem("data");

    const AppDetails = {
        height: "30rem",
        width: "35rem",
        inset: "1rem",
    };

    const save = () => {
        localStorage.setItem("data", data);
    };
</script>

<App {...AppDetails}>
    <Titlebar {title} />
    <div class="content flex flex-col items-center justify-center p-1 pt-11 gap-1 w-full">
        <textarea class="h-full w-full bg-transparent border-0 rounded-[inherit] text-white [outline:0] [scrollbar-width:thin]"
            bind:value={data} />
    </div>

    <button class="fixed top-2 right-2 text-white bg-[dodgerblue] rounded px-3 py-[0.2rem] text-sm transition duration-300 cursor-pointer hover:bg-[darkslateblue]"
        on:click={save}>Save</button>
</App>