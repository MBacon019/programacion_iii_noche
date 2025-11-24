abstract class ColaVuelosBase {
    private lista: string[] = [];
    abstract operar(): void;

    agregar(vuelo: string): void {
        this.lista.push(vuelo);
    }

    listar(): string[] {
        return this.lista;
    }
}

class ColaDespegue extends ColaVuelosBase {
    operar(): void {
        console.log('Procesando despegues...');
    }
}

const cola = new ColaDespegue();
cola.agregar('AA123');
cola.agregar('BA456');
cola.operar();
console.log('Cola:', cola.listar());
