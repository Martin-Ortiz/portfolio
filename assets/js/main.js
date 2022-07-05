/*Menu*/
var menu = document.querySelector(".logo__menu");
menu.addEventListener("click", mostrarMenu);

var menuDesplegable = document.querySelector(".menu");
var menuActivo = false;

function mostrarMenu(){
    if (menuActivo) {
        ocultarMenu();
        menuActivo=false;
    } else {
        menuDesplegable.classList.add("menu__activo");    
        menuActivo=true;
    }
    
}

function ocultarMenu(){
    menuDesplegable.classList.remove("menu__activo");
}

var menu1 = document.getElementById("menu_1");
menu1.addEventListener("click", ocultarMenu);

var menu2 = document.getElementById("menu_2");
menu2.addEventListener("click", ocultarMenu);

var menu3 = document.getElementById("menu_3");
menu3.addEventListener("click", ocultarMenu);

var menu4 = document.getElementById("menu_4");
menu4.addEventListener("click", ocultarMenu);

var menu5 = document.getElementById("menu_5");
menu5.addEventListener("click", ocultarMenu);

var menu6 = document.getElementById("menu_6");
menu6.addEventListener("click", ocultarMenu);

/**--Formulario contacto - Validacion --*/
var nombre = document.getElementById("nombre");
var mensajeNombre = document.getElementById("mensajeNombre");
nombre.addEventListener("input", () =>{
    validarNombre();
    activarBtnEnviar();
});
var nombreValido = false;

var email = document.getElementById("email");
var mensajeEmail = document.getElementById("mensajeEmail");
email.addEventListener("input", ()=>{
    validarEmail();
    activarBtnEnviar();
});
var emailValido = false;

var asunto = document.getElementById("asunto");
var mensajeAsunto = document.getElementById("mensajeAsunto");
asunto.addEventListener("input",()=>{
    validarAsunto();
    activarBtnEnviar();
} );
var asuntoValido = false;

var mensaje = document.getElementById("mensaje");
var mensajeAEnviar = document.getElementById("mensajeAEnviar");
mensaje.addEventListener("input", ()=>{
    validarMensaje();
    activarBtnEnviar();
});
var mensajeValido = false;

var btnEnviarMensaje = document.getElementById("enviarMensaje");
    btnEnviarMensaje.style.display="none";

/**--Validar nombre*/

function validarNombre(){

    var anchoNombre = nombre.value.length;
    var contenidoNombre = nombre.value;
    
    
    if ( anchoNombre > 50 ) {
        mensajeNombre.textContent = " máximo 50 caracteres...";
        return nombreValido = false;
    } else if(contenidoNombre == null || anchoNombre == 0) {
        mensajeNombre.textContent = " campo vacio...";
        return nombreValido = false;
    }else if(anchoNombre > 0 && anchoNombre < 50 ){
        mensajeNombre.textContent = "";
        return nombreValido = true;
    }
}

/**--Validar e-mail */



function validarEmail(){

    var anchoEmail = email.value.length;
    var contenidoEmail = email.value;
    var contieneArroba = contenidoEmail.includes('@');
    
    if(contenidoEmail == null || anchoEmail == 0) {
        mensajeEmail.textContent = " campo vacio...";
        return emailValido = false;
    }else if ( !contieneArroba) {
        mensajeEmail.textContent = " debe tener '@' ";
        return emailValido = false;
    }else if(anchoEmail > 0 && anchoEmail < 50 && contieneArroba){
        mensajeEmail.textContent = "";
        return emailValido = true;
    }
}

/**--Validar asunto */


function validarAsunto(){

    var anchoAsunto = asunto.value.length;
    var contenidoAsunto = asunto.value;
    
    
    if ( anchoAsunto > 50 ) {
        mensajeAsunto.textContent = " máximo 50 caracteres..."
        return asuntoValido = false;
    } else if(contenidoAsunto == null || anchoAsunto == 0) {
        mensajeAsunto.textContent = " campo vacio...";
        return asuntoValido = false;
    } else if(anchoAsunto > 0 && anchoAsunto < 50 ){
        mensajeAsunto.textContent = "";
        return asuntoValido = true;
    }

}

/**--Validar mensaje a enviar */


function validarMensaje(){

    var anchoMensaje = mensaje.value.length;
    var contenidoMensaje = mensaje.value;
    
    
    if ( anchoMensaje > 300 ) {
        mensajeAEnviar.textContent = " máximo 300 caracteres..."
        return mensajeValido = false;
    } else if(contenidoMensaje == null || anchoMensaje == 0) {
        mensajeAEnviar.textContent = " mensje incompleto...";
        return mensajeValido = false;
    }else if(anchoMensaje > 0 && anchoMensaje < 300 ){
        mensajeAEnviar.textContent = "";
        return mensajeValido = true;
    }
}


/**--activar boton enviar */


function activarBtnEnviar(){
    if(nombreValido && emailValido && asuntoValido && mensajeValido){
        btnEnviarMensaje.style.display="block";
    }else{
        btnEnviarMensaje.style.display="none";

    }
}