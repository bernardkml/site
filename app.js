// Sélectionner les liens "Etude" et "Accueil"
var linkEtude = document.querySelector("a[href='study']");
var linkAccueil = document.querySelector("a[href='']");

// Ajouter un événement de survol sur le lien "Etude"
linkEtude.addEventListener("mouseover", function() {
  // Ajouter une classe CSS d'animation lorsque survolé
  this.classList.add("animation-class");
});

// Ajouter un événement de survol sur le lien "Accueil"
linkAccueil.addEventListener("mouseover", function() {
  // Ajouter une classe CSS d'animation lorsque survolé
  this.classList.add("animation-class");
});

// Supprimer la classe CSS d'animation lorsque le survol se termine
linkEtude.addEventListener("mouseout", function() {
  this.classList.remove("animation-class");
});

linkAccueil.addEventListener("mouseout", function() {
  this.classList.remove("animation-class");
});

// Sélectionnez les liens sur lesquels vous souhaitez ajouter l'effet de diapositives
const links = document.querySelectorAll('.slide-link');

// Parcourir tous les liens et ajouter un écouteur d'événement au clic
links.forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault(); // Empêche le comportement de lien par défaut

    // Récupérez la cible du lien (par exemple, l'ID d'un élément de diapositive)
    const targetId = link.getAttribute('href');

    // Faites défiler jusqu'à la cible en utilisant une transition CSS
    document.querySelector(targetId).scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  });
});

// Définir l'intervalle de défilement automatique (en millisecondes)
const interval = 5000;

// Fonction pour passer à la diapositive suivante
function nextSlide() {
  const currentSlide = document.querySelector('.slide.active');
  const nextSlide = currentSlide.nextElementSibling || document.querySelector('.slide:first-child');

  currentSlide.classList.remove('active');
  nextSlide.classList.add('active');
}

// Lancer le défilement automatique des diapositives
setInterval(nextSlide, interval);