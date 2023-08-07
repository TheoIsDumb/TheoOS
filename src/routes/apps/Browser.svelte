<script>
  import Titlebar from "$lib/components/Titlebar.svelte";
  import App from "$lib/components/App.svelte";

  let title = "Browser";

  let url = "https://vkdbois.xyz";
  let searchurl = "https://swisscows.com/en/web?query=";

  const setURL = (e) => {
    if (e.key === "Enter") {
      if (e.target.value.includes("https://")) {
        url = e.target.value;
      } else {
        url = searchurl + encodeURI(e.target.value);
      }
    }
  };

  const AppDetails = {
    height: "40rem",
    width: "60rem",
    inset: "1rem",
  };
</script>

<App {...AppDetails}>
  <Titlebar {title} />
  <div class="content flex flex-col justify-center items-center gap-1 w-full p-1 pt-9">
    <input class="w-full [outline:0] focus:border-2 h-[5%] bg-transparent border border-blue-500 text-white p-1" type="text" value={url} on:keypress={setURL} />
    <iframe class="w-full border-0 h-[95%]" src={url} title={url} />
  </div>
</App>