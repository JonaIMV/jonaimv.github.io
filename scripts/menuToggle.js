

export function initMenuToggle() {
  const toggleButton = document.getElementById("menu-toggle");
  const navMenu = document.getElementById("nav-menu");

  if (!toggleButton || !navMenu) return;

  toggleButton.addEventListener("click", function () {
    // CAMBIO AQUÍ: Cambiamos "show" por "active" para coincidir con el CSS
    const isOpen = navMenu.classList.toggle("active");
    
    toggleButton.setAttribute("aria-expanded", isOpen);
  });
}
