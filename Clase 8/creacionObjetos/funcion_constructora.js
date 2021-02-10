// Consiste en transformar la creación de un objeto, en una función
// definida por el usuario.

/**
 * Dos partes de una Funcion Constructora
 */
// La parte "FUNCION"
function Usuario() {
    console.log('Creando usuario');
    
    this.nombre = 'Sebastian';
}

function ListaUsuario() {
    this.recurso = 'usuarios';

    this.forEach = function() {
        console.log('Iterando');
    }

    ///this.push(10);
}
ListaUsuario.prototype = Array.prototype;
// La parte "CONSTRUCTORA"
/**
 * el NEW:
 * 1) Ejecuta el código de la función dada...
 * 2) ...pasandole como valor del this EL OBJETO A CREAR
 * 3) Utiliza la función dada como """TIPO DE DATO"""
 */
const usuario = new ListaUsuario();
usuario.forEach();