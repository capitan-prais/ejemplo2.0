

document.addEventListener('DOMContentLoaded', () => {
    const carousel = document.querySelector('#carousel');
    const items = document.querySelectorAll('.carousel-item');
    const prevButton = document.querySelector('#prevButton');
    const nextButton = document.querySelector('#nextButton');

    let currentIndex = 0;

    const updateCarousel = () => {
        // Mover el carrusel a la posición actual
        const offset = -currentIndex * 100;
        carousel.style.transform = `translateX(${offset}%)`;
    };

    const goToNext = () => {
        if (currentIndex < items.length - 1) {
            currentIndex++;
        } else {
            currentIndex = 0; // Vuelve al inicio si llega al final
        }
        updateCarousel();
    };

    const goToPrev = () => {
        if (currentIndex > 0) {
            currentIndex--;
        } else {
            currentIndex = items.length - 1; // Va al final si está al principio
        }
        updateCarousel();
    };

    // Asignar eventos a los botones
    nextButton.addEventListener('click', goToNext);
    prevButton.addEventListener('click', goToPrev);

    // Iniciar el carrusel
    updateCarousel();
});
