chrome.runtime.onInstalled.addListener((details) => {
  if (details.reason !== "install" && details.reason !== "update") return;
  chrome.storage.local.set({
    searcher: "google",
    username: "User",
    background: undefined
  });
  console.log("Local storage is done.");
});

chrome.runtime.onStartup.addListener(() => {});
