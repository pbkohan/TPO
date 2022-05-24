var formulario = document.getElementsByName('formulario')[0];
var validarNombre = function(e){
    if(formulario.nombre.value == 0){
        alert("Por favor completá tu nombre");
        e.preventDefault();
    }
};
var validarMail = function(e){
    if(formulario.mail.value == 0){
        alert("Por favor completá tu mail");
        e.preventDefault();
    }
};
var validarRadio = function(e){
    if(formulario.abogado[0].checked == true || formulario.abogado[1].checked == true || formulario.abogado[2].checked == true){
    } else{
        alert("Por favor indicá si sos abogado");
        e.preventDefault();
    }
}
var validarUtilidad = function(e){
    if(formulario.utilidad.selectedIndex == 0){
        alert("Por favor indicá cuán útil te resultó esta página");
        e.preventDefault();
    }
}
var validarComentarios = function(e){
    if(formulario.comentarios.value.length == 0 || formulario.comentarios.value == "Escribe tus comentarios aquí"){
        alert("Por favor escribí tus comentarios");
        e.preventDefault();
    }
}
var validar = function(e){
    validarNombre(e);
    validarMail(e);
    validarRadio(e);
    validarUtilidad(e);
    validarComentarios(e);
}
formulario.addEventListener("submit", validar);