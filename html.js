document.addEventListener("DOMContentLoaded", () => {
const headerFodsoft = `
<header class="light-theme-header">
	<a href="https://fodsoft.com">
	<img id="logo-principal" src="https://resources.fodsoft.com/logo_fodsoft_a1.webp" class="logo-principal" draggable="false"></a>
	<nav>
		<a href="https://fodsoft.com/" data-idioma="inicio">Home</a>
		<a href="https://nstudios-games.fodsoft.com/" data-idioma="juegos">Games</a>
		<a href="https://neofodere.fodsoft.com/" data-idioma="info">About</a>
	</nav>
	<select id="selector-idioma">
		<option value="en">English</option>
		<option value="es">Español</option>
		<option value="fr">Français</option>
	</select>
</header>
`;
const footerFodsoft = `
<footer class="light-theme">
	<div class="footer-centro">
		<img src="https://resources.fodsoft.com/logo_fodsoft_b1.webp" class="logo-footer">
		<p>© 2025 FODSOFT™. Néo Foderé de Frutos. All rights reserved.</p>
	</div>
	<div class="footer-enlaces">
		<h2 data-idioma="enlaces_footer">Visit us</h2>
		<a href="https://fodsoft.itch.io" target="_blank" rel="noopener noreferrer">
		<img src="https://resources.fodsoft.com/icono_itch.webp" class="invertir-color"></a>
		<a href="https://www.instagram.com/fodsoft/" target="_blank" rel="noopener noreferrer">
		<img src="https://resources.fodsoft.com/icono_instagram.webp" class="invertir-color"></a>
		<a href="https://www.youtube.com/@fodsoft" target="_blank" rel="noopener noreferrer">
		<img src="https://resources.fodsoft.com/icono_youtube.webp" class="invertir-color"></a>
	</div>
</footer>
`;
const header = document.getElementById("header-fodsoft");
if (header) header.innerHTML = headerFodsoft;
const footer = document.getElementById("footer-fodsoft");
if (footer) footer.innerHTML = footerFodsoft;
});
