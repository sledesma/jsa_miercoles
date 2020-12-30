// 1. Definir los datos
// nombreActual

// Objeto = Conjunto de PROPIEDADES
// Propiedad = Par Clave/Valor
const datos = {
	nombreActual: "Hola"
};


// 2. Expresar el HTML en funcion de los datos.
function actualizarPagina(nuevosDatos) {
	//datos = nuevosDatos; // NO
	datos.nombreActual = nuevosDatos.nombreActual; // SI

	var contenidoNombre = document.getElementById("contenidoNombre");

	contenidoNombre.innerHTML = datos.nombreActual;
}


/** Solución 1: Declarar const datos dentro de la función. Hacerla local
 * 
 * V: Seguimos con const
 * D: No puedo utilizar datos más allá de la función. 
 */

