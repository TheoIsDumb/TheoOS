<script>
    let date;

    setInterval(() => {
        date = new Date().toLocaleString('en-US', {hour12: false})
    }, 1000);
</script>

<span>{date}</span>