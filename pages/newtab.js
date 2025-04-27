const routes = {
  yandex: "https://yandex.ru/search/?text={1}",
  google: "https://www.google.com/search?q={1}",
};

function search(service, value) {
  try {
    chrome.tabs.create({ url: routes[service].replace("{1}", value) });
  } catch (e) {
    alert("Error! " + e);
  }
}

const form = document.getElementById("search-form");

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const searcher = await chrome.storage.local
    .get(["searcher"])
    .then((r) => r.searcher);
  const value = form["search"].value;
  if (searcher === "system")
    chrome.search.query({ disposition: "NEW_TAB", text: value });
  else search(searcher, value);
});
