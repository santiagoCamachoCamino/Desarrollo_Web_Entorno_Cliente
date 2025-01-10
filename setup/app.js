// Tendriamos que hacer 4 funciones
// la primera donde comprobariamos si el valor es menor a cero, se cambia a rojo, si es mayor a cero se cambia verde y si es igual a cero, cambia a negro

// la segunda función será para resetar donde en el div se cambiara el valor cero y se guardar su valor en la variables

// la tercera función será para incrmentar donde iremos sumando uno y llamaremos a la función de color

//la cuarta función será de decrementar uno y llamaremos igualmente a la función de color

let numero;
let valor=document.getElementById("value");
let decreser=document.getElementsByClassName("btn decrease");
let incrementar=document.getElementsByClassName("btn increase");
let resetear=document.getElementsByClassName("btn reset");

function cambiarColor(num){
    if(num<0){
        valor.style.color="red";
    }
    else if(num>0){
        valor.style.color="green";
    }
    else{
        valor.style.color="black";
    }
}

console.log(valor);
let reset = function () {
    valor.innerHTML = 0;
    console.log(valor);
    cambiarColor(numero);
   
}

let incrementarValor = function () {
    numero=parseInt(valor.innerHTML) + 1;
    valor.innerHTML = numero;
    cambiarColor(numero);
    console.log(numero);

}
let decrementarValor = function () {
    numero=parseInt(valor.innerHTML) - 1;   
    valor.innerHTML = numero;
    cambiarColor(numero);
    console.log(numero);

}

// Llamamos a las funciones para que se ejecute al cargar la pagina
resetear[0].addEventListener("click",reset);

decreser[0].addEventListener("click", decrementarValor);

incrementar[0].addEventListener("click", incrementarValor);

