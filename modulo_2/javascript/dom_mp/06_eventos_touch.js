const area_touch = document.getElementById("area_touch");    
area_touch.addEventListener("touchstart", ()=>{
    area_touch.style.backgroundColor="purple";
    area_touch.textContent = 'TOUCH START - panel de control';
});
area_touch.addEventListener("touchend", ()=>{
    area_touch.style.backgroundColor="blue";
    area_touch.textContent = '';
    alert("TOUCH END - interacción de control de vuelos");
});
