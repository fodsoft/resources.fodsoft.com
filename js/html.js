document.addEventListener("DOMContentLoaded", () => 
{
	const fodsoft_header = `
		<header class="header-base header-fodsoft">
			<div class="menu-software">
				<img src="https://resources.fodsoft.com/images/web/icono_software.avif" 
					class="icono-lista-software" draggable="false" oncontextmenu="return false">
	            <div class="lista-software">
					<a href="https://fodsoft.com/vdream">
						<img src="https://resources.fodsoft.com/images/web/icono_vdream.avif"
							class="icono-software" draggable="false" oncontextmenu="return false"> V.Dream
					</a>
					<a href="https://fodsoft.com/nwibuzz">
						<img src="https://resources.fodsoft.com/images/web/icono_nwibuzz.avif"
							class="icono-software" draggable="false" oncontextmenu="return false"> Nwibuzz&trade;
					</a>
					<a href="https://fodsoft.com/denfo">
						<img src="https://resources.fodsoft.com/images/web/icono_denfo.avif"
							class="icono-software" draggable="false" oncontextmenu="return false"> DENFO&trade;
					</a>
					<a href="https://fodsoft.com/fvax">
						<img src="https://resources.fodsoft.com/images/web/icono_fvax.avif"
							class="icono-software" draggable="false" oncontextmenu="return false"> FVAX
					</a>
					<a href="https://github.com/neofodere/nsave" target="_blank">
						<img src="https://raw.githubusercontent.com/neofodere/nsave/refs/heads/main/images/icono_nsave.png"
							class="icono-software" draggable="false" oncontextmenu="return false"> nSAVE
					</a>
	            </div>
			</div>

	        <div class="header-logo">
				<a href="https://fodsoft.com/">
		        	<img src="https://resources.fodsoft.com/images/web/fodsoft_header.avif" class="logo-header quitar-suavizado-firefox"
						draggable="false" oncontextmenu="return false;">
				</a>
            </div>

            <nav class="links-header">
                <a href="https://fodsoft.com" class="link-header-base link-header-fodsoft" data-idioma="inicio">
					<img src="https://resources.fodsoft.com/images/web/icono_inicio.avif"
						class="icono-header pintar-rojo" draggable="false" oncontextmenu="return false"> Home
				</a>
				<a href="https://nstudios-games.fodsoft.com" class="link-header-base link-header-fodsoft" data-idioma="juegos">
					<img src="https://resources.fodsoft.com/images/web/icono_juegos.avif"
						class="icono-header pintar-rojo" draggable="false" oncontextmenu="return false"> Games
				</a>
				<a href="https://neofodere.fodsoft.com" class="link-header-base link-header-fodsoft" data-idioma="acerca">
					<img src="https://resources.fodsoft.com/images/web/icono_acerca.avif"
						class="icono-header pintar-rojo" draggable="false" oncontextmenu="return false"> About
				</a>
            </nav>

			<div class="menu-nav">
				<img src="https://resources.fodsoft.com/images/web/icono_menu.avif"
         			class="icono-lista-nav" draggable="false" oncontextmenu="return false">
				<div class="lista-nav">
					<a href="https://fodsoft.com/" data-idioma="inicio">
						<img src="https://resources.fodsoft.com/images/web/icono_inicio.avif"
							class="icono-software" draggable="false" oncontextmenu="return false"> Inicio
					</a>
					<a href="https://nstudios-games.fodsoft.com/" data-idioma="juegos">
						<img src="https://resources.fodsoft.com/images/web/icono_juegos.avif"
							class="icono-software" draggable="false" oncontextmenu="return false"> Games
					</a>
					<a href="https://neofodere.fodsoft.com/" data-idioma="acerca">
						<img src="https://resources.fodsoft.com/images/web/icono_acerca.avif"
							class="icono-software" draggable="false" oncontextmenu="return false"> About
					</a>
				</div>
			</div>
        </header>
	`;

	const fodsoft_footer = `
	    <footer class="footer-base footer-fodsoft">
	        <div class="footer-contenido">
	            <div class="footer-centro">
	                <img src="https://resources.fodsoft.com/images/web/logo_fodsoft_b.avif"
	                     class="footer-logo" draggable="false" oncontextmenu="return false">
	                <p class="footer-texto">
	                    © 2026 FODSOFT™. Néo Foderé de Frutos. All rights reserved.
	                </p>
	                <div class="footer-enlaces">
	                    <a href="mailto:contact@fodsoft.com" target="_blank" class="pintar-rojo">CONTACT</a>
	                    <span class="footer-separador">•</span>
	                    <a href="https://resources.fodsoft.com/LEGAL.html" target="_blank" class="pintar-rojo">LEGAL</a>
	                </div>
	            </div>
	            <div class="footer-derecha">
	                <span class="footer-visit">Visit more</span>
	                <a href="https://fodsoft.itch.io" target="_blank">
	                    <img src="https://resources.fodsoft.com/images/web/icono_itch.avif"
	                         class="footer-enlace invertir-color pintar-rojo" draggable="false" oncontextmenu="return false">
	                </a>
					<a href="https://github.com/neofodere" target="_blank">
	                    <img src="https://resources.fodsoft.com/images/web/icono_github.avif"
	                         class="footer-enlace invertir-color pintar-rojo" draggable="false" oncontextmenu="return false">
	                </a>
					<a href="https://linkedin.com/company/fodsoft" target="_blank">
	                    <img src="https://resources.fodsoft.com/images/web/icono_linkedin.avif"
	                         class="footer-enlace invertir-color pintar-rojo redondear-bordes" draggable="false" oncontextmenu="return false">
	                </a>
					<a href="https://youtube.com/@fodsoft" target="_blank">
	                    <img src="https://resources.fodsoft.com/images/web/icono_youtube.avif"
	                         class="footer-enlace invertir-color pintar-rojo" draggable="false" oncontextmenu="return false">
	                </a>
	            </div>
	        </div>
	    </footer>
	`;

	const nsg_header = `
		<header class="header-base header-nsg">
			<div class="menu-software">
	            <img src="https://resources.fodsoft.com/images/web/icono_software.avif"
	                 class="icono-lista-software invertir-color" draggable="false" oncontextmenu="return false">
	            <div class="lista-software">
					<a href="https://nstudios-games.fodsoft.com/fodfru">
						<img src="https://resources.fodsoft.com/images/ext/icono_fodfru.png"
							class="icono-software" draggable="false" oncontextmenu="return false"> FodFru&trade;
					</a>
	            </div>
			</div>

	        <div class="header-logo">
				<a href="https://nstudios-games.fodsoft.com/">
		        	<img src="https://resources.fodsoft.com/images/web/nstudios_games_header.avif" class="logo-header"
						draggable="false" oncontextmenu="return false;">
				</a>
            </div>

            <nav class="links-header">
                <a href="https://nstudios-games.fodsoft.com" class="link-header-base link-header-nsg" data-idioma="inicio">
					<img src="https://resources.fodsoft.com/images/web/icono_inicio.avif"
						class="icono-header invertir-color" draggable="false" oncontextmenu="return false"> Home
				</a>
				<a href="https://fodsoft.com" class="link-header-base link-header-nsg" data-idioma="software">
					<img src="https://resources.fodsoft.com/images/web/icono_soft.avif"
						class="icono-header invertir-color" draggable="false" oncontextmenu="return false"> Software
				</a>
				<a href="https://neofodere.fodsoft.com" class="link-header-base link-header-nsg" data-idioma="acerca">
					<img src="https://resources.fodsoft.com/images/web/icono_acerca.avif"
						class="icono-header invertir-color" draggable="false" oncontextmenu="return false"> About
				</a>
            </nav>

			<div class="menu-nav">
				<img src="https://resources.fodsoft.com/images/web/icono_menu.avif"
         			class="icono-lista-nav invertir-color" draggable="false" oncontextmenu="return false">
				<div class="lista-nav">
					<a href="https://nstudios-games.fodsoft.com/" data-idioma="inicio">
						<img src="https://resources.fodsoft.com/images/web/icono_inicio.avif"
							class="icono-software" draggable="false" oncontextmenu="return false"> Inicio
					</a>
					<a href="https://fodsoft.com/" data-idioma="software">
						<img src="https://resources.fodsoft.com/images/web/icono_soft.avif"
							class="icono-software" draggable="false" oncontextmenu="return false"> Software
					</a>
					<a href="https://neofodere.fodsoft.com/" data-idioma="acerca">
						<img src="https://resources.fodsoft.com/images/web/icono_acerca.avif"
							class="icono-software" draggable="false" oncontextmenu="return false"> About
					</a>
				</div>
			</div>
        </header>
	`;

	const nsg_footer = `
		<footer class="footer-base footer-nsg">
	        <div class="footer-contenido">
	            <div class="footer-centro">
	                <img src="https://resources.fodsoft.com/images/web/logo_nstudios_games_c.avif"
	                	class="footer-logo pintar-blanco" draggable="false" oncontextmenu="return false">
					<img src="https://resources.fodsoft.com/images/web/logo_fodsoft_b.avif"
	                	class="footer-logo pintar-blanco" draggable="false" oncontextmenu="return false">
	                <p class="footer-texto invertir-color">
	                    © 2026 FODSOFT™, NSTUDIOS GAMES™. Néo Foderé de Frutos. All rights reserved.
	                </p>
	                <div class="footer-enlaces">
	                    <a href="mailto:contact@fodsoft.com" target="_blank" class="invertir-color">CONTACT</a>
	                    <span class="footer-separador invertir-color">•</span>
	                    <a href="https://resources.fodsoft.com/LEGAL.html" target="_blank" class="invertir-color">LEGAL</a>
	                </div>
	            </div>
	            <div class="footer-derecha">
	                <span class="footer-visit invertir-color">Visit more</span>
	                <a href="https://nsg-fodsoft.itch.io" target="_blank">
	                    <img src="https://resources.fodsoft.com/images/web/icono_itch.avif"
	                         class="footer-enlace" draggable="false" oncontextmenu="return false">
	                </a>
					<a href="https://github.com/neofodere" target="_blank">
	                    <img src="https://resources.fodsoft.com/images/web/icono_github.avif"
	                         class="footer-enlace" draggable="false" oncontextmenu="return false">
	                </a>
					<a href="https://www.linkedin.com/company/nstudios-games/" target="_blank">
	                    <img src="https://resources.fodsoft.com/images/web/icono_linkedin.avif"
	                         class="footer-enlace redondear-bordes" draggable="false" oncontextmenu="return false">
	                </a>
					<a href="https://youtube.com/@nstudios-games" target="_blank">
	                    <img src="https://resources.fodsoft.com/images/web/icono_youtube.avif"
	                         class="footer-enlace" draggable="false" oncontextmenu="return false">
	                </a>
	            </div>
	        </div>
	    </footer>
	`;

	const vdream_header = `
		<header class="vdream-header">
			<a href="https://fodsoft.com/vdream/">
				<img src="https://resources.fodsoft.com/images/web/logo_vdream.avif" 
					class="vdream-logo" draggable="false" oncontextmenu="return false">
			</a>

			<nav class="vdream-nav">
				<a href="https://fodsoft.com/vdream/">
					<img src="https://resources.fodsoft.com/images/web/icono_inicio.avif" class="icono-header invertir-color"> 
					Home
				</a>
				<a href="https://fodsoft.com/vdream/download">
					<img src="https://resources.fodsoft.com/images/web/icono_descargar.avif" class="icono-header"> 
					Download
				</a>
				<a href="https://fodsoft.com/vdream/compatibility">
					<img src="https://resources.fodsoft.com/images/web/icono_lista.avif" class="icono-header"> 
					Compatibility
				</a>
				<a href="https://fodsoft.com/vdream/documentation">
					<img src="https://resources.fodsoft.com/images/web/icono_docu.avif" class="icono-header"> 
					Documentation
				</a>
				<a href="https://github.com/neofodere/vdream" target="_blank">
					<img src="https://resources.fodsoft.com/images/web/icono_github.avif" class="icono-header"> 
					GitHub
				</a>
				<p>|</p>
				<a href="https://fodsoft.com">
					<img src="https://resources.fodsoft.com/images/web/icono_fodsoft.avif" class="icono-header pintar-blanco"> 
					FODSOFT
				</a>
			</nav>

			<div class="menu-nav">
				<img src="https://resources.fodsoft.com/images/web/icono_menu.avif" 
					class="icono-lista-nav invertir-color" draggable="false" oncontextmenu="return false">
				<div class="lista-nav">
					<a href="https://fodsoft.com/vdream/">
						<img src="https://resources.fodsoft.com/images/web/icono_inicio.avif" class="icono-header invertir-color"> 
						Home
					</a>
					<a href="https://fodsoft.com/vdream/download">
						<img src="https://resources.fodsoft.com/images/web/icono_descargar.avif" class="icono-header"> 
						Download
					</a>
					<a href="https://fodsoft.com/vdream/compatibility">
						<img src="https://resources.fodsoft.com/images/web/icono_lista.avif" class="icono-header"> 
						Compatibility
					</a>
					<a href="https://fodsoft.com/vdream/documentation">
						<img src="https://resources.fodsoft.com/images/web/icono_docu.avif" class="icono-header"> 
						Documentation
					</a>
					<a href="https://github.com/neofodere/vdream" target="_blank">
						<img src="https://resources.fodsoft.com/images/web/icono_github.avif" class="icono-header"> 
						GitHub
					</a>
					<a href="https://fodsoft.com">
						<img src="https://resources.fodsoft.com/images/web/icono_fodsoft.avif" class="icono-header pintar-blanco"> 
						FODSOFT™
					</a>
				</div>
			</div>
		</header>
	`;

	const vdream_footer = `
		
	`;

	if (location.hostname === "fodsoft.com" || location.hostname.endsWith(".fodsoft.com"))
	{
		const headerFodsoft = document.getElementById("header-fodsoft");
		const footerFodsoft = document.getElementById("footer-fodsoft");
	    if (headerFodsoft && footerFodsoft)
		{
			headerFodsoft.innerHTML = fodsoft_header;
			footerFodsoft.innerHTML = fodsoft_footer;
		}
	
		const headerNSG = document.getElementById("header-nsg");
		const footerNSG = document.getElementById("footer-nsg");
		if (headerNSG && footerNSG)
		{
			headerNSG.innerHTML = nsg_header;
			footerNSG.innerHTML = nsg_footer;
		}
	
		const headerVdream = document.getElementById("header-vdream");
		const footerVdream = document.getElementById("footer-vdream");
		if (headerVdream)// && footerVdream)
		{
			headerVdream.innerHTML = vdream_header;
			//footerVdream.innerHTML = vdream_footer;
		}
	}
});

document.addEventListener("click", (e) =>
{
	const menuSoft = document.querySelector(".lista-software");
	if (menuSoft) 
	{
		if (e.target.closest(".icono-lista-software"))
			menuSoft.style.display = menuSoft.style.display === "flex" ? "none" : "flex";
		else if (!e.target.closest(".lista-software"))
			menuSoft.style.display = "none";
	}

	const iconoNav = e.target.closest(".icono-lista-nav");
	const menusNav = document.querySelectorAll(".menu-nav .lista-nav");
	if (iconoNav)
	{
		const contenedor = iconoNav.closest(".menu-nav");
		const menuActual = contenedor ? contenedor.querySelector(".lista-nav") : null;
		menusNav.forEach(menu =>
		{
			if (menu === menuActual)
				menu.style.display = (menu.style.display === "flex" ? "none" : "flex");
			else
				menu.style.display = "none";
		});
	}
	else if (!e.target.closest(".lista-nav"))
		menusNav.forEach(menu => menu.style.display = "none");
});
// FODSOFT(TM). Neo Fodere de Frutos. All rights reserved.
