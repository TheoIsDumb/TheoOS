<script>
    import Titlebar from "$lib/components/Titlebar.svelte";
    import App from "$lib/components/App.svelte";

    let title = "RizzMeter"
    let num = 0;
    let name = "";

    const calc = () => {
        const query = name.toLowerCase()
        if (query === "ram" || query === "ramgopal") {
            num = '∞'
        } else if (query === "theo") {
            num = "💀"
        } else if (query === "vivek") {
            num = "👑🗿"
        } else {
            num = Math.round(Math.random() * 100)
        }
    }

    const AppDetails = {
        height: "25rem",
        width: "20rem"
    }
</script>

<App {...AppDetails}>
    <Titlebar {title}/>

    <div class="content flex flex-col justify-center items-center gap-4">
        <span class="text-blue-500 text-9xl font-semibold">{num}</span>

        <label for="name" class="text-center">Enter name:<br>
            <input class="[outline:0] border transition duration-300 text-center bg-transparent border-zinc-300 focus:border-blue-500 rounded p-1"
             type="text" for="name" bind:value={name}
             on:keypress={(e) => {
                if (e.key === "Enter" && name !== "") {
                    calc()
                }
             } }
             >
        </label>

        <button class="bg-blue-500 text-white border-0 rounded px-5 py-1 cursor-pointer"
            on:click={calc}>Find Rizz!</button>

        <sub>Hint: Enter Vivek/Ram/Theo</sub>
    </div>
</App>
