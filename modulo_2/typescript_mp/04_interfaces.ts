interface VueloInfo {
    id: number;
    numero: string;
    aerolinea: string;
    estado: string;
    puerta?: string;
}

const vueloEjemplo: VueloInfo = {
    id: 1,
    numero: 'AA123',
    aerolinea: 'AeroOne',
    estado: 'En horario',
    puerta: 'A12'
};

console.log(vueloEjemplo);
console.log('Número de vuelo', vueloEjemplo.numero);

interface ControladorInfo {
    id: number;
    nombre: string;
    puesto: string;
}

const controlador1: ControladorInfo = {
    id: 10,
    nombre: 'Laura',
    puesto: 'Control Torre'
};

console.log(controlador1);
