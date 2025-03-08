document.addEventListener('DOMContentLoaded', function() {
    const sections = document.querySelectorAll('section');
    const sweepEffect = document.querySelector('.sweep-effect');
    let currentSection = 0;
    let isScrolling = false;
    let startY = 0;
    let timeout;

    // Détecter le début du défilement
    document.addEventListener('wheel', handleScroll);
    document.addEventListener('touchstart', handleTouchStart, { passive: true });
    document.addEventListener('touchmove', handleTouchMove, { passive: false });

    function handleScroll(e) {
        if (isScrolling) return;
        
        const direction = e.deltaY > 0 ? 1 : -1;
        triggerSweepEffect(direction);
    }

    function handleTouchStart(e) {
        startY = e.touches[0].clientY;
    }

    function handleTouchMove(e) {
        if (isScrolling) return;
        
        const currentY = e.touches[0].clientY;
        const direction = startY > currentY ? 1 : -1;
        
        // Vérifier si le défilement est suffisant pour déclencher l'effet
        if (Math.abs(startY - currentY) > 50) {
            triggerSweepEffect(direction);
            startY = currentY;
        }
    }

    function triggerSweepEffect(direction) {
        const nextSection = currentSection + direction;
        
        // Vérifier si la section suivante existe
        if (nextSection >= 0 && nextSection < sections.length) {
            isScrolling = true;
            
            // Obtenir la couleur de fond de la section suivante pour l'effet
            const nextSectionBg = getComputedStyle(sections[nextSection]).backgroundImage;
            sweepEffect.style.backgroundImage = nextSectionBg;
            
            // Appliquer l'effet de balayage
            sweepEffect.classList.add('active');
            
            // Après une courte période, déplacer vers la section suivante
            setTimeout(() => {
                sections[nextSection].scrollIntoView({ behavior: 'auto' });
                currentSection = nextSection;
                
                // Compléter l'animation
                sweepEffect.classList.add('hide');
                
                // Réinitialiser l'effet
                setTimeout(() => {
                    sweepEffect.classList.remove('active', 'hide');
                    isScrolling = false;
                }, 500);
            }, 400);
        }
    }
    
    // Assurer que la première section est visible au chargement
    sections[0].scrollIntoView({ behavior: 'auto' });
});

function enterJoinz() {
    alert("Bienvenue dans Joinz!");
}