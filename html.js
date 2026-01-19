document.addEventListener("DOMContentLoaded", () => 
{
	const header = `
		<div class="header-fodsoft">
            <div class="logo-header-fodsoft">
                <img src="https://resources.fodsoft.com/images/webp/fodsoft_header.webp" class="logo-fodsoft-header"
					draggable="false" oncontextmenu="return false;">
            </div>
            <nav class="links-header-fodsoft">
                <a href="https://fodsoft.com" class="link-header-fodsoft">
    <img src="https://resources.fodsoft.com/images/webp/icono_inicio.webp"
         class="icono-header"
         draggable="false"
         oncontextmenu="return false">
    Home
</a>

<a href="https://nstudios-games.fodsoft.com" class="link-header-fodsoft">
    <img src="https://resources.fodsoft.com/images/webp/icono_juegos.webp"
         class="icono-header"
         draggable="false"
         oncontextmenu="return false">
    Games
</a>

<a href="https://neofodere.fodsoft.com" class="link-header-fodsoft">
    <img src="https://resources.fodsoft.com/images/webp/icono_acerca.webp"
         class="icono-header"
         draggable="false"
         oncontextmenu="return false">
    About
</a>

                <div id="selector-idiomas"></div>
            </nav>
        </div>
	`;
    document.getElementById("header-fodsoft").innerHTML = header;
});
// FODSOFT(TM). Neo Fodere de Frutos. All rights reserved.
