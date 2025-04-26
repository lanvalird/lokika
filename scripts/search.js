const routes = {
  yandex: "https://yandex.ru/search/?text={1}",
  google: "https://www.google.com/search?q={1}",
};

function search(service, value) {
  try {
    location.assign(routes[service].replace("{1}", value));
  } catch {
    alert("Error!");
  }
}

const form = document.getElementById("search-form");

form.addEventListener(
  "submit",
  (e) => (e.preventDefault(), search("yandex", form["search"].value))
);
