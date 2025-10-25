console.log("CONDICIONALES");
console.log("CONDICIONALES IF");
let temperatura=45;
if(temperatura>30){
    console.log("Hace calor");
}

console.log("CONDICIONALES IF else");
const password="passoword123";
if(password="password123"){
   console.log("Usuario logueado");
}else{
    console.log("Usuario No autorizado");
}

console.log("CONDICIONALES ANIDADOS");
const edad=19;
const tieneLicencia=false;
if(edad>18){
   if(tieneLicencia==true){
    console.log("Puede Conducir");
   }else{
    console.log("Necesita Licencia");
   }
}else{
    console.log("Es menor de edad");
}

if(edad >18 && tieneLicencia) {
    console.log("Puede conducir");
} else if(edad >18) {
    console.log("Necesita licencia para conducir");
} else {
    console.log("Es menor de edad");
}

console.log("CONDICIONAL SWITCH")
const dia = "lunes";
switch (dia) {
    case "lunes":
    case "martes":
    case "miercoles":
    case "jueves":
    case "viernes":    
        console.log("dia laboral");
        break;
    case "sabado":
    case "domingo":
        console.log("fin de semana");
        break;
    default:
        console.log("Dia no valido");
}