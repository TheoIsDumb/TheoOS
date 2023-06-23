<script>
    import strftime from 'strftime';
    let date = strftime("%Y %B %d %A %T");

    setInterval(() => {
        date = strftime("%Y %B %d %A %T");
    }, 1000);
</script>

<span style:font-weight=600>{date}</span>

<style>
    span {
        cursor:default;
    }
    @media (max-width: 1000px) {
        span {
            font-size: 0.8rem;
        }
    }
</style>