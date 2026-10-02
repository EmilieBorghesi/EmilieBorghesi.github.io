# Portfolio d'Emilie Borghesi

Site statique en HTML, CSS et un peu de JavaScript. Aucune installation : il suffit d'ouvrir `index.html` dans un navigateur.

## Les fichiers

| Fichier | Rôle |
|---|---|
| `index.html` | Accueil |
| `projets.html` | Les trois projets (sujet, démarche, résultat) |
| `a-propos.html` | Présentation, outils, parcours |
| `contact.html` | E-mail, réseaux, formulaire |
| `mentions-legales.html` | Mentions légales |
| `css/style.css` | Toute la mise en forme (classes en BEM, sommaire en haut du fichier) |
| `js/script.js` | Menu sur téléphone, filtres des projets, formulaire |
| `images/` | Visuels des projets et petits décors (nuage, fleur, flèches) |
| `cv-emilie-borghesi.pdf` | Le CV proposé au téléchargement |

L'en-tête et le pied de page sont identiques sur toutes les pages : une modification dans l'un doit être recopiée dans les autres.

## Modifier le site

- **Changer une couleur ou une police** : les variables sont en haut de `css/style.css`.
- **Mettre une vraie photo** : remplace `images/sticker-1.jpg` dans `index.html` et `a-propos.html` (un commentaire indique l'endroit).
- **Ajouter un projet** : copie un bloc `<article class="project">` dans `projets.html` et une carte `<article class="project-card">` dans `index.html`.
- **Mettre à jour le CV** : remplace `cv-emilie-borghesi.pdf` en gardant le même nom.

## Mettre en ligne avec GitHub Pages

1. Sur GitHub, crée un dépôt **public** nommé exactement `EmilieBorghesi.github.io`, sans README.
2. Dans un terminal, depuis ce dossier :

   ```bash
   git init -b main
   git add .
   git commit -m "Première version du portfolio"
   git remote add origin https://github.com/EmilieBorghesi/EmilieBorghesi.github.io.git
   git push -u origin main
   ```

3. Sur GitHub : **Settings → Pages**, source « Deploy from a branch », branche `main`, dossier `/ (root)`.
4. Une à deux minutes plus tard, le site est en ligne sur <https://emilieborghesi.github.io>.

Ensuite, chaque `git push` met le site à jour.

## À vérifier après la mise en ligne

- Les liens vers LinkedIn, Behance, GitHub et Instagram.
- Le validateur W3C : <https://validator.w3.org/nu/> (colle l'adresse de chaque page).
- Lighthouse, dans les outils de développement de Chrome, pour l'accessibilité et la vitesse.
