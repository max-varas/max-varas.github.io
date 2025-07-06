import { switchToEnglish, switchToSpanish } from './languageSwitcher.js';
export function setupNavbarListeners() {
    const stableParent = document.getElementById('app-header');

     if (stableParent) {
         console.log("app header found")
         stableParent.addEventListener('click', function(event) {
             console.log("click")
            const clickedElement = event.target.closest('button[data-action]');
            const action = clickedElement.dataset.action;

            if (action === 'switch-lang-en') {
                event.preventDefault();
                console.log("switch click");
                switchToEnglish();
                return;
            }
            if (action === 'switch-lang-es') {
                event.preventDefault();
                console.log("switch click");
                switchToSpanish();
                return;
            }
          });
     }  
}
