// nSAVE Blocker - (c) Neo Fodere de Frutos. All rights reserved.
(function() 
{
    if (location.hostname.endsWith(".archive.org"))
        return;
    if ((location.hostname !== "fodsoft.com" && !location.hostname.endsWith(".fodsoft.com")) || window.frameElement || window.top !== window.self)
    {
        document.open();
        document.write("");
        document.close();
        const html = document.documentElement || document.createElement("html");
        const body = document.body || document.createElement("body");
        const img = document.createElement("img");
        const p = document.createElement("p");
        const a = document.createElement("a");
        body.style.backgroundColor = "#fff";
        body.style.display = "flex";
        body.style.flexDirection = "column";
        body.style.justifyContent = "center";
        body.style.alignItems = "center";
        body.style.height = "100vh";
        body.style.margin = "0";
        img.src = "https://resources.fodsoft.com/images/ext/icono_entrada_prohibida.png";
        img.width = 128;
        img.style.marginBottom = "20px";
        p.textContent = "The FODSOFT™ website cannot be loaded outside the fodsoft.com domain.";
        p.style.fontFamily = "sans-serif";
        p.style.fontSize = "20px";
        p.style.color = "#000";
        p.style.fontWeight = "bold";
        p.style.padding = "20px";
        p.style.textAlign = "center";
        a.href = "https://fodsoft.com";
        a.target = "_blank";
        a.textContent = "Go to the FODSOFT™ website";
        a.style.display = "block";
        a.style.textAlign = "center";
        a.style.color = "#e02b2b";
        a.style.fontWeight = "bold";
        a.style.marginTop = "10px";
        a.style.fontFamily = "sans-serif";
        body.appendChild(img);
        body.appendChild(p);
        body.appendChild(a);
        html.appendChild(body);
        if (!document.documentElement)
            document.appendChild(html);
    }
})();
// FODSOFT(TM). Neo Fodere de Frutos. All rights reserved.
