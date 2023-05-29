<script>
    let innerWidth;
</script>

<svelte:window bind:innerWidth/>

    {#if innerWidth <= 768}
        <div class="fullscreen dark flex flex-jc flex-ac flex-dirc">
            <span>
            access<br>on<br>a<br>computer<br>for<br>the<br>best<br>experience.
            </span>
        </div>
    {:else}
        <slot />
    {/if}

<style>
    div span {
        font-weight: bold;
        line-height: 1rem;
    }
</style>
