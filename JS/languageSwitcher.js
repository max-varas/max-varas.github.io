export function switchToEnglish() {
    console.log ("Switching to English");
    let currentPath = window.location.pathname;
    const isEnglishPage = currentPath.startsWith('/en/');
    if (!isEnglishPage) {
        let newPath;
        if (currentPath === '/' || currentPath === '/index.html' || currentPath === 'index.html') {
          newPath = '/en/index.html';
        } else {
          newPath = '/en' + currentPath;
        }
        console.log("Current Path:", currentPath);
        console.log("Calculated New Path:", newPath);
        const fullRedirectUrl = window.location.origin + newPath;
        console.log("Attempting to redirect to:", fullRedirectUrl);
        window.location.href = fullRedirectUrl;
    }
}
export function switchToSpanish() {
    console.log("Switching to Spanish");
    let currentPath = window.location.pathname;
    const isEnglishPage = currentPath.startsWith('/en/');
    if (isEnglishPage) {
        const newPath = currentPath.replace('/en/', '/');
        window.location.href = window.location.origin + newPath;
    }
}
