const menuToggle = document.getElementById('menu-toggle');
const navMenu = document.getElementById('nav-menu');
const socialIcons = document.querySelector('.header__social');

menuToggle.addEventListener('click', () => {
    menuToggle.classList.toggle('open');
    navMenu.classList.toggle('open');
});

document.addEventListener('click', (event) => {
    if (!menuToggle.contains(event.target) && !navMenu.contains(event.target) && !socialIcons.contains(event.target)) {
        menuToggle.classList.remove('open');
        navMenu.classList.remove('open');
    }
});