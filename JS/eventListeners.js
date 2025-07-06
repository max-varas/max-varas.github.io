export function setupNavbarListeners() {
    const stableParent = document.getElementById('app-header');

     if (stableParent) {
         stableParent.addEventListener('click', function(event) {
            const clickedElement = event.target;
            const action = clickedElement.dataset.action;

            const navLink = clickedElement.closest('a');
            if (navLink && navLink.closest('nav')) {
                event.preventDefault();
                const targetHref = navLink.getAttribute('href');
                console.log('Redirigiendo a ${targetHref}');
                return;
            }

            if (action === 'switch-lang-en') {
                event.preventDefault();
                switchToEnglish();
                return;
            }
            if (action === 'switch-lang-es') {
                event.preventDefault();
                switchToSpanish();
                return;
            }
          });
     }  
}
