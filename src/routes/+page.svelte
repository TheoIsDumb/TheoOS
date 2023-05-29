<script>
    import { userName } from "../lib/store";
</script>

<div class="fullscreen dark flex flex-jc flex-ac flex-dirc">
        <h1>what's your name?</h1>
        <input type="text" bind:value={$userName} autocomplete="off">

        {#if $userName}
            <a href="/desktop">Go!</a>
        {:else}
            <a style:pointer-events=none style:background=darkgray href="/desktop">Go!</a>
        {/if}
</div>

<style>
    input {
        padding: 0.5rem;
        background-color: transparent;
        border: 2px solid white;
        border-radius: 0.3rem;
        outline: 0;
        color: white;
    }
    input:focus {
        border: 2px solid dodgerblue;
    }
    a {
        background: dodgerblue;
        text-decoration: none;
        color: white;
        padding: 0.5rem 1.5rem;
        border-radius: 0.3rem;
        font-size: 1.4rem;
        font-weight: normal;
    }
    a:hover {
        background: rgb(26, 129, 233);
    }
</style>
