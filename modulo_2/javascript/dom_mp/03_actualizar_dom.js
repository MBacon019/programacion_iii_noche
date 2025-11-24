const mensaje = document.getElementById("mensaje");
mensaje.textContent = "PUERTA CAMBIADA: Puerta 12 asignada";
mensaje.style.color = "darkred";

const link = document.getElementById("link");
link.setAttribute('href', 'https://www.aena.es');
link.classList.add('boton');
link.textContent = "Ir a Estado de Vuelos";
