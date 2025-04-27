const settings = document.getElementById("settings");

const welcome = document.getElementById("welcome");

async function getFromStorage(id) {
  return await chrome.storage.local.get([id]).then((r) => r[id]);
}

settings["username"].value = await getFromStorage("username");
settings["searcher"].value = await getFromStorage("searcher");

settings.addEventListener(
  "submit",
  (e) => (
    e.preventDefault(),
    chrome.storage.local.set({
      username: settings["username"].value,
      searcher: settings["searcher"].value,
    })
  )
);

const username = getFromStorage("username");
welcome.textContent = `Welcome, ${(await username) || "User"}!`;
