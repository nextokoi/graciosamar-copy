    //TIRA DE IMAGENES GENERAL
    let tira_imagenes = getCSSRule("#tira_imagenes"),

    //TIRA DE IMAGENES DE HABITACIONES
    imagenes_habitaciones = getCSSRule("#imagenes_habitaciones"),

    //CONTROLES CARRUSEL
    izquierda_link = getCSSRule("#izquierda_link"),
    derecha_link = getCSSRule("#derecha_link"),

    //NAV MOVIL
    desplegable = getCSSRule("#desplegable"),

    //BOTON SUBIR
        boton_subir = getCSSRule("#boton_subir"),

    //BIENVENIDA
        contenido_principal = getCSSRule("#contenido_principal"),
    
    //INTERVALOS
        intervalo,
        intervaloHabitaciones,

    //CARRUSEL PANTALLA COMPLETA
        tira_imagenes_completa = getCSSRule("#tira_imagenes_completa"),
        carrusel_completa = getCSSRule("#carrusel_completa"),

    //LOGIN
        wrapper_login = getCSSRule("#wrapper_login"),
        user = document.getElementById("user"),
        pass = document.getElementById("pass"),
        user_desktop = document.getElementsByClassName("user_span")[0],
        user_mobile = document.getElementsByClassName("user_span")[1],

    //CARRUSEL GENERAL
        desplazamiento,
        limite


/* ---- LOGIN ---- */    

function mostrarEmergente(){
    wrapper_login.style.visibility = "visible";
}

function acceso(){
    if((user.value == 'Administrador') && (pass.value == 'Graciosa123')){
        wrapper_login.style.visibility = "hidden";
        user_desktop.innerHTML = `Bienvenido, ${user.value} <i class="fa-regular fa-user"></i>`;
        user_mobile.innerHTML = `Bienvenido, ${user.value} <i class="fa-regular fa-user"></i>`;
    }
    else{
        alert('Usuario o contraseña incorrectos');
        user.value = '';
        pass.value = '';
    }
}

/* ---- NAV MOVIL ---- */

let linkActual = null;

function apartadoFocus(link){
    if(linkActual!=null){
        linkActual.style.color = link.style.color;
        linkActual.style.backgroundColor = link.style.backgroundColor;
    }
    link.style.color = '#000';
    link.style.backgroundColor = '#fff';
    linkActual = link;
}

/* ---- GALERIA PRINCIPAL ---- */

function mover(direccion){
    if (window.matchMedia("(min-width: 1080px)").matches){
        limite = -60
        desplazamiento = 20
    }
    else if(window.matchMedia("(min-width: 640px)").matches){
        limite = -175
        desplazamiento = 35
    }
    else{
        limite = -300
        desplazamiento = 50
    }

    switch(direccion){
        case "izquierda":
            if(parseInt(tira_imagenes.style.marginLeft) != 0){
                tira_imagenes.style.marginLeft = (parseInt(tira_imagenes.style.marginLeft) + desplazamiento) + "vw";
                }
                else{
                    tira_imagenes.style.marginLeft = limite + "vw";
                }
                break
        
        case "derecha":
            if(parseInt(tira_imagenes.style.marginLeft) != limite){
                    tira_imagenes.style.marginLeft = (parseInt(tira_imagenes.style.marginLeft) - desplazamiento) + "vw";
        
                    /* console.log(tira_imagenes.style.marginLeft) */
                }
                else{
                        tira_imagenes.style.marginLeft = "0";
                }  
                break;  
                    
        }
}

/* ---- GALERIA HABITACIONES ---- */
function moverHabitaciones(direccion){
            limite = -200
            desplazamiento = 50

            switch(direccion){

            case "izquierda":
                if(parseInt(imagenes_habitaciones.style.marginLeft) != 0){
                    imagenes_habitaciones.style.marginLeft = (parseInt(imagenes_habitaciones.style.marginLeft) + desplazamiento) + "vw";
                    }
                    else{
                        imagenes_habitaciones.style.marginLeft = limite + "vw";
                    }
                    break

                case "derecha":
                    if(parseInt(imagenes_habitaciones.style.marginLeft) != limite){
                        imagenes_habitaciones.style.marginLeft = (parseInt(imagenes_habitaciones.style.marginLeft) - desplazamiento) + "vw";
                        }
                    else{
                        imagenes_habitaciones.style.marginLeft = "0";
                    }  
                    break;                    
            }  
}

/* ---- GALERIA PANTALLA COMPLETA ---- */

function moverCompleta(direccion){
    switch(direccion){

       case "izquierda":
        if(parseInt(tira_imagenes_completa.style.marginLeft) != 0){
            tira_imagenes_completa.style.marginLeft = (parseInt(tira_imagenes_completa.style.marginLeft) + 100) + "vw";
            }
            else{
                tira_imagenes_completa.style.marginLeft = "-700vw";
            }
            break

        case "derecha":
            if(parseInt(tira_imagenes_completa.style.marginLeft) != -700){
                tira_imagenes_completa.style.marginLeft = (parseInt(tira_imagenes_completa.style.marginLeft) - 100) + "vw";

             /*    console.log(tira_imagenes_completa.style.marginLeft) */
                }
            else{
                tira_imagenes_completa.style.marginLeft = "0";
            }  
            break;                    
        }
}

function cerrar_completa(){
    carrusel_completa.style.visibility = "hidden";
}

function abrir_completa(foto){
    carrusel_completa.style.visibility = "visible";
    tira_imagenes_completa.style.marginLeft = foto + "vw";
}


/* ---- CLICK MENU ---- */

function clickMenu(){
    if(desplegable.style.top == "50px") desplegable.style.top = "-240px";
    else desplegable.style.top = "50px";
}

/* ---- BOTON SUBIR ---- */

window.addEventListener("scroll", (event) =>{
    let scrollY = this.scrollY;
    if (scrollY <= 285) boton_subir.style.visibility = "hidden";
    else boton_subir.style.visibility = "visible";
})


/* window.addEventListener("scroll", (event) =>{
    let scrollY = this.scrollY;
    if (scrollY <= 300) contenido_principal.style.opacity = "0";
    else contenido_principal.style.opacity = "1";
}) */

/* ---- CARRUSEL AUTOMATICO ---- */

function temporizador(interruptor){
    if(interruptor == 'desactivar') clearInterval(intervalo);
    else intervalo = setInterval("mover('derecha')", 3000)
}


/* ---- CARRUSEL AUTOMATICO HABITACIONES ---- */

function temporizadorHab(interruptorHab){
    if(interruptorHab == 'desactivar') clearInterval(intervaloHabitaciones);
    else intervaloHabitaciones = setInterval("moverHabitaciones('derecha')", 3000)
}


/* ---- CSS RULE ---- */

function getCSSRule(ruleName){
    ruleName = ruleName.toLowerCase();
        var result = null;
        var find = Array.prototype.find;

        find.call(document.styleSheets, styleSheet => {
            result = find.call(styleSheet.cssRules, cssRule => {
                return cssRule instanceof CSSStyleRule && cssRule.selectorText.toLowerCase() === ruleName;
            });
            return result != null;
        });
        return result;
}

/* ---- EFECTOS ----*/

window.addEventListener('scroll', function()  {
    let elements = document.getElementsByClassName('scroll-content');
    let screenSize = window.innerHeight;
    
      for(var i = 0; i < elements.length; i++) {
        let element = elements[i];
  
        if(element.getBoundingClientRect().top < screenSize) {
          element.classList.add('visible');
        } else {
          element.classList.remove('visible');
        }
      }
  });