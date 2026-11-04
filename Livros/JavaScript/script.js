document.addEventListener('DOMContentLoaded', () => {
    // Alternar exibição do Menu Mobile
    const btnMobile = document.getElementById('mobile-btn');
    const navMenu = document.getElementById('nav-menu');

    if (btnMobile && navMenu) {
        btnMobile.addEventListener('click', () => {
            navMenu.classList.toggle('active');
        });

        // Fechar menu ao clicar num item da navegação
        document.querySelectorAll('#nav-menu a').forEach(link => {
            link.addEventListener('click', () => {
                navMenu.classList.remove('active');
            });
        });
    }

    // Alteração de estilo do Header ao rolar a página
    const header = document.getElementById('header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.style.background = 'rgba(7, 2, 2, 0.98)';
            header.style.boxShadow = '0 2px 10px rgba(139, 0, 0, 0.5)';
        } else {
            header.style.background = 'rgba(7, 2, 2, 0.95)';
            header.style.boxShadow = 'none';
        }
    });
});