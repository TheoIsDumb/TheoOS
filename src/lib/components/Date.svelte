<script>
    let time = new Date().toLocaleTimeString('en-US', { hour12: false }).replaceAll(':', ' ');

    setInterval(() => {
        time = new Date().toLocaleTimeString('en-US', { hour12: false }).replaceAll(':', ' ');
    })
</script>

<span class="cursor-default text-center">{time}</span>