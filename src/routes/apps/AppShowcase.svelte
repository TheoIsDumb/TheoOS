<script>
    import Hello from "./Hello.svelte";
    import UserAgent from "./UserAgent.svelte";
    export let openedApps;
</script>

<div class="apps">
    <h1>welcome to theoOS! (ewww)</h1>
    <h3>Apps</h3>
    <button on:click={() => {openedApps = [...openedApps, Hello]}}>Hello</button>
    <button on:click={() => {openedApps = [...openedApps, UserAgent]}}>UserAgent</button>
</div>

<style>
    .apps {
        background-color: #100f0f61;
        color: white;
        backdrop-filter: blur(10px);
        width: 20rem;
        height: 20rem;
        position: fixed;
        top: 10%;
        left: 50%;
        transform: translate(-50%, 50%);
        padding: 0.3rem;
        border-radius: 1.5rem;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        gap: 1rem;
        z-index: 0;
        text-align: center;
    }
    .apps button {
        all: unset;
        border: 1px solid white;
        padding: 0.3rem 0.8rem;
        cursor: pointer;
    }
    h1 {
        margin-bottom: 0;
    }
</style>