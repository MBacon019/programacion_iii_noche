interface ControladorLogin {
    id: number;
    username: string;
    correo: string;
    password: string;
}

const controlador: ControladorLogin = {
    id: 1,
    username: 'control001',
    correo: 'control@aeropuerto.test',
    password: 'seguro123'
};

function login(usuario: ControladorLogin): void {
    if (usuario.password === 'seguro123' && usuario.username === 'control001') {
        console.log('Controlador autenticado correctamente');
        console.log(`Usuario ${usuario.username} ha iniciado sesión`);
    } else {
        console.log('Error de autenticación');
    }
}

login(controlador);
