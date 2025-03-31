let personajes = [];

document.getElementById("form-personaje").addEventListener("submit", function(e) {
  e.preventDefault();
  const personaje = {
    nombre: document.getElementById("nombre").value,
    rol: document.getElementById("rol").value,
    universo: document.getElementById("universo").value,
    poder: document.getElementById("poder").value,
    tipoPoder: document.getElementById("tipo_poder").value,
    debilidad: document.getElementById("debilidad").value
