// Obtener los elementos necesarios
const form = document.getElementById('formAgregarPersonaje');
const personajesLista = document.getElementById('personajes-lista');

// Función para cargar los personajes del localStorage
function cargarPersonajes() {
    // Obtener los personajes almacenados en el localStorage
    const personajes = JSON.parse(localStorage.getItem('personajes')) || [];
    
    // Limpiar la lista antes de volver a cargarla
    personajesLista.innerHTML = '';

    // Mostrar todos los personajes en la página
    personajes.forEach(personaje => {
        const div = document.createElement('div');
        div.classList.add('personaje');
        div.innerHTML = `
            <h3>${personaje.nombre}</h3>
            <p><strong>Rol:</strong> ${personaje.rol}</p>
            <p><strong>Universo:</strong> ${personaje.universo}</p>
            <p><strong>Poder:</strong> ${personaje.poder}</p>
            <p><strong>Tipo Poder:</strong> ${personaje.tipoPoder}</p>
            <p><strong>Debilidad:</strong> ${personaje.debilidad}</p>
            <p><strong>Tipo Debilidad:</strong> ${personaje.tipoDebilidad}</p>
            <p><strong>Puntos de Poder:</strong> ${personaje.puntosPoder}</p>
            <p><strong>Nivel de Poder:</strong> ${personaje.nivelPoder}</p>
        `;
        personajesLista.appendChild(div);
    });
}

// Función para agregar un personaje al localStorage
form.addEventListener('submit', function(event) {
    event.preventDefault(); // Evitar el envío del formulario

    // Obtener los datos del formulario
    const nuevoPersonaje = {
        nombre: document.getElementById('nombre').value,
        rol: document.getElementById('rol').value,
        universo: document.getElementById('universo').value,
        poder: document.getElementById('poder').value,
        tipoPoder: document.getElementById('tipoPoder').value,
        debilidad: document.getElementById('debilidad').value,
        tipoDebilidad: document.getElementById('tipoDebilidad').value,
        puntosPoder: document.getElementById('puntosPoder').value,
        nivelPoder: document.getElementById('nivelPoder').value
    };

    // Obtener los personajes almacenados, o un array vacío si no existen
    const personajes = JSON.parse(localStorage.getItem('personajes')) || [];

    // Agregar el nuevo personaje al array
    personajes.push(nuevoPersonaje);

    // Guardar el array actualizado en el localStorage
    localStorage.setItem('personajes', JSON.stringify(personajes));

    // Limpiar los campos del formulario
    form.reset();

    // Volver a cargar la lista de personajes
    cargarPersonajes();
});

// Cargar los personajes cuando la página se carga
window.onload = cargarPersonajes;
