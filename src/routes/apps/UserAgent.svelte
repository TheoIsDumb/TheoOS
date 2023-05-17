<script>
    import App from "../../lib/components/App.svelte";
    import Titlebar from "../../lib/components/Titlebar.svelte";

    let title = "userAgent"
</script>

<App>
    <div>
        <Titlebar {title}/>
        <span>your useragent is:</span>
        <span style:font-size=1.1rem>{navigator.userAgent}</span>
    </div>
</App>

<style>
    div {
        height: inherit;
        width: inherit;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        background-color: #131313;
    }
</style>