<script>
    import { fade } from 'svelte/transition';
    import Hello from "/src/routes/apps/Hello.svelte";
    import UserAgent from "/src/routes/apps/UserAgent.svelte";

    let apps = [
        {id: "Hello", component: Hello},
        {id: "UserAgent", component: UserAgent}
    ]

</script>

<div class="menu" transition:fade>
    <ul>
        {#each apps as app}
            <li>{app.id}</li>
        {/each}
    </ul>
</div>

<style>
    div {
        position: fixed;
        top: 2.3rem;
        left: 1rem;
        height: 20rem;
        width: 10rem;
        background: #100f0f61;
        backdrop-filter: blur(10px);
        color: white;
        border-radius: 0.3rem;
        overflow: scroll;
        padding: 0.2rem;
    }
    ul {
        list-style: none;
        margin: 0;
        padding: 0;
    }
    li {
        padding:0.2rem 0.3rem;
        border: 1px solid gray;
        margin-bottom: 0.2rem;
        display: flex;
        justify-content: center;
        cursor: pointer;
    }
</style>