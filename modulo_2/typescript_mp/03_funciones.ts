function saludarControlador(): string {
    return 'Bienvenido al panel de Control de Vuelos';
}

console.log(saludarControlador());

function calcularRetraso(minutos: number): string {
    if (minutos <= 0) return 'A tiempo';
    if (minutos < 30) return 'Retraso leve';
    return 'Retraso importante';
}

console.log(calcularRetraso(0));
console.log(calcularRetraso(15));
console.log(calcularRetraso(45));

function asignarPuerta(vuelo: string, puerta?: string): string {
    return `Vuelo ${vuelo} asignado a puerta ${puerta ?? 'pendiente'}`;
}

console.log(asignarPuerta('AA123', 'A12'));
console.log(asignarPuerta('BA456'));

const sumarPasajeros = (a: number, b: number): number => a + b;
console.log('Total pasajeros:', sumarPasajeros(120, 35));

function imprimirMensaje(mensaje: string): void {
    console.log(mensaje);
}
imprimirMensaje('Mensaje desde Control de Vuelos');
