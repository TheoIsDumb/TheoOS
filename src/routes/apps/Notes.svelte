<script>
    import Titlebar from "$lib/components/Titlebar.svelte";
    import App from "$lib/components/App.svelte";

    let title = "Notes"
    let data = localStorage.getItem('data');

    const AppDetails = {
        height: "40rem",
        width: "35rem",
        inset: "1rem"
    }

    const save = () => {
        localStorage.setItem('data', data);
    }

    $: console.log(data)
</script>

<App {...AppDetails}>
    <Titlebar {title}/>
    <div class="content flex flex-jc flex-ac flex-dirc">
        <textarea bind:value={data}></textarea>
    </div>

    <button on:click={save}>Save</button>
</App>

<style>
    div.content {
        padding: 45px 0.2rem 0.2rem 0.2rem;
        gap: 0.2rem;
    }
    textarea {
        height: 100%;
        width: 100%;
        background-color: transparent;
        border: 1px solid gray;
        border-radius: inherit;
        color: white;
        outline: 0;
        scrollbar-width: thin;
    }
    button {
        all: unset;
        position: fixed;
        top: 0.5rem;
        right: 0.5rem;
        color: dodgerblue;
        border: 1px solid dodgerblue;
        border-radius: 0.3rem;
        padding: 0.2rem 0.8rem;
        font-size: 0.8rem;
        transition: all 0.3s;
    }
    button:hover {
        background-color: dodgerblue;
        color: white;
    }
</style>