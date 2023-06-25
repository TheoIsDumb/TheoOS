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

<span style:font-weight="600">{date}</span>

<style>
    span {
        cursor: default;
    }
    @media (max-width: 1000px) {
        span {
            font-size: 0.8rem;
        }
    }
</style>
