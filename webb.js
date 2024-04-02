document.addEventListener('DOMContentLoaded', function () {
    const images = document.querySelectorAll('.interactive-image');

    images.forEach(image => {
        image.addEventListener('click', function () {
            const text = this.getAttribute('data-text');
            showAlert(text);
        });
    });

    function showAlert(text) {
        alert(text);
    }
});


const toggleButton = document.getElementById('toggle-button');
const infoBox = document.getElementById('info-box');

toggleButton.addEventListener('click', () => {
    if (infoBox.classList.contains('hidden')) {
        infoBox.classList.remove('hidden');
        toggleButton.textContent = 'Ocultar Información';
    } else {
        infoBox.classList.add('hidden');
        toggleButton.textContent = 'Mostrar Información';
    }
});



// Obtener elementos del DOM
const thumbnails = document.querySelectorAll('.thumbnails img');
const mainImage = document.getElementById('main-image');
const imageDescription = document.getElementById('image-description');

// Función para cambiar la imagen principal y la descripción
function changeImage(event) {
    const clickedImage = event.target;
    mainImage.src = clickedImage.src;
    mainImage.alt = clickedImage.alt;
    const description = clickedImage.getAttribute('data-description');
    imageDescription.textContent = description;
}

// Agregar eventos de clic a las miniaturas
thumbnails.forEach(thumbnail => {
    thumbnail.addEventListener('click', changeImage);
});

// Mostrar la primera imagen y descripción al cargar la página
if (thumbnails.length > 0) {
    thumbnails[0].click();
}

console.log(this.window.scrollY)



const entrada = document.getElementById('entrada');


window.addEventListener('scroll', function(){
    if (window.scrollY >= 80){
        entrada.style.transitionDuration = '.5s'
        entrada.classList.remove('opacity-0')
        
    }

})

const demeter = document.getElementById('demeter');

window.addEventListener('scroll', function(){


let miScroll = window.scrollY / 6;
/* disco.style.rotate = `-${miScrolly} deg`; */
demeter.style.transform = `rotate (${miScroll}deg)`;

})

/* 
const slider = document.querySelector('.slider');
const slides = document.querySelectorAll('.slide');
const intervalo = 3000; // Cambiar el intervalo en milisegundos según sea necesario
let slideIndex = 0;

function nextSlide() {
  slideIndex++;
  if (slideIndex >= slides.length) {
    slideIndex = 0;
  }
  updateSlider();
}

function updateSlider() {
  slider.style.transform = `translateX(-${slideIndex * 200}%)`;
}

setInterval(nextSlide, intervalo); */


/* let carouselIndex = 0;
const carouselItems = document.querySelectorAll('.carousel-item');

function nextSlide() {
  carouselIndex = (carouselIndex + 1) % carouselItems.length;
  updateCarousel();
}

function updateCarousel() {
  const offset = -carouselIndex * 100;
  document.querySelector('.carousel-inner').style.transform = `translateX(${offset}%)`;
}

setInterval(nextSlide, 3000); // Cambia de imagen cada 3 segundos
 */
const infoMX = document.getElementById('info-mx');
const infoLen = document.getElementById('info-len');
const infoAmd = document.getElementById('info-amd');

document.querySelector('.mx').addEventListener('mouseover', () => {
    infoMX.style.display = 'block';
});

document.querySelector('.mx').addEventListener('mouseout', () => {
    infoMX.style.display = 'none';
});

document.querySelector('.len').addEventListener('mouseover', () => {
    infoLen.style.display = 'block';
});

document.querySelector('.len').addEventListener('mouseout', () => {
    infoLen.style.display = 'none';
});

document.querySelector('.amd').addEventListener('mouseover', () => {
    infoAmd.style.display = 'block';
});

document.querySelector('.amd').addEventListener('mouseout', () => {
    infoAmd.style.display = 'none';
});