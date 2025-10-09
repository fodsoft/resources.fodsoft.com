const traducciones;
const idiomasDisponibles = {"en": "en-US","es": "es-ES","fr": "fr-FR",};
function detectarIdiomaNavegador() {
    const idiomaUsuario = navigator.language || navigator.userLanguage;
    const codigoIdioma = idiomaUsuario.split('-')[0];
    return idiomasDisponibles[codigoIdioma] ? codigoIdioma : 'en';
}
function obtenerIdioma() {
    const idiomaGuardado = localStorage.getItem('idioma');
    return idiomasDisponibles[idiomaGuardado] ? idiomaGuardado : detectarIdiomaNavegador();
}
function cambiarIdioma(nuevoIdioma) {
    if (idiomasDisponibles[nuevoIdioma]) {
        localStorage.setItem('idioma', nuevoIdioma);
        traducirPagina(nuevoIdioma);
    }
}
function traducirPagina(idioma) {
    document.querySelectorAll('[data-idioma]').forEach(elemento => {
        const clave = elemento.getAttribute('data-idioma');
        elemento.textContent = traducciones[idioma][clave] || clave;
    });
}
document.addEventListener('DOMContentLoaded', () => {
  const idioma = obtenerIdioma();
  traducirPagina(idioma);
  const espera = setInterval(() => {
    const selectorIdioma = document.querySelector('#selector-idioma');
    if (selectorIdioma) {
      selectorIdioma.value = idioma;
      selectorIdioma.addEventListener('change', (evento) => {
        const idiomaSeleccionado = evento.target.value;
        cambiarIdioma(idiomaSeleccionado);
      });
      clearInterval(esperar);
    }
  }, 50);
});
const imgs = [
			"https://resources.fodsoft.com/foto_nf.webp",
			"https://resources.fodsoft.com/foto_neo_fodere.webp"
		];
		const imgAleatoria = imgs[Math.floor(Math.random() * imgs.length)];
		const img = document.getElementById("imgRandom");
		if (img) { img.src = imgAleatoria; }
	window.onbeforeunload = function () {window.scrollTo(0, 0);};
});
// FODSOFT(TM), NSTUDIOS GAMES(TM). Neo Fodere de Frutos. All rights reserved

