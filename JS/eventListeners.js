import { switchToEnglish, switchToSpanish } from './languageSwitcher.js';
export function setupNavbarListeners() {
    const stableParent = document.getElementById('app-header');

     if (stableParent) {
         stableParent.addEventListener('click', function(event) {
            const clickedElement = event.target;
            const action = clickedElement.dataset.action;

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
