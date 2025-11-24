class Vuelo {
    numero: string;
    pasajeros: number;
    constructor(numero: string, pasajeros: number) {
        this.numero = numero;
        this.pasajeros = pasajeros;
    }
    info(): void {
        console.log(`Vuelo ${this.numero} con ${this.pasajeros} pasajeros.`);
    }
}

const vueloDemo = new Vuelo('AA123', 150);
console.log('Número de vuelo:', vueloDemo.numero);
console.log('Pasajeros:', vueloDemo.pasajeros);
vueloDemo.info();
