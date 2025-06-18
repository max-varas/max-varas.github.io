document.addEventListener('DOMContentLoaded', function() {
    const langEnBtn = document.getElementById('EnglishButton');
    const langEsBtn = document.getElementById('SpanishButton');
    if (!langEnBtn||!langEsBtn) {
      console.warn("Language switcher buttons not found. No se han encontrado los botones de cambio de idioma.");
    }
  if (langEsBtn) {  
    let currentPath = window.location.pathname;
    const isEnglishPage = currentPath.startsWith('/en/');
    langEsBtn.addEventListener('click', function(e) {
      e.preventDefault();
      if (isEnglishPage) {
        const newPath = currentPath.replace('/en/', '/');
        window.location.href = window.location.origin + newPath;
      }
    });
  } else {
    langEnBtn.addEventListener('click', function(e){
      e.preventDefault();
      if (!isEnglishPage) {
        let newPath;
        if (currentPath === '/' || currentPath === '/index.html' || currentPath === 'index.html') {
          newPath = '/en/';
        } else {
          newPath = '/en' + currentPath;
        }
        console.log("Current Path:", currentPath);
        console.log("Calculated New Path:", newPath);
        const fullRedirectUrl = window.location.origin + newPath;
        console.log("Attempting to redirect to:", fullRedirectUrl);
        //window.location.href = window.location.origin + newPath;
      }
    });
  }
});
