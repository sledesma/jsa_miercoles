/**
 * EL Observer será el encargado de actualizar el
 * DOM
 */
class Observer {
	constructor() {
		this.state = {};
	}

	updateState(nuevoEstado = {}) {
		/*
					Object.assign({}, {msj: '', estado: true}, {msj: 'Hola'})
					=
					{ msj:'Hola', estado: true }
					*/
		this.state = Object.assign({}, this.state, nuevoEstado);

		this.renderDom();
	}

	/**
	 * Hay que tener
	 * mucho cuidado con los algoritmos que se
	 * usan para manipular el DOM. La regla
	 * de oro es REALIZAR LA MENOR CANTIDAD
	 * DE CAMBIOS POSIBLES EN EL DOM
	 */
	renderDom() {
		document.querySelectorAll("*[data-valor]").forEach((el) => {
			el.innerHTML = this.state[el.dataset.valor];
		});
	}
}

const ob = new Observer();
ob.updateState({
	mensaje: "Hola mundo",
});

/**
 * El Subject será un componente (botón) que indique los cambios
 * a hacer en el DOM
 */
class Componente {}
