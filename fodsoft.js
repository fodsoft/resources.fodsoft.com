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
    document.querySelectorAll("[data-idioma]").forEach(el =>
	{
    	const clave = el.getAttribute("data-idioma");
        const traduccion = traducciones[idioma][clave];
        if (!traduccion)
            return;
        for (const node of el.childNodes)
		{
            if (node.nodeType === Node.TEXT_NODE)
			{
                const texto = node.textContent.trim();
                if (texto.length > 0)
				{
                    node.textContent = " " + traduccion;
                    break;
                }
            }
        }
    });
}
// FODSOFT(TM). Neo Fodere de Frutos. All rights reserved.
