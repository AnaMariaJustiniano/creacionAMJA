let currentIndex = 0;

function moveSlide(direction) {
    const slides = document.querySelector('.carousel-slide');
    const totalSlides = document.querySelectorAll('.carousel-item').length;

    // Calcular el nuevo índice
    currentIndex += direction;

    // Si el índice es mayor que el total de imágenes, reiniciar al inicio
    if (currentIndex >= totalSlides) {
        currentIndex = 0;
    }

    // Si el índice es menor que 0, mover al final
    if (currentIndex < 0) {
        currentIndex = totalSlides - 1;
    }

    // Desplazar el contenedor de las imágenes con una transición suave
    const offset = -currentIndex * 100;
    slides.style.transform = `translateX(${offset}%)`;
}

// Mostrar la primera imagen al cargar la página
document.addEventListener('DOMContentLoaded', () => {
    const slides = document.querySelectorAll('.carousel-item');
    slides[0].style.display = 'block';
});
