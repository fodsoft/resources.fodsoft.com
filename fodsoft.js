if (fodsoft_header)
	document.body.insertAdjacentHTML("afterbegin", fodsoft_header);
else if (nsg_header)
	document.body.insertAdjacentHTML("afterbegin", nsg_header);

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
// FODSOFT(TM). Neo Fodere de Frutos. All rights reserved.
