window.onload = function(){
    /* Variables */
    var contenedor = document.getElementById("contenedor"),
        contentAdd = document.getElementById("contentAdd"),
        nuevoInput = document.createElement("input"),
        boton = document.getElementById("btnSave");
        nuevoInput.setAttribute("id" , "nuevoInput");
        var nuevaTarea = document.createElement("form");
    
    /* Funciones */
    function crearLista() {
        contentAdd.style.display = "none";
        contenedor.insertBefore(nuevaTarea, contenedor.childNodes[0]);
        nuevaTarea.insertBefore(nuevoInput, nuevaTarea.childNodes[0]).classList.add("styleinput");
        boton.style.display = "block";
        nuevaTarea.appendChild(boton);
        contenedor.classList.add("tarjeta");
        
    }
    
    //Eventos
    //tareaInput.addEventListener("keydown",darEnter);
    contentAdd.addEventListener("click",crearLista);
    //boton.addEventListener("click",nuevaTarjeta);
        
};