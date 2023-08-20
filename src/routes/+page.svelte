<script>
    import { userName } from "$lib/store";
    import { goto } from '$app/navigation';

    function jao(e) {
        if ($userName !== "" && e.key === "Enter") {
            goto('/desktop');
        }
    } 
</script>

<div class="main fixed top-0 left-0 w-[100dvw] h-[100dvh] bg-zinc-950 text-white">
    <div class="test flex flex-col justify-center items-center gap-6 h-[inherit] w-[inherit] bg-[#000000b0]">
        <h1 class="text-3xl font-bold">what's your name?</h1>
        <input type="text"
        class="p-2 bg-transparent border-2 border-white rounded text-center [outline:0] text-white focus:border-blue-500 transition"
        bind:value={$userName}
        on:keypress={jao}
        autocomplete="off">

        <a href="/desktop"
            class="px-6 py-1 rounded text-2xl transition hover:bg-blue-400
            {$userName ? 'bg-blue-500' : 'pointer-events-none bg-zinc-700'}">
        Go!</a>
    </div>
</div>

<style>
  div.main { background: url("/wall/image.avif") fixed center / cover; }
</style>