/* FVAX Interpreter for Broswers by Néo Foderé de Frutos */

async function fvax_interpreter(url)
{
	const respuesta_http = await fetch(url);
	const buffer = await respuesta_http.arrayBuffer();
	const dv = new DataView(buffer);
	if (leer_str(dv, 0, 6) !== "[FVAX]")
		throw new Error("Invalid FVAX");
	let desplazamiento = 0;
	desplazamiento += 6;
	const texto_copyright = leer_str(dv, desplazamiento, 62);
	desplazamiento += 62;
	desplazamiento += 32;
	const tamano_encabezado = dv.getUint16(desplazamiento, true); desplazamiento += 2;
	const ancho_video = dv.getUint16(desplazamiento, true); desplazamiento += 2;
	const alto_video = dv.getUint16(desplazamiento, true); desplazamiento += 2;
    const canales_audio = dv.getUint16(desplazamiento, true); desplazamiento += 2;
    const numerador_fps = dv.getUint32(desplazamiento, true); desplazamiento += 4;
    const denominador_fps = dv.getUint32(desplazamiento, true); desplazamiento += 4;
    const total_frames = dv.getUint32(desplazamiento, true); desplazamiento += 4;
    const frecuencia_audio = dv.getUint32(desplazamiento, true); desplazamiento += 4;

    desplazamiento += 4;

    const pos_video = Number(leer_u64(dv, desplazamiento)); desplazamiento += 8;
    const tam_video = Number(leer_u64(dv, desplazamiento)); desplazamiento += 8;
    const pos_audio = Number(leer_u64(dv, desplazamiento)); desplazamiento += 8;
    const tam_audio = Number(leer_u64(dv, desplazamiento)); desplazamiento += 8;
    const tam_archivo = leer_u64(dv, desplazamiento); desplazamiento += 8;

    const bytes_video = new Uint8Array(buffer, pos_video, tam_video);
    const binarios = [];
    binarios.push(hex(
        "1A45DFA3" +
        "4286 81 01" +
        "42F7 81 01" +
        "42F2 81 04" +
        "42F3 81 08" +
        "4282 84 7765626D" +
        "4287 81 02" +
        "4285 81 02"
    ));
    binarios.push(hex("18538067"));
    binarios.push(hex("01FFFFFFFFFFFFFF"));
    binarios.push(hex("1549A966"));
    binarios.push(hex("02FFFFFFFFFFFFFF"));
    binarios.push(hex("2AD7B18101"));
    binarios.push(hex("1654AE6B"));
    binarios.push(hex("02FFFFFFFFFFFFFF"));
    binarios.push(hex("AE"));
    binarios.push(hex("8F"));
    binarios.push(hex("D7 81 01"));
    binarios.push(hex("73C5 81 01"));
    binarios.push(hex("83 81 01"));
    binarios.push(hex("86 84 61763031"));
    binarios.push(hex("E0 8A"));
    binarios.push(hex("B0 82" + u16(ancho_video)));
    binarios.push(hex("BA 82" + u16(alto_video)));
    binarios.push(hex("1F43B675"));
    binarios.push(hex("02FFFFFFFFFFFFFF"));
    binarios.push(hex("E7 81 00"));
    let posicion_relativa = 32;
    while (posicion_relativa + 12 <= bytes_video.length)
    {
        const tam_frame =
            bytes_video[posicion_relativa] |
            (bytes_video[posicion_relativa + 1] << 8) |
            (bytes_video[posicion_relativa + 2] << 16) |
            (bytes_video[posicion_relativa + 3] << 24);
        const inicio_frame = posicion_relativa + 12;
        const fin_frame = inicio_frame + tam_frame;
        if (fin_frame > bytes_video.length) 
            break;
        const frame = bytes_video.slice(inicio_frame, fin_frame);
        binarios.push(hex("A3"));
        binarios.push(hex("81"));
        binarios.push(new Uint8Array([0x81]));
        binarios.push(frame);
        posicion_relativa = fin_frame;
    }
    return new Blob(binarios, { type: "video/webm" });
}

function leer_str(dv, offset, len)
{
    let str = "";
    for (let pos = 0; pos < len; pos++)
    {
        const codigo = dv.getUint8(offset + pos);
        if (codigo === 0)
            break;
        str += String.fromCharCode(codigo);
    }
    return str;
}

function leer_u64(dv, offset)
{
    const bytes_01 = dv.getUint32(offset, true);
    const bytes_02 = dv.getUint32(offset + 4, true);
    return ((BigInt(bytes_02) << 32n) | BigInt(bytes_01));
}

function hex(str)
{
    str = str.replace(/\s+/g, "");
    const salida = new Uint8Array(str.length / 2);
    for (let pos = 0; pos < salida.length; pos++)
        salida[pos] = parseInt(str.substr(pos * 2, 2), 16);
    return salida;
}

function u16(num)
{
    return num.toString(16).padStart(4, "0");
}

document.querySelectorAll("video").forEach(videoFvax => 
{
    const src = videoFvax.getAttribute("src");
    if (!src) 
        return;
    if (src.endsWith(".fvax") && (location.hostname === "fodsoft.com" || location.hostname.endsWith(".fodsoft.com")))
    {
        fvax_interpreter(src).then(blob => 
        {
            videoFvax.src = URL.createObjectURL(blob);
        });
    }
});
// FODSOFT(TM). Neo Fodere de Frutos. All rights reserved.
