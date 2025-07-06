import { switchToEnglish, switchToSpanish } from './languageSwitcher.js';
export function setupNavbarListeners() {
    const stableParent = document.getElementById('app-header');

     if (stableParent) {
         stableParent.addEventListener('click', function(event) {
            const clickedElement = event.target;
            const action = clickedElement.dataset.action;

            if (action === 'switch-lang-en') {
                event.preventDefault();
                console.log("Click!");
                switchToEnglish();
                return;
            }
            if (action === 'switch-lang-es') {
                event.preventDefault();
                console.log("click");
                switchToSpanish();
                return;
            }
          });
     }  
}
