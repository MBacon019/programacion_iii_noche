import { VehiculoAereo } from "./05_herencia";

class Carga extends VehiculoAereo {
    private capacidadCarga: number = 0;
    setCapacidad(capacidad: number): void {
        this.capacidadCarga = capacidad;
    };
    getCapacidad(): number {
        return this.capacidadCarga;
    }
};
const miCarga = new Carga('Antonov');
miCarga.setCapacidad(20000);
console.log('capacidad', miCarga.getCapacidad(), 'kg');
miCarga.mostrarFabricante();
