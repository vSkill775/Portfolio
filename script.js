document.addEventListener('DOMContentLoaded', function() {
    // Sélectionnez tous les éléments de menu ayant des sous-menus
    const menuItems = document.querySelectorAll('.navbar nav ul li');
    
    // Parcourez tous les éléments de menu
    menuItems.forEach((menuItem) => {
    // Sélectionnez le sous-menu correspondant
    const subMenu = menuItem.querySelector('.sous-menu');
    
    // Si le sous-menu existe
    if (subMenu) {
    // Afficher le sous-menu lorsque le survol de l'élément de menu
    menuItem.addEventListener('mouseover', () => {
    subMenu.style.display = 'block';
    });
    
    // Masquer le sous-menu lorsque le curseur quitte l'élément de menu
    menuItem.addEventListener('mouseout', () => {
    subMenu.style.display = 'none';
    });
    }
    });
    });