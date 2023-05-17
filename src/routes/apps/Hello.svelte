<script>
    import App from "$lib/components/App.svelte";
    import Titlebar from "$lib/components/Titlebar.svelte";

    let title = "Hello"
</script>

<App>
    <Titlebar {title}/>
    <div>
        hello
    </div>
</App>

<style>
    div {
        height: inherit;
        width: inherit;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: #131313;
    }
</style>