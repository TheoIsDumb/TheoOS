<script>
    import Titlebar from "$lib/components/Titlebar.svelte";
    import App from "$lib/components/App.svelte";
    import Logo from "$lib/components/Logo.svelte";
    import Icon from "@iconify/svelte";

    let title = "About"
</script>

<App>
        <Titlebar {title}/>
        <div class="content flex flex-ac flex-jc flex-dirc">
            <Logo/>

            <span id="title">theoOS</span>
            <span style:text-align=center style:font-size=0.8rem>(yes, i drew something random<br>
                and called it a logo hehe)</span>

            <a href="https://github.com/TheoIsDumb/TheoOS"
            target="_blank" noreferrer>
                source code
            </a>

            <span style:font-size=1rem>Made with Svelte.
                <Icon icon="vscode-icons:file-type-svelte"/>
            </span>
        </div>
</App>

<style>
    #title {
        font-size: 2rem;
        font-weight: 600;
    }
    
    a {
        text-decoration: none;
        color: black;
        background-color: white;
        padding: 0.3rem 0.8rem;
        border-radius: 0.3rem;
    }
</style>