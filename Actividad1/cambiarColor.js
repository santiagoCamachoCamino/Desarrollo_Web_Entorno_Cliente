const listaColores=["#A52A2A", "#8A2BE2", "#7FFF00", "#DC143C", "#FFD700", "#FFB6C1", "#FF4500", "#800080", "#6A5ACD", "#9ACD32", "#FFA07A", "#4B0082", "#B22222"];

function obtenerColores(){
    let color = listaColores[Math.floor(Math.random() * listaColores.length)];

    return color;
}

const letras=["A", "B", "C", "D", "E", "F", 0 ,1, 2, 3, 4, 5, 6, 7, 8, 9];

function obtenerColoresAzar(){

    let color="#";
    for(let i=1; i<=6; i++){
        color+=letras[Math.floor(Math.random()*letras.length)]
    }
    // let primerNumero =letras[Math.floor(Math.random()*letras.length)];
    // let segundoNumero =letras[Math.floor(Math.random()*letras.length)];
    // let tercerNumero =letras[Math.floor(Math.random()*letras.length)];
    // let cuartoNumero =letras[Math.floor(Math.random()*letras.length)];
    // let quintoNumero =letras[Math.floor(Math.random()*letras.length)];
    // let sextoNumero =letras[Math.floor(Math.random()*letras.length)];
    // let color = "#"+primerNumero+segundoNumero+tercerNumero+cuartoNumero+quintoNumero+sextoNumero;

    return color;
}

let botonCambiaColor = document.getElementById("boton");
let nombreColor=document.getElementById("color");

function cambiarColor(){
    nombreColor.innerHTML = "&nbsp"+obtenerColoresAzar();
    document.body.style.backgroundColor = obtenerColoresAzar();
}
botonCambiaColor.addEventListener("click", cambiarColor)