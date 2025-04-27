const settings = document.getElementById("settings");

settings.addEventListener(
  "submit",
  (e) => (
    e.preventDefault(),
    console.log(settings["searcher"].value),
    chrome.storage.local.set({ searcher: settings["searcher"].value })
  )
);
