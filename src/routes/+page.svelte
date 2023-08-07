<script>
    import { userName } from "$lib/store";
    import { goto } from '$app/navigation';

    function jao(e) {
        if ($userName !== "" && e.key === "Enter") {
            goto('/desktop');
        }
    } 
</script>

<div class="fixed top-0 left-0 w-[100dvw] h-[100dvh] gap-6 z-[10] bg-zinc-950 text-white flex flex-col justify-center items-center">
        <h1 class="text-3xl font-bold">what's your name?</h1>
        <input type="text"
        class="p-2 bg-transparent border-2 border-white rounded [outline:0] text-white focus:border-blue-400 transition"
        bind:value={$userName}
        on:keypress={jao}
        autocomplete="off">

        <a href="/desktop"
            class="px-6 py-1 rounded text-2xl transition hover:bg-blue-400
            {$userName ? 'bg-blue-500' : 'pointer-events-none bg-zinc-700'}">
        Go!</a>
</div>