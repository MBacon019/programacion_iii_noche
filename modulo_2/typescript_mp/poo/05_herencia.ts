export class VehiculoAereo {
    public fabricante: string;
    constructor(fabricante: string) {
        this.fabricante = fabricante;
    }
    mostrarFabricante(): void {
        console.log(this.fabricante, 'fabricante registrado');
    }
}

class Avion extends VehiculoAereo {};
const miAvion = new Avion('Boeing');
miAvion.mostrarFabricante();
