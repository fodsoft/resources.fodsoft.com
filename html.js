document.addEventListener("DOMContentLoaded", () => 
{
	const header = `
		<div class="fs-header">
            <div class="fs-header-left">
                <img src="https://resources.fodsoft.com/images/webp/fodsoft_header.webp" class="fs-header-logo">
            </div>
            <nav class="fs-header-right">
                <a href="https://fodsoft.com" class="fs-nav-item">Home</a>
                <a href="https://nstudios-games.fodsoft.com" class="fs-nav-item">Games</a>
                <a href="https://neofodere.fodsoft.com" class="fs-nav-item">About</a>
                <div id="language-selector"></div>
            </nav>
        </div>
    `;
    document.getElementById("dynamic-header").innerHTML = header;
});
// FODSOFT(TM). Neo Fodere de Frutos. All rights reserved.
