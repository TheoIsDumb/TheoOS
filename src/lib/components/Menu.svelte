<script>
    let apps = [
        { name: "Hello", id: "hello" },
        { name: "Hello", id: "hello" },
        { name: "Hello", id: "hello" },
        { name: "Hello", id: "hello" },
        { name: "Hello", id: "hello" },
        { name: "Hello", id: "hello" }
    ]
</script>

<ul>
    {#each apps as app}
        <li>{app}</li>
    {/each}
</ul>