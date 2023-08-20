<script>
    import Titlebar from "$lib/components/Titlebar.svelte"
    import App from "$lib/components/App.svelte"

    let title = "AspectRatioCalc"

    let first = 0
    let second = 0
    let result = ""

    function frac(numerator,denominator){
	  let gcd = (a, b) => {
	    return b ? gcd(b, a%b) : a
	  }

	  gcd = gcd(numerator,denominator)
	  result = `${numerator/gcd}:${denominator/gcd}`
	}
</script>

<App height="20rem">
    <Titlebar {title} />

    <div class="content flex flex-col justify-center items-center px-4">
        <span>Input resolution:</span>

        <div class="flex gap-2">
            <input class="bg-transparent [outline:0] border-blue-500 border-2 p-1 text-center rounded w-1/2" type="text" name="first" id="first" bind:value={first}>
            <input class="bg-transparent [outline:0] border-blue-500 border-2 p-1 text-center rounded w-1/2" type="text" name="second" id="second" bind:value={second}>
        </div>

        <button class="bg-blue-500 rounded py-1 px-4" on:click={() => frac(first, second)}>Calculate</button>

        <span class="text-base font-semibold">{result}</span>
    </div>
</App>