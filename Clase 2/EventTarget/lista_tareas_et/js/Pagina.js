/**
 *
 * TAREAS INMEDIATAS
 *
*/

// Variables
const
	ListaTareasEventTarget = new EventTarget(),
	btnAgregar = document.querySelector("#btnAgregar"),
	txtTarea = document.querySelector("#txtTarea"),
	data = {
		listaTareas: [
			"Hacer las compras",
			"Terminar el modulo JS",
			"Hacer el mockup para el sitio de Carla",
			"Hacer el presupuesto del mes",
		],
	};

// Registro de eventos
ListaTareasEventTarget.addEventListener('actualizarTarea', function() {
    const ulTareas = document.querySelector("#ulTareas");
    ulTareas.innerHTML = '';

	data.listaTareas.forEach(function (tarea) {
		const nuevoLi = document.createElement("li");
		nuevoLi.innerHTML = tarea;
		ulTareas.appendChild(nuevoLi);
	});
});

btnAgregar.onclick = btnAgregar_Click;

// Primer impacto al DOM inicial
ListaTareasEventTarget.dispatchEvent(new Event('actualizarTarea'));

/**
 *
 * TAREAS PENDIENTES
 *
*/
function btnAgregar_Click(evento) {
    // Agregar el valor actual de txtTarea a listaTareas
    const val = txtTarea.value;
	data.listaTareas.push(val);
	// Actualizar Pagina con la nueva listaTareas
    ListaTareasEventTarget.dispatchEvent(new Event('actualizarTarea'));
    txtTarea.value = '';
    txtTarea.focus();

}