document.addEventListener('DOMContentLoaded', function() {
    const langEnBtn = document.getElementById('EnglishButton');
    const langEsBtn = document.getElementById('SpanishButton');
    if (!LangEnBtn||!LangEsBtn) {
      console.warn("Language switcher buttons not found. No se han encontrado los botones de cambio de idioma.");
      return;
    }
  let currentPath = window.location.pathname;
  const isEnglishPage = currentPath.startsWith('/en/');
  LangEsBtn.addEventListener('click', function(e) {
    e.preventDefault();
    if (isEnglishPage) {
      const newPath = currentPath.replace('/en/', '/');
      window.location.href = window.location.origin + newPath;
    }
  });
  LangEnBtn.addEventListener('click', function(e){
    e.preventDefault();
    if (!isEnglishPage) {
      let newPath;
      if (currentPath === '/' || currentPath === '/index.html' || currentPath === 'index.html') {
        newPath = '/en/';
      } else {
        newPath = '/en' + currentPath;
      }
      window.location.href = window.location.origin + newPath;
    }
  });
});
