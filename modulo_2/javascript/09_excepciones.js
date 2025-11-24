
try{
    const user=JSON.parse('["name":"pedro":,edad:25]');
}catch(error){
    console.log("Error detectado: ", error.message);
}

try{
    console.log("Intentando abrir archivos ...");
    throw new Error('Archivo No encontrado');
}catch(error){
    console.log("Error: ", error.message);
}finally{
    console.log("Finalizo el intento de abrir archivos");
}