const root = document.documentElement;

const texts = {
  fr: {
    toDark: "Passer au thème nuit",
    toLight: "Passer au thème clair",
    openMenu: "Ouvrir le menu",
    closeMenu: "Fermer le menu",
    mailSubject: "Message de ",
    closeImage: "Fermer l'image",
    locale: "fr-FR",
  },
  en: {
    toDark: "Switch to night theme",
    toLight: "Switch to light theme",
    openMenu: "Open menu",
    closeMenu: "Close menu",
    mailSubject: "Message from ",
    closeImage: "Close image",
    locale: "en-GB",
  },
};

const text = texts[root.lang] || texts.fr;

const dateOptions = { day: "numeric", month: "long", year: "numeric" };

const themeToggle = document.querySelector(".theme-toggle");

function applyTheme(theme) {
  root.dataset.theme = theme;
  localStorage.setItem("theme", theme);
  themeToggle.setAttribute("aria-label", theme === "dark" ? text.toLight : text.toDark);
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
    navToggle.setAttribute("aria-label", isOpen ? text.closeMenu : text.openMenu);
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

    const subject = text.mailSubject + name + " (portfolio)";
    const body = message + "\n\n" + name + "\n" + email;

    window.location.href =
      form.action + "?subject=" + encodeURIComponent(subject) + "&body=" + encodeURIComponent(body);
  });
}

const updatedDate = document.querySelector(".footer__date");

if (updatedDate) {
  const modified = new Date(document.lastModified);
  updatedDate.dateTime = modified.toISOString().slice(0, 10);
  updatedDate.textContent = modified.toLocaleDateString(text.locale, dateOptions);
}

const galleryLinks = document.querySelectorAll(".gallery__link");

if (galleryLinks.length > 0) {
  const lightbox = document.createElement("dialog");
  const lightboxImage = document.createElement("img");
  const lightboxClose = document.createElement("button");

  lightbox.className = "lightbox";
  lightboxImage.className = "lightbox__image";
  lightboxClose.className = "lightbox__close";
  lightboxClose.type = "button";
  lightboxClose.textContent = "×";
  lightboxClose.setAttribute("aria-label", text.closeImage);

  lightbox.append(lightboxClose, lightboxImage);
  document.body.append(lightbox);

  galleryLinks.forEach(function (link) {
    link.addEventListener("click", function (event) {
      event.preventDefault();
      lightboxImage.src = link.href;
      lightboxImage.alt = link.querySelector("img").alt;
      lightbox.showModal();
    });
  });

  lightbox.addEventListener("click", function (event) {
    if (event.target === lightbox) {
      lightbox.close();
    }
  });

  lightboxClose.addEventListener("click", function () {
    lightbox.close();
  });
}
