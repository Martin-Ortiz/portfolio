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

/*--Formulario contacto - Validacion --*/
