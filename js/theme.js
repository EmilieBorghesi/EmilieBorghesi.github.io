document.documentElement.classList.add("js");

if (localStorage.getItem("theme") === "dark") {
  document.documentElement.dataset.theme = "dark";
}
