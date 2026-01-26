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
// FODSOFT(TM). Neo Fodere de Frutos. All rights reserved.
