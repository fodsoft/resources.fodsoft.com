document.addEventListener("DOMContentLoaded", () => 
{
	const selectorIdiomas = document.getElementById("selector-idiomas");
	selectorIdiomas.innerHTML = `
		<select id="fs-lang">
			<option value="en">EN</option>
			<option value="es">ES</option>
			<option value="fr">FR</option>
		</select>
	`;
});

document.addEventListener("click", (e) =>
{
    const menuSoft = document.querySelector(".lista-software");
    if (e.target.closest(".icono-lista-software"))
        menuSoft.style.display = menuSoft.style.display === "flex" ? "none" : "flex";
    else
        menuSoft.style.display = "none";
    const menuNav = document.querySelector(".lista-nav");
    if (e.target.closest(".icono-lista-nav"))
        menuNav.style.display = menuNav.style.display === "flex" ? "none" : "flex";
    else
        menuNav.style.display = "none";
});

document.addEventListener("DOMContentLoaded", async () =>
{
	function soportaWebP()
	{
		return new Promise(resolve =>
		{
			const img = new Image();
			img.onload = () => resolve(img.width > 0);
			img.onerror = () => resolve(false);
			img.src = "data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBgAAAAwAQCdASoEAAQAAVAfCWkA";
		});
	}

	function esChromium()
	{
		return (!!window.chrome);
	}

	function fallbackPNG(img)
	{
		let src = img.src;
		if (src.includes("/webp/") && src.endsWith(".webp"))
		{
			src = src.replace("/webp/", "/png/").replace(".webp", ".png");
			img.src = src;
		}
	}

	const webpOK = await soportaWebP();
	const chromiumOK = esChromium();
	const imagenes = document.querySelectorAll("img");
	if (!webpOK || !chromiumOK)
	{
		imagenes.forEach(img =>
		{
			let src = img.src;
			if (src.includes("/webp/") && src.endsWith(".webp"))
			{
				src = src.replace("/webp/", "/png/").replace(".webp", ".png");
				img.src = src;
			}
			img.onerror = () => fallbackPNG(img);
		});
		return;
	}
	imagenes.forEach(img =>
	{
		img.onerror = () => fallbackPNG(img);
	});
});
// FODSOFT(TM). Neo Fodere de Frutos. All rights reserved.
