document.addEventListener("DOMContentLoaded", () => 
{
	const header = `
		<div class="header">
            <div class="logo-header">
                <img src="https://resources.fodsoft.com/images/webp/fodsoft_header.webp" class="fs-header-logo">
            </div>
            <nav class="links-header">
                <a href="https://fodsoft.com" class="link-header">Home</a>
                <a href="https://nstudios-games.fodsoft.com" class="link-headerm">Games</a>
                <a href="https://neofodere.fodsoft.com" class="link-header">About</a>
                <div id="language-selector"></div>
            </nav>
        </div>
	`;
    document.getElementById("dynamic-header").innerHTML = header;
});
// FODSOFT(TM). Neo Fodere de Frutos. All rights reserved.
