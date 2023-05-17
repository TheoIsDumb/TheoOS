<script>
    import { fade } from 'svelte/transition';

    function exit(e) {
        console.log(e.target.parentNode.remove())
    }
</script>

<div class="shutdown" transition:fade>
    <div class="text" style:text-align=center>
        <div>we don't want you to go.</div>
        <div style:font-weight=bold>for real.</div>
    </div>

    <img src="plead.png" alt="plead">

    <button on:click={exit}>I won't go</button>
</div>

<style>
    div.shutdown {
        position: fixed;
        top: 0;
        left: 0;
        height: 100dvh;
        width: 100dvw;
        background-color: rgba(4, 4, 4, 0.584);
        color: white;
        backdrop-filter: blur(10px);
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        gap: 1rem;
    }

    img {
        height: 20rem;
    }

    button {
        all: unset;
        border: 2px solid white;
        padding: 0.3rem 1.3rem;
        border-radius: 0.2rem;
        cursor: pointer;
        transition: all 0.4s;
    }
    button:hover {
        background: white;
        color: #1a1a1a;
    }
</style>