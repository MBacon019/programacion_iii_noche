
const caja = document.getElementById("caja");
caja.addEventListener('mouseover', () => {
    caja.style.background = "yellow";
    caja.textContent = 'Pista ocupada - atención';
});

caja.addEventListener('mouseout', () => {
    caja.style.background = "lightgray";
    caja.textContent = 'Zona de pista';
});

caja.addEventListener('click', () => {
    alert("Pista seleccionada (simulación)");
});
