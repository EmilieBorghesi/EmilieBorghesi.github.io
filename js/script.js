const root = document.documentElement;

const themeToggle = document.querySelector(".theme-toggle");

function applyTheme(theme) {
  root.dataset.theme = theme;
  localStorage.setItem("theme", theme);
  themeToggle.setAttribute(
    "aria-label",
    theme === "dark" ? "Passer au thème clair" : "Passer au thème nuit"
  );
}

if (themeToggle) {
  applyTheme(root.dataset.theme === "dark" ? "dark" : "light");

  themeToggle.addEventListener("click", function () {
    applyTheme(root.dataset.theme === "dark" ? "light" : "dark");
  });
}

const nav = document.querySelector(".nav");
const navToggle = document.querySelector(".nav-toggle");

if (nav && navToggle) {
  navToggle.addEventListener("click", function () {
    const isOpen = nav.classList.toggle("nav--open");
    navToggle.setAttribute("aria-expanded", isOpen);
    navToggle.setAttribute("aria-label", isOpen ? "Fermer le menu" : "Ouvrir le menu");
  });
}

const filterButtons = document.querySelectorAll(".filters__button");
const projects = document.querySelectorAll(".project");

filterButtons.forEach(function (button) {
  button.addEventListener("click", function () {
    const category = button.dataset.filter;

    filterButtons.forEach(function (other) {
      other.setAttribute("aria-pressed", other === button);
    });

    projects.forEach(function (project) {
      const isVisible = category === "tous" || project.dataset.category === category;
      project.hidden = !isVisible;
    });
  });
});

const form = document.querySelector(".form");

if (form) {
  form.addEventListener("submit", function (event) {
    event.preventDefault();

    const name = form.elements.nom.value;
    const email = form.elements.email.value;
    const message = form.elements.message.value;

    const subject = "Message de " + name + " (portfolio)";
    const body = message + "\n\n" + name + "\n" + email;

    window.location.href =
      form.action + "?subject=" + encodeURIComponent(subject) + "&body=" + encodeURIComponent(body);
  });
}
