console.log("CICLOS O BUCLES");
console.log("FOR OF");

const nombres =["Jose","Juan","Pedro","Simon"];
for (const nombre of nombres){
    console.log("Hola", nombre);
}

const nombre ="Marcelo";
for (const letra of nombres){
    console.log("LETRA", letra);
}

const numeros = [2, 4, 8, 6, 3, 19,20];

let mayor = numeros[0];

for (const numero of numeros) {
    if (numero > mayor) {
        mayor = numero;
    }
}

console.log("El número mayor es:", mayor);

const persona={
    nombre: "Anakin",
    apellido: "Skywalker",
    profesion: "Jedi"
}
for (const clave in persona){
    console.log("clave:", clave, ":",persona[clave]);
}

const libro = {
    titulo: "la niebla",
    autor: "Tolkien",
    genero: "Fantasía",
    añoPublicacion: 1954
}

for (const clave in libro) {
    console.log("clave:", clave, ":", libro[clave]);
}
suma_claves=0;
for (const clave in libro) {
    suma_claves++;
}  
console.log(suma_claves);