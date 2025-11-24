const vuelos = [
  { vuelo: "AA123", aerolinea: "AeroOne", estado: "En horario", puerta: "A12", hora: "08:30" },
  { vuelo: "BA456", aerolinea: "BlueAir", estado: "Retrasado", puerta: "B3", hora: "09:15" },
  { vuelo: "CX789", aerolinea: "CloudX", estado: "Abordando", puerta: "C1", hora: "10:00" },
  { vuelo: "DL012", aerolinea: "DeltaLocal", estado: "Cancelado", puerta: "-", hora: "--:--" },
  { vuelo: "EK345", aerolinea: "EmirSky", estado: "En horario", puerta: "D5", hora: "11:20" }
];

const tabla = document.getElementById('cuerpoTabla');
vuelos.forEach(v => {
  const fila = document.createElement('tr');
  fila.innerHTML = `
    <td>${v.vuelo}</td>
    <td>${v.aerolinea}</td>
    <td>${v.estado}</td>
    <td>${v.puerta}</td>
    <td>${v.hora}</td>
  `;
  tabla.appendChild(fila);
});
