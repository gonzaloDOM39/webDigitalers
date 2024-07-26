document.addEventListener('DOMContentLoaded', function() {
    const menuIcon = document.getElementById('menu-icon');
    const menu = document.getElementById('menu');
    const imgNav = document.getElementById('imgnav');
    const cancel = document.getElementById('cancel');

    // Función para actualizar la visibilidad del menú y los íconos
    function updateMenuVisibility() {
        if (window.innerWidth >= 768) {
            menu.style.display = 'block';
            menuIcon.style.display = 'none';
            cancel.style.display = 'none';
            imgNav.style.display = 'block';
        } else {
            menu.style.display = 'none';
            menuIcon.style.display = 'block';
            cancel.style.display = 'none';
            imgNav.style.display = 'block';
        }
    }

    // Inicializar la visibilidad del menú e íconos al cargar la página
    updateMenuVisibility();

    // Escuchar el evento de cambio de tamaño de la ventana
    window.addEventListener('resize', updateMenuVisibility);

    // Manejar el clic en el ícono del menú
    menuIcon.addEventListener('click', function() {
        if (window.innerWidth <= 767) {
            menu.style.display = 'block';
            menuIcon.style.display = 'none';
            imgNav.style.display = 'none';
            cancel.style.display = 'block';
        }
    });

    // Manejar el clic en el ícono de cancelación
    cancel.addEventListener('click', function() {
        if (window.innerWidth <= 767) {
            menu.style.display = 'none';
            menuIcon.style.display = 'block';
            imgNav.style.display = 'block';
            cancel.style.display = 'none';
        }
    });

    // Manejar el clic en los enlaces del menú
    document.querySelectorAll('#menu a').forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault(); // Evita el comportamiento por defecto del enlace
            const targetId = this.getAttribute('data-target');
            scrollToSection(targetId);
        });
    });
});

function scrollToSection(id) {
    const element = document.getElementById(id);
    if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
    }
}
