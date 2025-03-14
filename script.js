document.addEventListener('DOMContentLoaded', function() {
    const sections = document.querySelectorAll('section');
    let currentSection = 0;
    let currentParticleClass = 'hero';

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

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const sectionIndex = Array.from(sections).indexOf(entry.target);
                currentSection = sectionIndex;
                updateTextVisibility();

                const phoneMockup = entry.target.querySelector('.phone-mockup');
                if (phoneMockup) {
                    phoneMockup.classList.add('swipe-in');
                }

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
                const phoneMockup = entry.target.querySelector('.phone-mockup');
                if (phoneMockup) {
                    phoneMockup.classList.remove('swipe-in');
                }
            }
        });
    }, {
        threshold: 0.5
    });

    sections.forEach(section => {
        observer.observe(section);
    });

    document.addEventListener('mousemove', (e) => {
        const particle = document.createElement('div');
        particle.className = `magic-particle ${currentParticleClass}`;
        particle.style.left = `${e.pageX}px`;
        particle.style.top = `${e.pageY}px`;
        document.body.appendChild(particle);
        setTimeout(() => particle.remove(), 1500); // Durée plus longue pour un effet doux
    });

    sections[0].scrollIntoView({ behavior: 'auto' });
    updateTextVisibility();
});

function enterJoinz() {
    alert("Bienvenue dans l'univers magique de Joinz!");
}

function showBetaMessage() {
    alert("Le beta test est bientôt disponible !");
}