

document.addEventListener("DOMContentLoaded", function() {
  const helpToggle = document.getElementById("help-toggle");
  const helpContent = document.getElementById("help-content");

  helpToggle.addEventListener("click", function() {
      if (helpContent.style.display === "block") {
          helpContent.style.display = "none";
      } else {
          helpContent.style.display = "block";
      }
  });
});

var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1} 
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none"; 
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block"; 
  dots[slideIndex-1].className += " active";
}


/* var ojos = document.querySelector('.ojos')
var fondo = document.querySelector('.oculto')

ojos.addEventListener('click', CambiarImagen)
 
function CambiarImagen() {
  if (isBackground1) {
    fondo.setAttribute('style', 'background-image: url(imgs/fondo_cueva1.png)');
  } else {
    fondo.setAttribute('style', 'background-image: url(imgs/fondo_cueva.png)');
  }
  isBackground1 = !isBackground1;
} */

/* Animacion escena 2 */

var imagen = document.querySelector('.img1');
var ojos = document.querySelector('.ojos')
var max = document.querySelector('.max')
var maxx = document.querySelector('.maxx')
var globo = document.querySelector('.globo')
var circulo = document.querySelector('.circulo')


ojos.addEventListener('click', CambioImagen)

function CambioImagen(){
    imagen.setAttribute("src","fondo_cueva.png" );
    ojos.classList.add('oculto')
    circulo.classList.remove('oculto')
   /* nave.classList.add('oculto') */
   globo.classList.add('oculto')
   maxx.classList.remove('oculto')

   circulo.addEventListener('click', MaxCaminar)
   function MaxCaminar(){
    maxx.classList.add('oculto')
    circulo.classList.add('oculto')
    max.classList.remove('oculto')
    
    setTimeout(function(){
      max.classList.add('oculto')
    },2000);
   }
    
 }

 /* escena futuro */

 

var max1 = document.querySelector('.max1')
var bola1 = document.querySelector('.bola1')
var maxx1 = document.querySelector('.maxx1')
var audioft = document.querySelector('.audioft')
audioft

bola1.addEventListener('click', CambioImagen)


   bola1.addEventListener('click', Max1Caminar)
   function Max1Caminar(){
    bola1.classList.add('oculto')
    max1.classList.remove('oculto')
    audioft.play()
    setTimeout(function(){
      max1.classList.add('oculto')
      maxx1.classList.remove('oculto')
    },2000);
   }
    

/* Funcion de la lampara */

 var botonrojo = document.querySelector('.botonrojo')
 var botonverde = document.querySelector('.botonverde')
 function toggleOpacidad() {
  var miElemento = document.getElementById("miElemento");
  miElemento.classList.toggle("opacidad-cero");
  botonrojo.classList.add('oculto')
  botonverde.classList.remove('oculto') 
  
}
function toggleOpacidad2() {
  var miElemento = document.getElementById("miElemento");
  miElemento.classList.toggle("opacidad-cero");
  botonverde.classList.add('oculto')
  botonrojo.classList.remove('oculto')  
  
}
/* var num=2

var botonrojo = document.querySelector('.botonrojo')
botonrojo.addEventListener('click', cambioBoton)

function cambioBoton(){
  num--
  if (num<1){
    num=2
  }
  botonrojo.setAttribute('src','imgs/boton'+num+'.png')
  setInterval(cambioBoton,1000)
} */

/* Cambio de botones */
/* 


botonrojo.addEventListener('click', CambioImagen)

function CambioImagen(){
    botonrojo.classList.add('oculto')
    botonverde.classList.remove('oculto')
 }
 */
/* 
function fadeInOut() {
  var element = document.getElementById("myElement");
  var currentOpacity = window.getComputedStyle(element).getPropertyValue("opacity");

  if (currentOpacity === "1") {
      element.style.opacity = "0";
  } else {
      element.style.opacity = "1";
  }
}

function changeColor() {
  var element = document.getElementById("myElement");
  var randomColor = getRandomColor();
  element.style.backgroundColor = randomColor;
}

function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
} */

/* cambio.addEventListener('click', CambioEscena)

function CambioEscena(){
   
    botonrojo.classList.add('oculto')
    botonverde.classList.add('oculto')
    lampara.classList.add('oculto')
   area.classList.add('oculto')
   lampara.classList.add('oculto')
    
 } */

/*  var bola = document.querySelector('.bola');
var escena = document.querySelector('.fondo2');
var imagenCuevas = document.querySelector('.imagen-cuevas');

bola.addEventListener('click', CambiarImagen);

function CambiarImagen() {
    escena.setAttribute("src", "imgs/Escena 3-1.gif");
    bola.classList.add('oculto');

    setTimeout(function () {
        escena.classList.add('oculto');

        setTimeout(function () {
            imagenCuevas.setAttribute("src", "imgs/fondo_cuevas-oscura_Mesa de trabajo 1-06.png");
            imagenCuevas.classList.remove('oculto');
        }, 7000);
    }, 7000);
}
 */

 var bola = document.querySelector('.bola');
 var escena = document.querySelector('.fondo2');
 var imagenCuevas = document.querySelector('.cueva');
 var audiocue = document.querySelector('.audiocue');

 bola.addEventListener('click', CambiarImagen)

function CambiarImagen(){
    escena.setAttribute("src","Escena 3-1.gif");
    bola.classList.add('oculto')
    audiocue.play(); // Reproducir el audio

    setTimeout(function(){
      escena.classList.add('oculto')
      imagenCuevas.classList.remove('oculto');
      audiocue.pause(); // Reproducir el audio
    },7500);

  } 
    /* function CambiarImagen(){
      escena.setAttribute("src","imgs/fondo_cuevas-oscura_Mesa de trabajo 1-06.png");
    }
     */


 var cambio = document.querySelector('.cambio');
 var capitulo = document.querySelector('.laboratorio');
 var botonrojo = document.querySelector('.botonrojo');
 /* var botonverde = document.querySelector('.botonrojo'); */
 var lampara = document.querySelector('.lampara');
 /* var area = document.querySelector('.area'); */
 var labora = document.querySelector('.labo');
 var audiolab = document.querySelector('.audiolab');


 cambio.addEventListener('click', CambioEscena)

function CambioEscena(){
    capitulo.setAttribute("src","laboratorio-1-gif.gif");
    botonrojo.classList.add('oculto')
    botonverde.classList.add('oculto')
    lampara.classList.add('oculto')
  /*  area.classList.add('oculto') */
   cambio.classList.add('oculto')
   audiolab.classList.remove('oculto');
   audiolab.play(); // Reproducir el audio

   setTimeout(function(){
    capitulo.classList.add('oculto')
    labora.classList.remove('oculto');
    audiolab.pause(); // Detener la reproducción del audio
    
  },24000);
    
 }

/*  var cambio = document.querySelector('.cambio');
 var capitulo = document.querySelector('.laboratorio');
 var botonrojo = document.querySelector('.botonrojo');
 var lampara = document.querySelector('.lampara');
 var labora = document.querySelector('.labo');
 var audiolab = document.querySelector('.audiolab');
 var giflab = document.querySelector('.giflab');

 cambio.addEventListener('click', CambioEscena)

function CambioEscena(){
    capitulo.classList.add('oculto');
    giflab.classList.remove('oculto');
    botonrojo.classList.add('oculto');
    botonverde.classList.add('oculto');
    lampara.classList.add('oculto');
   cambio.classList.add('oculto');
   audiolab.classList.remove('oculto');
   audiolab.play(); // Reproducir el audio
   
   setTimeout(function(){
    giflab.pause();
    labora.classList.remove('oculto');
    audiolab.pause(); // Detener la reproducción del audio

  },24000);
    
 } */
 
/*  var bola1 = document.querySelector('.bola1');
 var escena1 = document.querySelector('.fondo3');

 bola1.addEventListener('click', CambiarFondo)

function CambiarFondo(){
    escena1.setAttribute("src","imgs/Escena 3-1.gif");
    bola1.classList.add('oculto')
    

 }  */

 var bola2 = document.querySelector('.bola2');
 var escena2 = document.querySelector('.fondo4');
 var fon = document.querySelector('.fon');
 var audiofut = document.querySelector('.audiofut');
 var audiopas = document.querySelector('.audiopas');
 var maxrg = document.querySelector('.max');

 bola2.addEventListener('click', CambiarPaisaje)

function CambiarPaisaje(){
    escena2.setAttribute("src","pasado pasado.gif");
    bola2.classList.add('oculto')
    audiofut.play();

    setTimeout(function(){
      escena2.classList.add('oculto')
      fon.classList.remove('oculto')
      audiofut.pause(); // Reproducir el audio
      audiopas.play();
      maxrg.classList.remove('oculto')

    },9200);

    setTimeout(function(){
      audiopas.play();
     

    },1000);


 } 

 var bola3 = document.querySelector('.bola3');
 var escena3 = document.querySelector('.fondo5');
 var audiofin = document.querySelector('.audiofin');
 var maxfeliz = document.querySelector('.maxfeliz');

 bola3.addEventListener('click', CambiarEscena)

function CambiarEscena(){
    escena3.setAttribute("src","escena final.gif");
    bola3.classList.add('oculto')
    audiofin.play()

    setTimeout(function(){
      maxfeliz.classList.remove('oculto')
      escena3.classList.add('oculto')

    },3000);

 } 

 var bola4 = document.querySelector('.bola4');
 var escena4 = document.querySelector('.fondo6');
 var fondocas = document.querySelector('.fondocas');
 var casdia = document.querySelector('.casdia');
 var dialogo = document.querySelector('.dialogo');

 bola4.addEventListener('click', CambiarEscenaa)

function CambiarEscenaa(){
    escena4.setAttribute("src","Fondo 5 animar.gif maxx y amadeoo.gif");
    bola4.classList.add('oculto')

    setTimeout(function(){
      escena4.classList.add('oculto')
      casdia.classList.remove('oculto')
      dialogo.classList.remove('oculto')
      

    },5000);

 } 

 var bola5 = document.querySelector('.bola5');
 var audiofinn = document.querySelector('.audiofinn');

 bola5.addEventListener('click', CambiarPanorama)

function CambiarPanorama(){
    bola5.classList.add('oculto')
    audiofinn.play()

 } 


 
 function mostrarAlerta() {
  var alerta = document.getElementById('miAlerta');
  alerta.style.display = 'block';
}

function cerrarAlerta() {
  var alerta = document.getElementById('miAlerta');
  alerta.style.display = 'none';
}


document.addEventListener('DOMContentLoaded', function () {
  const audio = document.getElementById('audio');
  const toggleButton = document.getElementById('toggleButton');
  let isPlaying = false;

  toggleButton.addEventListener('click', function () {
    if (isPlaying) {
      audio.pause();
      toggleButton.textContent = 'Encender musica';
    } else {
      audio.play();
      toggleButton.textContent = 'Apagar musica';
    }
    isPlaying = !isPlaying;
  });
});

