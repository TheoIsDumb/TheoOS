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
  <div class="content flex flex-jc flex-ac flex-dirc">
    <input type="text" value={url} on:keypress={setURL} />
    <iframe src={url} title={url} />
  </div>
</App>

<style>
  div.content {
    padding: 45px 0.2rem 0.2rem 0.2rem;
    gap: 0.2rem;
    width: 100%;
  }
  input,
  iframe {
    width: 100%;
  }
  input {
    height: 5%;
    background: transparent;
    border: 1px solid dodgerblue;
    color: white;
    padding: 0.2rem;
  }
  iframe {
    border: 0;
    height: 95%;
  }
</style>
