<script>
    import Titlebar from "$lib/components/Titlebar.svelte";
    import App from "$lib/components/App.svelte";
    import Logo from "$lib/components/Logo.svelte";
    import Icon from "@iconify/svelte";

    let title = "About"
</script>

<App>
        <Titlebar {title}/>
        <div class="content flex flex-col items-center justify-center">
            <Logo/>

            <span class="text-3xl font-semibold">theoOS</span>
            <span class="text-center text-sm">(yes, i drew something random<br>and called it a logo hehe)</span>

            <a class="px-3 py-1 rounded bg-white text-black"
                href="https://github.com/TheoIsDumb/TheoOS" target="_blank" noreferrer>
                source code
            </a>

            <span class="text-base flex items-center">Made with Svelte.
                <Icon icon="vscode-icons:file-type-svelte"/>
            </span>
        </div>
</App>