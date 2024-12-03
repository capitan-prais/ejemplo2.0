// aqui modificamos el buscador ////////////////////////////////////////

document.getElementById('searchInput').addEventListener('keypress', function(e) {
    // Detectar cuando el usuario presiona "Enter"
    if (e.key === 'Enter') {
        e.preventDefault(); // Prevenir el comportamiento por defecto de submit del formulario
        
        let searchQuery = this.value.toLowerCase();  // Captura el texto ingresado en el buscador y lo pasa a minúsculas
        let carousels = document.querySelectorAll('.carousel');  // Selecciona todos los carousels
        let found = false;  // Variable para saber si se encontró alguna película

        // Recorre todos los carousels
        carousels.forEach(function(carousel) {
            let peliculas = carousel.querySelectorAll('.carousel-item');  // Obtiene todos los elementos de las películas dentro del carousel
            let peliculaEncontrada = null;

            peliculas.forEach(function(item) {
                let titulo = item.querySelector('.titulodepelicula').textContent.toLowerCase();  // Obtiene el título de la película en minúsculas
                
                if (titulo.includes(searchQuery)) {
                    peliculaEncontrada = item;  // Si se encuentra la película, se guarda el ítem
                }
            });

            if (peliculaEncontrada) {
                found = true;  // Marca que se encontró una película
                carousel.scrollIntoView({ behavior: 'smooth', block: 'center' });  // Desplaza el carousel al centro
                peliculaEncontrada.scrollIntoView({ behavior: 'smooth', block: 'center' });  // Centra la película encontrada dentro del carousel
                peliculaEncontrada.style.opacity = '1';  // Asegura que la película esté visible
            }
        });

        if (!found) {
            alert('No se encontró ninguna película con ese nombre');  // Si no se encontró ninguna película, muestra un mensaje
        }
    }
});


// aqui modificamos el carrusel //////////////////////////////////////////////////////

document.addEventListener('DOMContentLoaded', () => {
    // Seleccionar todos los elementos con la clase '.carousel'
    const elementosCarousel = document.querySelectorAll('.carousel');

    // Configuración común para todos los carouseles
    const opcionesCarousel = {
        duration: 200,         // Duración de la animación
        dist: 1,               // Distancia entre los elementos
        shift: 50,             // velocidad de Desplazamiento de los elementos
        padding: 200,          // Espaciado del contenido
        numVisible: 20,        // Número de elementos visibles
        indicators: true,      // Mostrar indicadores
        noWrap: false          // Hacer que el carousel se repita
    };

    // Inicializar los carouseles con las opciones definidas
    M.Carousel.init(elementosCarousel, opcionesCarousel);

    // Función para mover el carousel a la siguiente imagen
    const siguiente = (carousel) => {
        // Avanzar al siguiente elemento del carousel
        carousel.M_Carousel.next();
    };

    // Función para mover el carousel a la imagen anterior
    const anterior = (carousel) => {
        // Retroceder al anterior elemento del carousel
        carousel.M_Carousel.prev();
    };

    // Para cada carousel, agregar los botones de navegación
    elementosCarousel.forEach((carousel, index) => {
        // Crear los botones de navegación
        const btnSiguiente = document.createElement('button');
        btnSiguiente.classList.add('btn', 'btn-siguiente');
        btnSiguiente.innerHTML = '<i class="material-icons">&#10095;</i>';  // Icono de siguiente (flecha derecha)
        
        const btnAnterior = document.createElement('button');
        btnAnterior.classList.add('btn', 'btn-anterior');
        btnAnterior.innerHTML = '<i class="material-icons">&#10094;</i>';  // Icono de anterior (flecha izquierda)

        // Agregar los botones al contenedor de cada carousel
        const carouselContainer = carousel.closest('.hero');
        carouselContainer.appendChild(btnSiguiente);
        carouselContainer.appendChild(btnAnterior);

        // Asignar los eventos de clic a los botones
        btnSiguiente.addEventListener('click', () => siguiente(carousel));
        btnAnterior.addEventListener('click', () => anterior(carousel));
    });
});

// activa o cierra el menu lateral al achicar la pagina /////////////////////////

	const menu = document.querySelector('.menu');
	const btn = document.querySelector('.menu-btn');

		btn.addEventListener('click', () => {
			menu.classList.toggle('active')
		
		}
		// btn.addEventListener('click', () => {
		// 	menu.classList.toggle('pause')
		// }
		);

// le da sonido a los botones   ////////////////////////////////////////////////////     

type="text/javascript">
	$(document).ready(function(){
		$('.menu-i').mouseover(function(){
			$('audio')[0].play();
		});

		$('.menu-i').mouseup(function(){
			$('audio')[1].play();
		});

		$('.imagenpeli').mouseenter(function(){
			$('audio')[5].play();
		});

		$('.logo4').mouseup(function(){
			$('audio')[3].play();
		});

		$('.logo4').mouseenter(function(){
			$('audio')[3].pause();
		});

		$('.ContenedorBuscador').mouseup(function(){
			$('audio')[4].play();
		});

		$('.n').mouseover(function(){
			$('audio')[0].play();
		});

		$('.n').mousedown(function(){
			$('audio')[6].play();
		});
	});

// que modificamos !-- boton para subir hacia arriba --> /////////////////////////////////

    window.onscroll = function() {
        if (document.body.scrollTop > 350 || document.documentElement.scrollTop > 350) {
            document.querySelector('.arriba').classList.add('show');
        } else {
            document.querySelector('.arriba').classList.remove('show');
        }
    }