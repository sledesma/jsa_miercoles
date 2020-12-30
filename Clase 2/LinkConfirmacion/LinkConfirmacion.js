////////////////// Tareas inmediatas //////////////////

const linkConfirmacion = document.querySelectorAll('.link-confirmacion');

linkConfirmacion.forEach(function(link) {

    link.target = '_blank';

    link.onclick = verificarLink;

});



////////////////// Tareas pendientes //////////////////

function verificarLink(evento){
    if(confirm("¿Desea continuar?"))
        window.location = evento.target.href;// Sale de la página
    else
        evento.preventDefault(); // Cancela el comportamiento por defecto
}