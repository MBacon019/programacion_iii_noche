console.log("FUNCIONES");
console.log("Funcion simple");

function saludar(){
    console.log("Hola de MARCELO BACON ");
}
saludar();


console.log("Funcion con parametros");
function sumar(a,b){
    return a+b;
}
console.log("resultado de la suma es:", sumar(5,8));

console.log("Funcion flecha");
const functionflecha=()=>{
    console.log("Saludando desde una funcion flecha");
}
functionflecha();


const multiplicacion=(n,m)=>{
   return n*m;
}

console.log( multiplicacion(7,7));
console.log("Funcion retorno directo");
const Cuadrado = x=>x*x;
console.log(Cuadrado(5));

console.log("Funcion con parametros por defecto");
function division(z, k=3){
    return z/k;
}
console.log("resultado de la division es:", division(40,8));    
console.log("resultado de la division es:", division(40));