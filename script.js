document.addEventListener('DOMContentLoaded', function() {
    const sections = document.querySelectorAll('section');
    let currentSection = 0;

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
            }
        });
    }, {
        threshold: 0.5
    });

    // Observer toutes les sections
    sections.forEach(section => {
        observer.observe(section);
    });

    // Effet de particules au mouvement de la souris
    document.addEventListener('mousemove', (e) => {
        const particle = document.createElement('div');
        particle.className = 'magic-particle';
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

// Style des particules ajouté dynamiquement
const styleSheet = document.createElement('style');
styleSheet.textContent = `
    .magic-particle {
        position: absolute;
        width: 5px;
        height: 5px;
        background: radial-gradient(circle, rgba(156, 39, 176, 0.8), transparent);
        border-radius: 50%;
        pointer-events: none;
        animation: particleFade 1s ease-out forwards;
        z-index: 5;
    }
    @keyframes particleFade {
        0% { transform: scale(1); opacity: 1; }
        100% { transform: scale(2); opacity: 0; }
    }
`;
document.head.appendChild(styleSheet);