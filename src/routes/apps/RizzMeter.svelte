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

    <div class="content flex flex-jc flex-ac flex-dirc">
        <span id="num">{num}</span>

        <label for="name">Enter name:<br>
            <input type="text" for="name" bind:value={name}>
        </label>

        <button on:click={calc}>Find Rizz!</button>

        <sup>Hint: Enter Ram/Theo</sup>
    </div>
</App>

<style>
    div.content {
        gap: 0.5rem;
    }
    label {
        text-align: center;
    }
    input {
        outline: 0;
    }
    input:focus {
        border: 2px solid burlywood;
    }
    span#num {
        color: burlywood;
        font-size: 8rem;
        font-style: italic;
    }
    button {
        background-color: burlywood;
        color: white;
        border: 0;
        border-radius: 0.3rem;
        padding: 0.2rem 1.3rem;
        cursor: pointer;
    }
</style>