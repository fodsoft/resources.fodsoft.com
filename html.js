document.addEventListener("DOMContentLoaded", () => 
{
	const fodsoft_header = `
		<div class="header-base header-fodsoft">
			<div class="menu-software">
				<img src="https://resources.fodsoft.com/images/webp/icono_software.webp"
	                 class="icono-lista-software" draggable="false" oncontextmenu="return false">
	            <div class="lista-software">
					<a href="https://fodsoft.com/vdream">
						<img src="https://resources.fodsoft.com/images/webp/icono_vdream.webp"
							class="icono-software" draggable="false" oncontextmenu="return false"> V.Dream
					</a>
					<a href="https://fodsoft.com/nwibuzz">
						<img src="https://resources.fodsoft.com/images/webp/icono_nwibuzz.webp"
							class="icono-software" draggable="false" oncontextmenu="return false"> Nwibuzz&trade;
					</a>
					<a href="https://fodsoft.com/denfo">
						<img src="https://resources.fodsoft.com/images/webp/icono_denfo.webp"
							class="icono-software" draggable="false" oncontextmenu="return false"> DENFO&trade;
					</a>
					<a href="https://fodsoft.com/fvax">
						<img src="https://resources.fodsoft.com/images/webp/icono_fvax.webp"
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
		        	<img src="https://resources.fodsoft.com/images/webp/fodsoft_header.webp" class="logo-header quitar-suavizado-firefox"
						draggable="false" oncontextmenu="return false;">
				</a>
            </div>

            <nav class="links-header">
                <a href="https://fodsoft.com" class="link-header-base link-header-fodsoft" data-idioma="inicio">
					<img src="https://resources.fodsoft.com/images/webp/icono_inicio.webp"
						class="icono-header pintar-rojo" draggable="false" oncontextmenu="return false"> Home
				</a>
				<a href="https://nstudios-games.fodsoft.com" class="link-header-base link-header-fodsoft" data-idioma="juegos">
					<img src="https://resources.fodsoft.com/images/webp/icono_juegos.webp"
						class="icono-header pintar-rojo" draggable="false" oncontextmenu="return false"> Games
				</a>
				<a href="https://neofodere.fodsoft.com" class="link-header-base link-header-fodsoft" data-idioma="acerca">
					<img src="https://resources.fodsoft.com/images/webp/icono_acerca.webp"
						class="icono-header pintar-rojo" draggable="false" oncontextmenu="return false"> About
				</a>
            </nav>

			<div class="menu-nav">
				<img src="https://resources.fodsoft.com/images/webp/icono_menu.webp"
         			class="icono-lista-nav" draggable="false" oncontextmenu="return false">
				<div class="lista-nav">
					<a href="https://fodsoft.com/" data-idioma="inicio">
						<img src="https://resources.fodsoft.com/images/webp/icono_inicio.webp"
							class="icono-software" draggable="false" oncontextmenu="return false"> Inicio
					</a>
					<a href="https://nstudios-games.fodsoft.com/" data-idioma="juegos">
						<img src="https://resources.fodsoft.com/images/webp/icono_juegos.webp"
							class="icono-software" draggable="false" oncontextmenu="return false"> Games
					</a>
					<a href="https://neofodere.fodsoft.com/" data-idioma="acerca">
						<img src="https://resources.fodsoft.com/images/webp/icono_acerca.webp"
							class="icono-software" draggable="false" oncontextmenu="return false"> About
					</a>
				</div>
			</div>
        </div>
	`;

	const fodsoft_footer = `
	    <footer class="footer-base footer-fodsoft">
	        <div class="footer-contenido">
	            <div class="footer-centro">
	                <img src="https://resources.fodsoft.com/images/webp/logo_fodsoft_b1.webp"
	                     class="footer-logo" draggable="false" oncontextmenu="return false">
	                <p class="footer-texto">
	                    © 2026 FODSOFT™. Néo Foderé de Frutos. All rights reserved.
	                </p>
	                <div class="footer-enlaces">
	                    <a href="mailto:contact@fodsoft.com">CONTACT</a>
	                    <span class="footer-separador">•</span>
	                    <a href="https://resources.fodsoft.com/LEGAL.rtf">LEGAL</a>
	                </div>
	            </div>
	            <div class="footer-derecha">
	                <span class="footer-visit">Visit more</span>
	                <a href="https://fodsoft.itch.io" target="_blank">
	                    <img src="https://resources.fodsoft.com/images/webp/icono_itch.webp"
	                         class="footer-enlace invertir-color pintar-rojo" draggable="false" oncontextmenu="return false">
	                </a>
	            </div>
	        </div>
	    </footer>
	`;

	const nsg_header = `
		<div class="header-base header-nsg">
			<div class="menu-software">
	            <img src="https://resources.fodsoft.com/images/webp/icono_software.webp"
	                 class="icono-lista-software invertir-color" draggable="false" oncontextmenu="return false">
	            <div class="lista-software">
					<a href="https://nstudios-games.fodsoft.com/fodfru">
						<img src="https://raw.githubusercontent.com/neofodere/fodfru/main/images/icono_fodfru.png"
							class="icono-software" draggable="false" oncontextmenu="return false"> FodFru&trade;
					</a>
	            </div>
			</div>

	        <div class="header-logo">
				<a href="https://nstudios-games.fodsoft.com/">
		        	<img src="https://resources.fodsoft.com/images/webp/nstudios_games_header.webp" class="logo-header"
						draggable="false" oncontextmenu="return false;">
				</a>
            </div>

            <nav class="links-header">
                <a href="https://nstudios-games.fodsoft.com" class="link-header-base link-header-nsg" data-idioma="inicio">
					<img src="https://resources.fodsoft.com/images/webp/icono_inicio.webp"
						class="icono-header invertir-color" draggable="false" oncontextmenu="return false"> Home
				</a>
				<a href="https://fodsoft.com" class="link-header-base link-header-nsg" data-idioma="software">
					<img src="https://resources.fodsoft.com/images/webp/icono_soft.webp"
						class="icono-header invertir-color" draggable="false" oncontextmenu="return false"> Software
				</a>
				<a href="https://neofodere.fodsoft.com" class="link-header-base link-header-nsg" data-idioma="acerca">
					<img src="https://resources.fodsoft.com/images/webp/icono_acerca.webp"
						class="icono-header invertir-color" draggable="false" oncontextmenu="return false"> About
				</a>
            </nav>

			<div class="menu-nav">
				<img src="https://resources.fodsoft.com/images/webp/icono_menu.webp"
         			class="icono-lista-nav invertir-color" draggable="false" oncontextmenu="return false">
				<div class="lista-nav">
					<a href="https://nstudios-games.fodsoft.com/" data-idioma="inicio">
						<img src="https://resources.fodsoft.com/images/webp/icono_inicio.webp"
							class="icono-software" draggable="false" oncontextmenu="return false"> Inicio
					</a>
					<a href="https://fodsoft.com/" data-idioma="software">
						<img src="https://resources.fodsoft.com/images/webp/icono_soft.webp"
							class="icono-software" draggable="false" oncontextmenu="return false"> Software
					</a>
					<a href="https://neofodere.fodsoft.com/" data-idioma="acerca">
						<img src="https://resources.fodsoft.com/images/webp/icono_acerca.webp"
							class="icono-software" draggable="false" oncontextmenu="return false"> About
					</a>
				</div>
			</div>
        </div>
	`;

	const nsg_footer = `

	`;

    const headerFodsoft = document.getElementById("header-fodsoft");
	const footerFodsoft = document.getElementById("footer-fodsoft");
    if (headerFodsoft && footerFodsoft)
	{
        headerFodsoft.innerHTML = fodsoft_header;
		footerFodsoft.innerHTML = fodsoft_footer;
	}

    const headerNSG = document.getElementById("header-nsg");
    if (headerNSG)
        headerNSG.innerHTML = nsg_header;
});
// FODSOFT(TM). Neo Fodere de Frutos. All rights reserved.
