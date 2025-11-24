interface UsuarioLogin {
    id: number;
    username: string;
    correo: string;
    password: string;
}

const usuario1: UsuarioLogin = {
    id: 1,
    username: "Mateo",
    correo: "mateoalba1234@gmail.com",
    password: "12345" 
};

function login(usuario: UsuarioLogin): void {
    if (usuario.password =='12345' && usuario.username == 'Mateo') {
        console.log('Usuario auternticado correctamente');
        console.log('usuario ${usuario.username} ha iniciado sesion');
        console.log('usuario', usuario.username, 'Exitosamente autenticado');
        console.log('usuario' + usuario.username + 'Exitosamente autenticado');
    } else {
        console.log('Error de autenticacion');
    }
}

login(usuario1);