/* FVAX Web Interpreter by Neo Fodere de Frutos */

function leer_str(dv, offset, len)
{
    let str = "";
    for (let pos = 0; pos < len; pos++)
    {
        const chr = dv.getUint8(offset + pos);
        if (chr === 0) 
            break;
        str += String.fromCharCode(chr);
    }
    return (str);
}

function leer_u64(dv, offset)
{
    const bytes_01 = dv.getUint32(offset, true);
    const bytes_02 = dv.getUint32(offset + 4, true);
    return ((BigInt(bytes_02) << 32n) | BigInt(bytes_01));
}

async function fvax_interpreter(url)
{
    const respuesta = await fetch(url);
    const buffer = await respuesta.arrayBuffer();
    const dv = new DataView(buffer);
    if (leer_str(dv, 0, 6) !== "[FVAX]")
        return;
    let offset = 0;
    offset += 6;
    offset += 62;
    offset += 32;
    offset += 2;
    offset += 2;
    offset += 2;
    offset += 2;
    offset += 4;
    offset += 4;
    offset += 4;
    offset += 4;
    offset += 4;
    const pos_video = Number(leer_u64(dv, offset)); offset += 8;
    const tam_video = Number(leer_u64(dv, offset)); offset += 8;
    offset += 8;
    offset += 8;
    offset += 8;
    const bytes_webm = new Uint8Array(buffer, pos_video, tam_video);
    return (new Blob([bytes_webm], { type: "video/webm" }));
}

document.addEventListener("DOMContentLoaded", () =>
{
    if (location.hostname === "fodsoft.com" || location.hostname.endsWith(".fodsoft.com"))
    {
        document.querySelectorAll("video").forEach(video =>
        {
            const src = video.getAttribute("src");
            const tipo = video.getAttribute("type");
            const es_fvax = (src && src.endsWith(".fvax")) || (tipo && tipo.toLowerCase() === "video/fvax");
            if (!es_fvax) 
                return;
            fvax_interpreter(src).then(blob =>
            {
                video.src = URL.createObjectURL(blob);
            })
        });
    }
});
// FODSOFT(TM). Neo Fodere de Frutos. All rights reserved.
