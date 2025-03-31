let personajes = [
    { nombre: "Naruto", rol: "Protagonista", poder: "Rasengan", nivelPoder: 100 },
    { nombre: "Sasuke", rol: "Rival", poder: "Chidori", nivelPoder: 98 }
];

function actualizarTabla() {
    let tabla = document.getElementById("tablaPersonajes");
    let comparar1 = document.getElementById("comparar1");
    let comparar2 = document.getElementById("comparar2");
    tabla.innerHTML = "";
    comparar1.innerHTML = "";
    comparar2.innerHTML = "";
    personajes.forEach(p => {
        let fila = `<tr><td>${p.nombre}</td><td>${p.rol}</td><td>${p.poder}</td><td>${p.nivelPoder}</td></tr>`;
        tabla.innerHTML += fila;
        comparar1.innerHTML += `<option value="${p.nombre}">${p.nombre}</option>`;
        comparar2.innerHTML += `<option value="${p.nombre}">${p.nombre}</option>`;
    });
}

function agregarPersonaje() {
    let personaje = {
        nombre: document.getElementById("nombre").value,
        rol: document.getElementById("rol").value,
        poder: document.getElementById("poder").value,
        nivelPoder: parseInt(document.getElementById("nivelPoder").value)
    };
    personajes.push(personaje);
    actualizarTabla();
}

function compararPersonajes() {
    let p1 = personajes.find(p => p.nombre === document.getElementById("comparar1").value);
    let p2 = personajes.find(p => p.nombre === document.getElementById("comparar2").value);
    let resultado = "";
    if (p1.nivelPoder > p2.nivelPoder) {
        resultado = `${p1.nombre} es más fuerte que ${p2.nombre}`;
    } else if (p1.nivelPoder < p2.nivelPoder) {
        resultado = `${p2.nombre} es más fuerte que ${p1.nombre}`;
    } else {
        resultado = "Ambos tienen el mismo nivel de poder";
    }
    document.getElementById("resultadoComparacion").innerText = resultado;
}

actualizarTabla();
