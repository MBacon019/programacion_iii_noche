interface Usuario{
    id: number,
    nombre: string,
    correo: string
}

const usuario1: Usuario = {
    id: 1,
    nombre: 'Marcelo',
    correo: 'marcelo@gmail.com'
}

console.log(usuario1);
console.log(usuario1.nombre);


interface Producto{
    id: number,
    nombre: string,
    precio: number
}

const producto1: Producto ={
    id: 1,
    nombre: 'Laptop',
    precio: 500,
}

const producto2: Producto ={
    id: 2,
    nombre: 'Monitor',
}

console.log(producto1);
console.log(producto1.precio)


interface User{
    id: number,
    nombre: string,
    contraseña: string
}

const user: User = {
    id: 1,
    nombre:'Marcelo',
    contraseña: 'contraseña',
}

function login(user: User):void{
    if(user.contraseña='contraseña'){
        console.log('usuario autenticado');
    }else {
        console.log('acceso denegado');
    }
}
login(user)