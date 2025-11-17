// Secciones
function mostrarSeccion(id){
    const secciones= document.querySelectorAll('.seccion');
    secciones.forEach(sec => sec.style.display='none');
    document.getElementById(id).style.display='block';
}
// función palíndromo
function comprobarPalindromo(id){
   const palabra = document.getElementById("palinInput").value;
   const limpia = palabra.toLowerCase().replace(/[\W_]/g,'');
   const inversa= limpia.split('').reverse().join('');
   const esPalindromo= (inversa==limpia);
   const resultado=esPalindromo?  "Es un palíndromo" : "No es un palíndromo";
   document.getElementById("palinResultado").innerText = resultado;
}
// función mayor entre dos numeros
function calcularMayor(id){
    const num1=Number(document.getElementById("num1").value);
    const num2=Number(document.getElementById("num2").value);
    let resultado= " ";
    if (num1>num2){
        resultado= `El número mayor es ${num1}`;
    } else if (num2>num1){
        resultado = `El número mayor es ${num2}`;
    }else{
        resultado = "Ambos núemros son iguales";
    }
    document.getElementById("mayorResultado").innerText =resultado;
}
// función extraer vocales
function extraerVocales(id){
    const palabra=document.getElementById("extraerInput").value.toLowerCase();
    const vocales= ['a','e', 'i', 'o', 'u'];
    const vocalesEncontradas =new Set();
    for (let char of palabra){
        if (vocales.includes(char)){
            vocalesEncontradas.add(char);
        }
    }
    const resultado=[...vocalesEncontradas].join(', ');
    document.getElementById("extraerResultado").innerText =resultado;
}

//función contar vocales
function contarVocales(id){
    const palabra=document.getElementById("contarInput").value.toLowerCase();
    const vocales= ['a','e', 'i', 'o', 'u'];
    const contador={a:0, e:0, i:0, o:0, u:0};
    
    for (let char of palabra){
        if (vocales.includes(char)){
            contador[char]++;
        }
    }
    let resultado = "Conteo de vocales: \n";
    for(const vocal of vocales){
        resultado += `${vocal.toUpperCase()}: ${contador[vocal]}\n`;
    }

    document.getElementById("contarResultado").innerText =resultado;
}

//Otras funciones
function activarBoton(boton){
    const botones = document.querySelectorAll("nav ul li button");
    botones.forEach(b => b.classList.remove("activo"));
    boton.classList.add("activo");
}
// AJAX
window.addEventListener("load",function() {
    const urlActual= window.location.href;
    document.getElementById("ajaxUrl").value = urlActual;
});

function hacerPeticion(){
    const url = document.getElementById("ajaxUrl").value;
    const xhr = new XMLHttpRequest();
    //Mostrar estados
    xhr.onreadystatechange= function(){
        let estados ={
            0: "No iniciada",
            1: "Conexión abierta",
            2: "Cabeceras recibidas",
            3: "Cargando...",
            4: "Completada"
        };
    document.getElementById("ajaxEstado").innerText = estados[xhr.readyState];

    if (xhr.readyState === 4){
        // Código de estado HTTP
        document.getElementById("ajaxCodigo").innerText= xhr.status + " " + xhr.statusText;
        // Cabeceras
        document.getElementById("ajaxCabeceras").innerText = xhr.getAllResponseHeaders();
        //Contendio de la respuesta
        document.getElementById("ajaxContenido").innerText = xhr.responseText;
    }
    };
    // Abrir petición GET
    xhr.open("GET", url, true);
    //Enviar
    xhr.send();
}