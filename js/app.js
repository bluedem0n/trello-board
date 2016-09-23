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
    
     function nuevaTarjeta(){
    nuevaTarea.style.display = "none";  
	var contenedorTarjeta = document.createElement("div");
	var newTarjeta = contenedor.appendChild(contenedorTarjeta);
    var titulo = document.getElementById("nuevoInput").value;        
    var contenedorTitulo = document.createElement("div");   
    contenedorTitulo.classList.add("contenedorTitulo");  
    contenedorTitulo.textContent = titulo;    
	var enlace = document.createElement("a"); 
    contenedorTitulo.appendChild(enlace);
    enlace.innerHTML = "Agregar una nueva Tarea...";   
    contenedorTarjeta.appendChild(contenedorTitulo); 
	contenedorTarjeta.appendChild(enlace);    
}
    
   
    /* Dar Enter y crear nueva Tarea 
    var darEnter = function(event){
    var keycode = (event.keyCode ? event.keyCode : event.which);
    if(keycode == '13'){
        alert("Acabas de presionar Enter");  
    }
        }
    */ 
    
    //Eventos
    //tareaInput.addEventListener("keydown",darEnter);
    contentAdd.addEventListener("click",crearLista);
    boton.addEventListener("click",nuevaTarjeta);
        
};