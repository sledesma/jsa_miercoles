// 1. Definir los datos
// nombreActual
var datos = {
	nombreActual: "Hola",
};

// 2. Expresar el HTML en funcion de los datos.
function actualizarPagina(nuevosDatos) {
	datos = nuevosDatos;

	var contenidoNombre = document.getElementById("contenidoNombre");

	contenidoNombre.innerHTML = datos.nombreActual;
}
