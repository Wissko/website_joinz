document.addEventListener('DOMContentLoaded', function() {
    const sections = document.querySelectorAll('section');
    let currentSection = 0;
    let currentParticleClass = 'hero'; // Classe par défaut pour la première section

    // Fonction pour gérer la visibilité du texte
    function updateTextVisibility() {
        sections.forEach((section, index) => {
            const textContainer = section.querySelector('.text-container');
            if (textContainer) {
                if (index === currentSection) {
                    textContainer.classList.add('visible');
                } else {
                    textContainer.classList.remove('visible');
                }
            }
        });
    }

    // Observer pour détecter quelle section est visible
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const sectionIndex = Array.from(sections).indexOf(entry.target);
                currentSection = sectionIndex;
                updateTextVisibility();

                // Ajouter l'effet de balayage au mockup de la section visible
                const phoneMockup = entry.target.querySelector('.phone-mockup');
                if (phoneMockup) {
                    phoneMockup.classList.add('swipe-in');
                }

                // Mettre à jour la classe des particules en fonction de la section visible
                if (entry.target.classList.contains('hero-section')) {
                    currentParticleClass = 'hero';
                } else if (entry.target.classList.contains('find-friends-section')) {
                    currentParticleClass = 'find-friends';
                } else if (entry.target.classList.contains('find-events-section')) {
                    currentParticleClass = 'find-events';
                } else if (entry.target.classList.contains('create-events-section')) {
                    currentParticleClass = 'create-events';
                } else if (entry.target.classList.contains('discover-places-section')) {
                    currentParticleClass = 'discover-places';
                } else if (entry.target.classList.contains('download-section')) {
                    currentParticleClass = 'download';
                }
            } else {
                // Retirer la classe swipe-in quand la section n'est plus visible (optionnel)
                const phoneMockup = entry.target.querySelector('.phone-mockup');
                if (phoneMockup) {
                    phoneMockup.classList.remove('swipe-in');
                }
            }
        });
    }, {
        threshold: 0.5 // Déclenche quand 50% de la section est visible
    });

    // Observer toutes les sections
    sections.forEach(section => {
        observer.observe(section);
    });

    // Effet de particules au mouvement de la souris
    document.addEventListener('mousemove', (e) => {
        const particle = document.createElement('div');
        particle.className = `magic-particle ${currentParticleClass}`; // Ajouter la classe correspondant à la section
        particle.style.left = `${e.pageX}px`;
        particle.style.top = `${e.pageY}px`;
        document.body.appendChild(particle);
        setTimeout(() => particle.remove(), 1000);
    });

    // Initialiser la première section
    sections[0].scrollIntoView({ behavior: 'auto' });
    updateTextVisibility();
});

function enterJoinz() {
    alert("Bienvenue dans l'univers magique de Joinz!");
}

// Fonction pour afficher le message de beta test
function showBetaMessage() {
    alert("Le beta test est bientôt disponible !");
}