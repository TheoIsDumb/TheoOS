<script>
    let date = new Date().toLocaleString("en-US", {
        dateStyle: "full",
        timeStyle: "medium",
        hour12: false,
    });

    setInterval(() => {
        date = new Date().toLocaleString("en-US", {
            dateStyle: "full",
            timeStyle: "medium",
            hour12: false,
        });
    }, 1000);
</script>

<span class="font-semibold cursor-default text-sm xl:text-base">{date}</span>