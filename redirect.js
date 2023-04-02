(async function () {
  const $ = document.querySelector.bind(document);
  const url = new URL(location);
  const { searchParams: params } = url;
  const query = params.get("q") || params.get("query") || $("input#q").value;
  console.log("!bA", query);
  if (query.indexOf("!") >= 0) {
    const apiParams = new URLSearchParams({
      q: query,
      format: "json",
      no_redirect: "1",
    });
    const resp = await fetch("https://duckduckgo.com/?" + apiParams);
    const json = await resp.json();
    const redirectUrl = json.Redirect;
    if (redirectUrl) location = redirectUrl;
  }
})();
