function mostrarFormulario() {
    const tipo = document.getElementById("calculoSeleccionado").value;
    const form = document.getElementById("formulario");
    form.innerHTML = "";
    document.getElementById("resultado").innerHTML = "";
    if (tipo === "Velocidad") {
        form.innerHTML = `
            <label>Distancia (d): <input type="number" id="d" step="any"></label>
            <label>Tiempo (t): <input type="number" id="t" step="any"></label>
            <button type="button" onclick="calcularVelocidad()">Calcular</button>
        `;
    } else if (tipo === "Aceleracion") {
        form.innerHTML = `
            <label>Velocidad (v): <input type="number" id="v" step="any"></label>
            <label>Tiempo (t): <input type="number" id="t" step="any"></label>
            <button type="button" onclick="calcularAceleracion()">Calcular</button>
        `;
    } else if (tipo === "Fuerza") {
        form.innerHTML = `
            <label>Masa (m): <input type="number" id="m" step="any"></label>
            <label>Aceleracion (a): <input type="number" id="a" step="any"></label>
            <button type="button" onclick="calcularFuerza()">Calcular</button>
        `;
    } else if (tipo === "Trabajo") {
        form.innerHTML = `
            <label>Fuerza (f): <input type="number" id="f" step="any"></label>
            <label>desplazamiento (d): <input type="number" id="d" step="any"></label>
            <label>Angulo (a): <input type="number" id="x" step="any"></label>
            <button type="button" onclick="calcularTrabajo()">Calcular</button>
        `;
    }  else if (tipo === "Cinetica") {
        form.innerHTML = `
            <label>masa (m): <input type="number" id="m" step="any"></label>
            <label>Velocidad (v): <input type="number" id="v" step="any"></label>
            <button type="button" onclick="calcularEnergiaCinetica()">Calcular</button>
        `;
    } else if (tipo === "EGravitatoria") {
        form.innerHTML = `
            <label>masa (m): <input type="number" id="m" step="any"></label>
            <label>Altura (h): <input type="number" id="h" step="any"></label>
            <button type="button" onclick="calcularEnergiaPotencialGravitatoria()">Calcular</button>
        `;
    } else if (tipo === "Densidad") {
        form.innerHTML = `
            <label>Masa (m): <input type="number" id="m" step="any"></label>
            <label>Volumen (v): <input type="number" id="v" step="any"></label>
            <button type="button" onclick="calcularDensidad()">Calcular</button>
        `;
    } else if (tipo === "Presion") {
        form.innerHTML = `
            <label>Fuerza (f): <input type="number" id="f" step="any"></label>
            <label>Area (a): <input type="number" id="a" step="any"></label>
            <button type="button" onclick="calcularPresion()">Calcular</button>
        `;
    } else if (tipo === "CargaElectrica") {
        form.innerHTML = `
            <label>Corriente (i): <input type="number" id="i" step="any"></label>
            <label>Tiempo (t): <input type="number" id="a" step="any"></label>
            <button type="button" onclick="calcularCargaElectrica()">Calcular</button>
        `;
    } else if (tipo === "ohm") {
        form.innerHTML = `
            <label>Corriente (i): <input type="number" id="i" step="any"></label>
            <label>Resistencia (r): <input type="number" id="r" step="any"></label>
            <button type="button" onclick="calcularHom()">Calcular</button>
        `;
    }
} function calcularVelocidad() {
    const d = parseFloat(document.getElementById("d").value);
    const t = parseFloat(document.getElementById("t").value);
       const resultado =d/t;
    document.getElementById("resultado").innerText = `Velocidad es de: ${resultado}`;
} function calcularAceleracion() {
    const v = parseFloat(document.getElementById("v").value);
    const t = parseFloat(document.getElementById("t").value);
    const resultado = v/t;
    document.getElementById("resultado").innerText = `Aceleracion es: ${resultado}`;
} function calcularFuerza() {
    const m = parseFloat(document.getElementById("m").value);
    const a = parseFloat(document.getElementById("a").value);
    const resultado = m*a;
        document.getElementById("resultado").innerText = `Fuerza es de: ${resultado}`;
} function calcularTrabajo() {
    const f = parseFloat(document.getElementById("f").value);
    const d = parseFloat(document.getElementById("d").value);
    let x = parseFloat(document.getElementById("a").value);
    const resultado = f*d*Math.cos(a);
    document.getElementById("resultado").innerText = `Trabajo es de: ${resultado}`;
} function calcularEnergiaCinetica() {
    const m = parseFloat(document.getElementById("m").value);
    const v = parseFloat(document.getElementById("v").value);
    const resultado = ((1/2)*m*(v*v));
    document.getElementById("resultado").innerText = `Energia cinetica es: ${resultado}`;
} function calcularEnergiaPotencialGravitatoria() {
    const m = parseFloat(document.getElementById("m").value);
    const h = parseFloat(document.getElementById("h").value);
    const resultado = (m*h*9.8);
    document.getElementById("resultado").innerText = `Energia potencial gravitatoria es de: ${resultado}`;
} function calcularDensidad() {
    const m = parseFloat(document.getElementById("m").value);
    const v = parseFloat(document.getElementById("v").value);
    const resultado = (m/v);
    document.getElementById("resultado").innerText = `Densidad es de: ${resultado}`; 
} function calcularPresion() {
    const f = parseFloat(document.getElementById("f").value);
    const a = parseFloat(document.getElementById("a").value);
    const resultado = (f/a);
    document.getElementById("resultado").innerText = `Presion es de: ${resultado}`;
} function calcularCargaElectrica() {
    const i = parseFloat(document.getElementById("i").value);
    const t = parseFloat(document.getElementById("a").value);
    const resultado = (i*t);
    document.getElementById("resultado").innerText = `Carga electrica es de: ${resultado}`;
} function calcularHom() {
    const i = parseFloat(document.getElementById("i").value);
    const r = parseFloat(document.getElementById("r").value);
    const resultado = (i*r);
    document.getElementById("resultado").innerText = `Resultado es de: ${resultado}`;
} 