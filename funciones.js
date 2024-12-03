document.addEventListener('DOMContentLoaded', () => {
    const carousels = document.querySelectorAll('.carousel');

    carousels.forEach((carousel) => {
        let currentIndex = 0;
        const items = carousel.querySelectorAll('.carousel-item');
        const totalItems = items.length;

        // Crear contenedor para los indicadores
        const indicatorsContainer = document.createElement('div');
        indicatorsContainer.classList.add('indicators');

        // Función para mostrar el elemento actual
        const mostrarElemento = () => {
            items.forEach((item, index) => {
                item.style.display = index === currentIndex ? 'block' : 'none';
            });

            // Actualizar el estado de los indicadores
            Array.from(indicatorsContainer.children).forEach((indicator, index) => {
                indicator.classList.toggle('active', index === currentIndex);
            });
        };

        // Inicializar los indicadores
        for (let i = 0; i < totalItems; i++) {
            const indicator = document.createElement('span');
            indicator.classList.add('indicator');
            if (i === currentIndex) indicator.classList.add('active');
            indicator.addEventListener('click', () => {
                currentIndex = i;
                mostrarElemento();
            });
            indicatorsContainer.appendChild(indicator);
        }

        // Inicializar el carrusel mostrando el primer elemento
        mostrarElemento();

        // Función para avanzar al siguiente elemento
        const siguiente = () => {
            currentIndex = (currentIndex + 1) % totalItems;
            mostrarElemento();
        };

        // Función para retroceder al elemento anterior
        const anterior = () => {
            currentIndex = (currentIndex - 1 + totalItems) % totalItems;
            mostrarElemento();
        };

        // Crear y agregar botones de navegación
        const btnSiguiente = document.createElement('button');
        btnSiguiente.classList.add('btn', 'btn-siguiente');
        btnSiguiente.innerHTML = '&#10095;';
        btnSiguiente.addEventListener('click', siguiente);

        const btnAnterior = document.createElement('button');
        btnAnterior.classList.add('btn', 'btn-anterior');
        btnAnterior.innerHTML = '&#10094;';
        btnAnterior.addEventListener('click', anterior);

        // Insertar botones y contenedor de indicadores en el carrusel
        const carouselContainer = carousel.closest('.carousel-container');
        carouselContainer.appendChild(btnAnterior);
        carouselContainer.appendChild(btnSiguiente);
        carouselContainer.appendChild(indicatorsContainer);
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const carousels = document.querySelectorAll('.carousel');
    const searchInput = document.getElementById('buscador');

    searchInput.addEventListener('keydown', (event) => {
        if (event.key === 'Enter') { // Detectar la tecla Enter
            const query = searchInput.value.toLowerCase();
            let found = false;

            carousels.forEach((carousel) => {
                const items = carousel.querySelectorAll('.carousel-item');
                items.forEach((item) => {
                    const titulo = item.querySelector('.titulodepelicula').textContent.toLowerCase();

                    if (titulo.includes(query)) {
                        // Desplazar el carrusel al elemento encontrado
                        items.forEach((itm) => itm.style.display = 'none'); // Ocultar todos los elementos
                        item.style.display = 'block'; // Mostrar el elemento encontrado

                        const carouselContainer = carousel.closest('.carousel-container');
                        carouselContainer.scrollIntoView({ behavior: 'smooth', block: 'center' });

                        found = true;
                    }
                });
            });

            if (!found) {
                alert('Película no encontrada');
            }
        }
    });
});



// Video y clic en la imagen
const images = document.querySelectorAll('.carousel img');
const videoContainer = document.getElementById('videoContainer');
const video = document.getElementById('video');
const videoSource = document.getElementById('videoSource');

carousel.addEventListener('click', function(e) {
    if (e.target.tagName.toLowerCase() === 'img') {
        const videoFile = e.target.getAttribute('data-video');
        videoSource.src = videoFile;
        video.load();
        video.play();
        videoContainer.style.display = 'block';
    }
});

// Botón para cerrar el video
const closeVideoButton = document.getElementById('closeVideoButton');
closeVideoButton.addEventListener('click', () => {
    video.pause();  // Pausar el video
    video.currentTime = 0;  // Reiniciar el video
    videoContainer.style.display = 'none';  // Ocultar el contenedor del video
});

// Manejador de errores para el video
video.addEventListener('error', () => {
    alert("El video no se pudo cargar.");
});
