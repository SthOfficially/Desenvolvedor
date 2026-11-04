// Funcionalidade do Menu Mobile
const btnMobile = document.getElementById('mobile-btn');
const navMenu = document.getElementById('nav-menu');

btnMobile.addEventListener('click', (e) => {
    e.stopPropagation();
    navMenu.classList.toggle('active');
});

// Fecha o menu ao clicar em qualquer link da navegação mobile
document.querySelectorAll('#nav-menu a').forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
    });
});

// Fecha o menu se o usuário clicar fora dele
document.addEventListener('click', (e) => {
    if (!navMenu.contains(e.target) && !btnMobile.contains(e.target)) {
        navMenu.classList.remove('active');
    }
});