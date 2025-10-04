const traducciones = {
    "en": {
        "inicio": "Home",
        "proyectos": "Software",
        "juegos": "Games",
        "info": "About",
        "info_destacado": "More info",
        "descargar": "Download",
        "enlaces_footer": "Visit me",
		"buscar_juegos": "Looking for video games?",
		"buscar_soft": "Looking for software tools?",
		"soft": "ALL SOFTWARE",
		"tech": "ALL TECHNOLOGIES",
		"game": "ALL GAMES"
    },
    "es": {
        "inicio": "Inicio",
        "proyectos": "Software",
        "juegos": "Juegos",
        "info": "Acerca de",
        "info_destacado": "Más info",
        "descargar": "Descargar",
        "enlaces_footer": "Visítame",
		"buscar_juegos": "¿Buscas videojuegos?",
		"buscar_soft": "¿Buscas herramientas de software?",
		"soft": "TODO EL SOFTWARE",
		"tech": "TODAS LAS TECNOLOGÍAS",
		"game": "TODOS LOS JUEGOS"
    },
    "fr": {
        "inicio": "Accueil",
        "proyectos": "Software",
        "juegos": "Jeux",
        "info": "À propos",
        "info_destacado": "Plus d'infos",
        "descargar": "Télécharger",
        "enlaces_footer": "Visitez-moi",
		"buscar_juegos": "Vous cherchez des jeux vidéo ?",
		"buscar_soft": "Vous cherchez des logiciels ?",
		"soft": "TOUS LES LOGICIELS",
		"tech": "TOUTES LES TECHNOLOGIES",
		"game": "TOUS LES JEUX"
    },
};

const idiomasDisponibles = {
    "en": "en-US",
    "es": "es-ES",
    "fr": "fr-FR",
};

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

    const selectorIdioma = document.querySelector('#selector-idioma');
    selectorIdioma.value = idioma;
    selectorIdioma.addEventListener('change', (evento) => {
        const idiomaSeleccionado = evento.target.value;
        cambiarIdioma(idiomaSeleccionado);
    });


window.onbeforeunload = function () {
    window.scrollTo(0, 0);
};
});
// FODSOFT(TM), NSTUDIOS GAMES(TM). Neo Fodere de Frutos. All rights reserved