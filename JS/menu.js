const menuButton = document.querySelector('.menu-button');
const menu = document.querySelector('.menu-navegacion');

menuButton.addEventListener('click', () => {
    menu.classList.toggle('menu-abierto');
});