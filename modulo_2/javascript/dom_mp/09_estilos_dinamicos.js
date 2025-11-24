const cuadro = document.getElementById('cuadro');

function cambiarColor() {
  const colores = ['#58a6ff', '#ff7b72', '#00ff00', '#ff00ff', '#ffff00'];
  const randomColor = colores[Math.floor(Math.random() * colores.length)];
  cuadro.style.backgroundColor = randomColor;
}

function aumentarTamano() {
  const currentWidth = cuadro.offsetWidth || 100;
  const currentHeight = cuadro.offsetHeight || 100;
  cuadro.style.width = (currentWidth + 20) + 'px';
  cuadro.style.height = (currentHeight + 20) + 'px';
}

function reiniciar() {
  cuadro.style.width = '100px';
  cuadro.style.height = '100px';
  cuadro.style.backgroundColor = '#58a6ff';
}
