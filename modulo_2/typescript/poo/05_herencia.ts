export class vehiculos {
    public marca: string;
    constructor(marca: string) {
        this.marca = marca;
    }  
    mostrarMarca(): void {
        console.log(this.marca, 'Se encuentra en movimiento');
    }  
}
class moto extends vehiculos {};
const miMoto = new moto('Yamaha');
miMoto.mostrarMarca();