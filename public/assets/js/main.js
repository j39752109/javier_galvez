document.addEventListener("DOMContentLoaded", (event) => {
    let button = document.querySelector(".layout__menu-toggle");
    let icon_bars = document.querySelector(".layout__menu-toggle .fa-bars");
    let icon_xmark = document.querySelector(".layout__menu-toggle .fa-xmark");
    let aside = document.querySelector(".layout__aside");

    // Asegúrate de que los elementos existen antes de añadir eventos
    if (button && icon_bars && icon_xmark && aside) {
        button.addEventListener("click", (event) => {
            let visible = document.querySelector(".layout__aside--visible");

            if (!visible) {
                aside.classList.remove("layout__aside--hidden");
                aside.classList.add("layout__aside--visible");
                icon_bars.style.opacity = 0;
                icon_xmark.style.opacity = 1;
            } else {
                aside.classList.add("layout__aside--hidden");
                aside.classList.remove("layout__aside--visible");
                icon_bars.style.opacity = 1;
                icon_xmark.style.opacity = 0;
            }
        });
    }
});





function copyPhone() {

    var iconoTelefono = document.getElementById("phone-icon");
    var iconoEmail = document.getElementById("email-icon");

    // Seleccionar el texto del número de teléfono
    var phoneText = document.getElementById("text-phone");
    
    // Crear un elemento de texto temporal para copiar el contenido
    var tempInput = document.createElement("textarea");
    tempInput.value = phoneText.innerText;
    document.body.appendChild(tempInput);

    //
    iconoTelefono.classList.remove("fa-phone");
    iconoTelefono.classList.add("fa-check");

    iconoEmail.classList.remove("fa-check");
    iconoEmail.classList.add("fa-envelope");

    
    // Seleccionar el texto dentro del elemento temporal
    tempInput.select();
    
    // Copiar el texto seleccionado
    document.execCommand("copy");
    
    // Eliminar el elemento de texto temporal
    document.body.removeChild(tempInput);
    
}

function copyCorreo(){

        var iconoEmail = document.getElementById("email-icon");
        var iconoTelefono = document.getElementById("phone-icon");
        // Seleccionar el texto del número de teléfono
        var phoneText = document.getElementById("text-correo");
    
        // Crear un elemento de texto temporal para copiar el contenido
        var tempInput = document.createElement("textarea");
        tempInput.value = phoneText.innerText;
        document.body.appendChild(tempInput);

        //
        iconoEmail.classList.remove("fa-envelope");
        iconoEmail.classList.add("fa-check");

        iconoTelefono.classList.remove("fa-check");
        iconoTelefono.classList.add("fa-phone");
        
        // Seleccionar el texto dentro del elemento temporal
        tempInput.select();
        
        // Copiar el texto seleccionado
        document.execCommand("copy");
        
        // Eliminar el elemento de texto temporal
        document.body.removeChild(tempInput);



}



