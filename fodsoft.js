(function() 
{
    if (location.hostname.endsWith("archive.org"))
        return;
    if (window.top !== window.self) 
    {
        document.documentElement.innerHTML = "";
        const txt = document.createElement("p");
        txt.textContent = "The FODSOFT™ website cannot be loaded outside the https://fodsoft.com domain.";
        txt.style.fontFamily = "sans-serif";
        txt.style.fontSize = "20px";
        txt.style.padding = "40px";
        txt.style.textAlign = "center";
        document.documentElement.appendChild(txt);
    }
})();

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
// FODSOFT(TM). Neo Fodere de Frutos. All rights reserved.
