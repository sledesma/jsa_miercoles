/**
 * DOM - Document Object Model
 * Es una interfaz del Browser que representa 
 * al documento HTML en donde 
 * este archvio / código JS está incrustado.
 * 
 * La API Document / DOM, ofrece:
 * F (Funciones): - 
 * E (Eventos): - 
 * O (Objetos): document
 * 
 * Reglas para el manejo del DOM:
 * - El DOM es una estructura en ARBOL,
 * en la que solo hay un tipo de elemento: Element
 * - El DOM soporta POCOS cambios.
 */


const todaInfo = {

    textoActual: '',

    listaTareas: [
        'Hacer las compras',
        'Terminar el modulo JS',
        'Hacer el mockup para el sitio de Carla',
        'Hacer el presupuesto del mes'
    ]

}

function actualizarPagina(textoActual, listaTareas) {

    todaInfo.textoActual = textoActual;
    todaInfo.listaTareas = listaTareas;
    
    const ulTareas = document.querySelector('#ulTareas');

    const nuevoLi = document.createElement('li');
    nuevoLi.innerHTML = todaInfo.textoActual;

    // TODO: ¿Como se pueden insertar MUCHOS li con UN SOLO CAMBIO al DOM?

    ulTareas.appendChild(nuevoLi);
}