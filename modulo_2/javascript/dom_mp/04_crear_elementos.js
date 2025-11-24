let parrafo = null;
const btnCrear = document.getElementById("crear");
const contenedor = document.getElementById("contenedor");
btnCrear.addEventListener('click', () => {
    parrafo = document.createElement('p');
    parrafo.textContent = 'Vuelo dinámico creado (Ejemplo)';
    parrafo.classList.add('parrafo');
    contenedor.appendChild(parrafo);
});

const btnEliminar = document.getElementById('eliminar')
btnEliminar.addEventListener('click', () => {
    const parrafos = document
        .getElementsByClassName('parrafo');
    Array.from(parrafos)
        .forEach(parrafo => parrafo.remove());

});

const btnDobleClick = document.getElementById('btnDobleClick')
btnDobleClick.addEventListener('dblclick', () => {
    alert("Doble click en Control de Vuelos");
});

const inputText = document.getElementById('nombre')
inputText.addEventListener('input', (e) => {
    console.log('Escribiendo número de vuelo:' , e.target.value);
});

const form = document.getElementById('formulario')
form.addEventListener('submit', (e) => {
    e.preventDefault();
    const vuelo = inputText.value.trim();
    if (vuelo) {
        const p = document.createElement('p');
        p.textContent = `Vuelo agregado: ${vuelo}`;
        contenedor.appendChild(p);
        form.reset();
    }
});

inputText.addEventListener('keydown', (e) => {
    console.log('Tecla presionada :', e.key);
});
window.addEventListener('scroll', () => {
    console.log('Scroll detectado en panel de control');
});
