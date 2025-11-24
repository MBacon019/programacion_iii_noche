const formulario = document.getElementById('formulario');
const contenedor = document.getElementById('contenedorVuelos');
let vuelos = [];

formulario.addEventListener('submit', (e) => {
  e.preventDefault();
  const numero = document.getElementById('numero').value.trim();
  const aerolinea = document.getElementById('aerolinea').value.trim();
  const puerta = document.getElementById('puerta').value.trim();
  const hora = document.getElementById('hora').value;

  if (numero && aerolinea && puerta && hora) {
    const nuevoVuelo = { id: Date.now(), numero, aerolinea, puerta, hora };
    vuelos.push(nuevoVuelo);
    renderizarVuelo(nuevoVuelo);
    formulario.reset();
  }
});

function renderizarVuelo({ id, numero, aerolinea, puerta, hora }) {
  const div = document.createElement('div');
  div.className = 'vuelo';
  div.setAttribute('data-id', id);
  div.innerHTML = `
    <h3>${numero} - ${aerolinea}</h3>
    <p>Puerta: ${puerta}</p>
    <p>Hora: ${hora}</p>
    <div class="acciones"><button class="eliminar">Eliminar</button></div>
  `;
  contenedor.appendChild(div);
}

contenedor.addEventListener('click', (e) => {
  if (e.target.classList.contains('eliminar')) {
    const tarjeta = e.target.closest('.vuelo');
    const id = parseInt(tarjeta.getAttribute('data-id'));
    vuelos = vuelos.filter(v => v.id !== id);
    tarjeta.remove();
  }
});
