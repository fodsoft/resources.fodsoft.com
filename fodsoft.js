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
    const menu = document.querySelector(".lista-software");
    const icono = document.querySelector(".icono-lista");
    if (icono.contains(e.target))
        menu.style.display = menu.style.display === "flex" ? "none" : "flex";
    else
        menu.style.display = "none";
});
// FODSOFT(TM). Neo Fodere de Frutos. All rights reserved.

