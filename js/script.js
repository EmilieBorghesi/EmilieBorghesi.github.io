/* Portfolio d'Emilie Borghesi — petits comportements du site.
   Le site reste lisible et utilisable si ce fichier ne se charge pas. */

/* 1. Menu sur téléphone : le bouton ouvre et ferme la liste des liens */
const nav = document.querySelector(".nav");
const navToggle = document.querySelector(".nav__toggle");

if (nav && navToggle) {
  navToggle.addEventListener("click", function () {
    const isOpen = nav.classList.toggle("nav--open");
    navToggle.setAttribute("aria-expanded", isOpen);
    navToggle.setAttribute("aria-label", isOpen ? "Fermer le menu" : "Ouvrir le menu");
  });
}

/* 2. Page Projets : les boutons de filtre affichent une catégorie à la fois */
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

/* 3. Page Contact : le formulaire prépare un e-mail dans la messagerie du visiteur.
   (GitHub Pages ne peut pas envoyer de message tout seul : pas de PHP.) */
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
