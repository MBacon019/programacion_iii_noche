class Controlador {
    private password: string = 'control123';
    public username: string;
    constructor(username: string) {
        this.username = username;
    }
    autenticar(password: string): boolean {
        return password === this.password;
    }
}

const user = new Controlador('laura');
const autenticacion = user.autenticar('control123');
if (autenticacion) {
    console.log(`Controlador autenticado con éxito`);
} else {
    console.log('Acceso denegado');
}
