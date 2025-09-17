let  amigos  = [];


    function agregarAmigo (){ 
    
    const input = document.getElementById ("amigo");
    const nombre= input.value.trim ();
    const  listaAmigos =  document.getElementById ("listaAmigos");

    if (nombre === ""){
        alert (" 😒  !Por favor debes ingresar un nombre¡ ");
        return;

    }
    if (amigos.includes(nombre)){

        alert ("Por favor ingresa otro nombre, este ya existe" );
        return;

        
    } 

    if (/\d/.test(nombre)) {
        
    alert (" No se permitem ingresar numeros, solo nombres ");
     
    setTimeout(() => {
    listaAmigos.innerHTML = "";
    amigos = []; 
    }, 1000);
    
    }

    amigos.push(nombre);

    const li = document.createElement ("li");
    li.textContent = nombre;
    listaAmigos.appendChild (li);

    input.value = "";
    
    setTimeout(() => {
    listaAmigos.innerHTML = "";
    amigos = []; 
    }, 28000);
    
    }

    function sortearAmigo () {

        const resultado = document.getElementById("resultado");


        if (amigos.length < 2 ) {
        alert("Debe haber  al menos  2  participantes para el sorteo y despues presiona el boton sortearAmigo ");
        return;
    
            
        }

        const indiceGanador = Math.floor(Math.random() * amigos.length);
        const amigoSecreto = amigos[indiceGanador];
  
    resultado.innerHTML = `<li> ¡ y el  amigo secreto es: <strong>${amigoSecreto}</strong>! </li>`;

        setTimeout (() => {

            resultado.innerHTML = "";


        },20000);
    }


