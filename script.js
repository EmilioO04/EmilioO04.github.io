// Obtener los elementos necesarios
const formAgregar = document.getElementById('formAgregarPersonaje');
const formBatalla = document.getElementById('formBatalla');
const formComparar = document.getElementById('formComparar');
const resultadoBatalla = document.getElementById('resultado-batalla');
const resultadoComparacion = document.getElementById('resultado-comparacion');

// Función para cargar los personajes del localStorage
function cargarPersonajes() {
    const personajes = JSON.parse(localStorage.getItem('personajes')) || [];

    // Cargar personajes en los selectores
    cargarSelectores(personajes);

    return personajes;
}

// Función para cargar los personajes en los selectores de batalla y comparar
function cargarSelectores(personajes) {
    const selector1 = document.getElementById('personaje1');
    const selector2 = document.getElementById('personaje2');
    const comparar1 = document.getElementById('comparar1');
    const comparar2 = document.getElementById('comparar2');

    // Limpiar los selectores
    selector1.innerHTML = '<option value="">Selecciona un personaje</option>';
    selector2.innerHTML = '<option value="">Selecciona un personaje</option>';
    comparar1.innerHTML = '<option value="">Selecciona un personaje</option>';
    comparar2.innerHTML = '<option value="">Selecciona un personaje</option>';

    personajes.forEach(personaje => {
        const option1 = document.createElement('option');
        option1.value = personaje.nombre;
        option1.textContent = personaje.nombre;
        selector1.appendChild(option1);

        const option2 = document.createElement('option');
        option2.value = personaje.nombre;
        option2.textContent = personaje.nombre;
        selector2.appendChild(option2);

        const optionC1 = document.createElement('option');
        optionC1.value = personaje.nombre;
        optionC1.textContent = personaje.nombre;
        comparar1.appendChild(optionC1);

        const optionC2 = document.createElement('option');
        optionC2.value = personaje.nombre;
        optionC2.textContent = personaje.nombre;
        comparar2.appendChild(optionC2);
    });
}

// Función para agregar un personaje
formAgregar && formAgregar.addEventListener('submit', function(event) {
    event.preventDefault();

    const nuevoPersonaje = {
        nombre: document.getElementById('nombre').value,
        rol: document.getElementById('rol').value,
        universo: document.getElementById('universo').value,
        poder: document.getElementById('poder').value,
        tipoPoder: document.getElementById('tipoPoder').value,
        debilidad: document.getElementById('debilidad').value,
        tipoDebilidad: document.getElementById('tipoDebilidad').value,
        puntosPoder: parseInt(document.getElementById('puntosPoder').value),
        nivelPoder: parseInt(document.getElementById('nivelPoder').value)
    };

    const personajes = JSON.parse(localStorage.getItem('personajes')) || [];
    personajes.push(nuevoPersonaje);

    localStorage.setItem('personajes', JSON.stringify(personajes));

    formAgregar.reset();
    cargarSelectores(personajes);
});

// Función para la batalla entre dos personajes
formBatalla && formBatalla.addEventListener('submit', function(event) {
    event.preventDefault();

    const personaje1 = document.getElementById('personaje1').value;
    const personaje2 = document.getElementById('personaje2').value;

    const personajes = cargarPersonajes();

    const p1 = personajes.find(p => p.nombre === personaje1);
    const p2 = personajes.find(p => p.nombre === personaje2);

    if (p1 && p2) {
        const ganador = p1.puntosPoder > p2.puntosPoder ? p1.nombre : p2.nombre;
        resultadoBatalla.innerHTML = `<h3>El ganador es: ${ganador}</h3>`;
    } else {
        resultadoBatalla.innerHTML = "<p>Selecciona dos personajes para la batalla.</p>";
    }
});

// Función para comparar dos personajes
formComparar && formComparar.addEventListener('submit', function(event) {
    event.preventDefault();

    const comparar1 = document.getElementById('comparar1').value;
    const comparar2 = document.getElementById('comparar2').value;

    const personajes = cargarPersonajes();

    const p1 = personajes.find(p => p.nombre === comparar1);
    const p2 = personajes.find(p => p.nombre === comparar2);

    if (p1 && p2) {
        const resultado = compararPersonajes(p1, p2);
        resultadoComparacion.innerHTML = `<h3>Comparación:</h3><p>${resultado}</p>`;
    } else {
        resultadoComparacion.innerHTML = "<p

