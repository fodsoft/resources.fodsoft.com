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
		<select id="lista-idiomas">
			<option value="en">EN</option>
			<option value="es">ES</option>
			<option value="fr">FR</option>
		</select>
    `;
	document.getElementById("lista-idiomas").addEventListener("change", (e) => 
	{
		cambiarIdioma(e.target.value);
    });
});

async function cambiarIdioma(idioma)
{
    if (idioma === "en")
		return;
    const res = await fetch("https://resources.fodsoft.com/traducciones.json");
    const traducciones = await res.json();
    if (!traducciones[idioma])
		return;
    document.querySelectorAll("[data-idioma]").forEach(texto =>
	{
		const clave = texto.getAttribute("data-idioma");
        if (traducciones[idioma][clave])
		{
            const padre = texto.parentElement;
            padre.childNodes.forEach(node => 
			{
                if (node.nodeType === Node.TEXT_NODE)
                    node.textContent = " " + traducciones[idioma][clave];
			});
		}
    });
}
// FODSOFT(TM). Neo Fodere de Frutos. All rights reserved.
