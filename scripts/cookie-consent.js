const BANNER_ID = 'cookie-banner';
const STORAGE_KEY = 'tucasa_cookies_accepted';

/**
 * Verifica si el usuario ya aceptó las cookies.
 * @returns {boolean}
 */
function hasAcceptedCookies() {
    return localStorage.getItem(STORAGE_KEY) === 'true';
}

/**
 * Muestra el banner de consentimiento.
 */
function showBanner() {
    const banner = document.getElementById(BANNER_ID);
    if (banner) {
        banner.style.display = 'flex';
    }
}

/**
 * Oculta el banner y establece el consentimiento en localStorage.
 */
function acceptCookies() {
    localStorage.setItem(STORAGE_KEY, 'true');
    const banner = document.getElementById(BANNER_ID);
    if (banner) {
        banner.style.display = 'none';
    }
}

/**
 * Inicializa la lógica del banner de cookies.
 */
export function initCookieConsent() {
    if (!hasAcceptedCookies()) {
        showBanner();
    }

    // Agrega el listener al botón de aceptar
    const acceptBtn = document.getElementById('accept-cookies-btn');
    if (acceptBtn) {
        acceptBtn.addEventListener('click', acceptCookies);
    }
}