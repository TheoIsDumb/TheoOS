<script>
    import Titlebar from "$lib/components/Titlebar.svelte";
    import App from "$lib/components/App.svelte";

    let title = "RizzMeter"
    let num = 0;
    let name;

    const calc = () => {
        const query = name.toLowerCase()
        if (query == "ram" || query === "ramgopal") {
            num = "∞";
        } else if (query == "theo") {
            num = "L"
        } else {
            num = Math.round(Math.random() * 100);
        }
    }

    const AppDetails = {
        backgroundColor: "white",
        color: "black",
        height: "25rem",
        width: "20rem"
    }
</script>

<App {...AppDetails}>
    <Titlebar {title}/>

    <div class="content flex flex-col justify-center items-center gap-2">
        <span class="text-[burlywood] text-9xl italic">{num}</span>

        <label for="name" class="text-center">Enter name:<br>
            <input class="[outline:0] border transition duration-300 border-zinc-700 focus:border-green-400 rounded" type="text" for="name" bind:value={name}>
        </label>

        <button class="bg-[burlywood] text-white border-0 rounded px-5 py-1 cursor-pointer"
            on:click={calc}>Find Rizz!</button>

        <sub>Hint: Enter Ram/Theo</sub>
    </div>
</App>