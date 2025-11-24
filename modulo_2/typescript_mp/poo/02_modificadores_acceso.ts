class Aeronave {
    public modelo: string;
    private matricula: string;
    protected capacidad: number = 0;

    constructor(modelo: string, matricula: string) {
        this.modelo = modelo;
        this.matricula = matricula;
    }

    getMatricula(): string {
        return this.matricula;
    }

    setMatricula(matricula: string): void {
        this.matricula = matricula;
    }

    getCapacidad(): number {
        return this.capacidad;
    }
}

const aer1 = new Aeronave('Boeing 737', 'EC-ABC');
console.log('Modelo', aer1.modelo);
console.log('Matrícula', aer1.getMatricula());
