<script>
    function handle(e) {
        e.target.parentNode.parentNode.parentNode.remove()
    }
</script>

<div class="titlebar">
    <div class="inner">
        <span>hehe</span>
        <button on:click={handle}>×</button>
    </div>
</div>

<style>
    div.titlebar {
        position: fixed;
        top: 0.4rem;
        width: 100%;
        display: flex;
        justify-content: center;
        cursor: default;
    }
    div.inner {
        width: 90%;
        display: flex;
        justify-content: space-between;
    }
    div.titlebar:active {
        cursor: grab;
    }
    button {
        all: unset;
        cursor: pointer;
    }
</style>