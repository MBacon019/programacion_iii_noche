abstract class ComponenteAeropuerto {
    abstract estado(): void;
    operar(): void {
        console.log('El componente del aeropuerto está operativo');
    }
}

class TorreControl extends ComponenteAeropuerto {
    estado(): void {
        console.log('Torre de control: operativa y en comunicación');
    }
}

const torre = new TorreControl();
torre.estado();
torre.operar();
