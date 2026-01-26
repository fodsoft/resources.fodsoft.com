(function() 
{
    if (location.hostname.endsWith("archive.org"))
        return;
    if (!location.hostname.endsWith("fodsoft.com") || window.top !== window.self) 
    {
        document.open();
        document.write("");
        document.close();
        const html = document.documentElement || document.createElement("html");
        const body = document.body || document.createElement("body");
        const p = document.createElement("p");
        const a = document.createElement("a");
        p.textContent = "The FODSOFT™ website cannot be loaded outside the https://fodsoft.com domain.";
        p.style.fontFamily = "sans-serif";
        p.style.fontSize = "20px";
        p.style.padding = "40px";
        p.style.textAlign = "center";
        a.href = "https://fodsoft.com";
        a.target = "_blank";
        a.textContent = "Go to the FODSOFT™ home page";
        a.style.display = "block";
        a.style.textAlign = "center";
        a.style.marginTop = "20px";
        a.style.fontFamily = "sans-serif";
        body.appendChild(p);
        body.appendChild(a);
        html.appendChild(body);
        if (!document.documentElement)
            document.appendChild(html);
    }
})();
// FODSOFT(TM). Neo Fodere de Frutos. All rights reserved.
