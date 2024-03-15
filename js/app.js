/*variables para poder utilizar el DOM*/ 
const textoIngresado = document.querySelector("#textoIngresado");
const mensajeFinal = document.querySelector(".textoFinal");
const btnEncriptar = document.querySelector(".btnEncriptar");
const btnDesencriptar = document.querySelector(".btnDesencriptar");
const btnCopiar = document.querySelector(".btnCopiar");
const muneco = document.querySelector("#muneco");
const noEncontrado = document.querySelector(".aclaracion");
const info = document.querySelector(".infoDerecha");

const claveEncriptacion = [["e", "enter"], ["o", "ober"], ["i", "imes"], ["a", "ai"], ["u", "ufat"],];
/*función para que desaparezcan los elementos de la columna derecha,aparezca el boton copiar y vuelva el foco al placeholder de la columna izquierda.*/ 
function limpiar() {
    btnCopiar.style.display = "block";
    muneco.style.display = "none";
    noEncontrado.style.display = "none";
    info.style.display = "none";
    textoIngresado.focus();
}
/*función para que aparezcan los elementos de la columna derecha,desaparezca el boton copiar y vuelva el foco al placeholder de la columna izquierda.*/ 
function reset() {
    mensajeFinal.innerHTML = "";
    textoIngresado.value = "";
    btnCopiar.style.display = "none";
    muneco.style.display = "block";
    noEncontrado.style.display = "block";
    info.style.display = "block";
    textoIngresado.focus();
} 

function encriptar(nuevoTexto) {
    for (let i = 0; i < claveEncriptacion.length; i++) {
        if (nuevoTexto.includes(claveEncriptacion[i][0])) {
            nuevoTexto = nuevoTexto.replaceAll(claveEncriptacion[i][0], claveEncriptacion[i][1])
        };
    };
    return nuevoTexto;
}

function desencriptar(nuevoTexto) {
    for (let i = 0; i < claveEncriptacion.length; i++) {
        if (nuevoTexto.includes(claveEncriptacion[i][1])) {
            nuevoTexto = nuevoTexto.replaceAll(claveEncriptacion[i][1], claveEncriptacion[i][0])
        };
    };
    return nuevoTexto;
}
/*agrego un eventlistener al boton encriptar y ejecuto a función encriptar.Solo valido si se ingresa o no,texto.No se valida que sean solo letras y que no incluya acentos.*/ 
btnEncriptar.addEventListener("click", () => {
    let mensajeEncriptar = textoIngresado.value.toLowerCase();

    if (mensajeEncriptar != "") {
        encriptar(mensajeEncriptar)
    } else {
        alert("Ingrese el texto a encriptar.")  
    }

    const textoEncriptado = encriptar(mensajeEncriptar);
    mensajeFinal.innerHTML = textoEncriptado;
    limpiar(); 
    /*utilizo la función setTimeout pero no sé si es la más adecuada manera de hacer que todo vuelva al inicio sin recargar la página.*/
    setTimeout(reset, 2000); 
})
/*agrego un eventlistener al boton desencriptar y ejecuto a función desenencriptar.Valido si se ingresa o no,texto.*/ 
btnDesencriptar.addEventListener("click", () => {
    let mensajeEncriptar = textoIngresado.value.toLowerCase();

    if (mensajeEncriptar != "") {
        desencriptar(mensajeEncriptar)
    } else {
        alert("Ingrese el texto a encriptar.")    
    }
    const textoEncriptado = desencriptar(mensajeEncriptar);
    mensajeFinal.innerHTML = textoEncriptado;
    limpiar();
    /*utilizo la función setTimeout pero no sé si es la más adecuada manera de hacer que todo vuelva al inicio sin recargar la página.*/
    setTimeout(reset, 2000); 
    
})
/*agrego un eventlistener al boton copiar que copia el contenido al portapapeles y resetea.*/ 
btnCopiar.addEventListener("click", () => {
    const textoCopiado = mensajeFinal
    navigator.clipboard.writeText(textoCopiado.value);
    alert("Texto copiado");
    reset();
})