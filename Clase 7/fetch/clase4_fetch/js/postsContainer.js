/*****
Acerca de este código:

Propósito: Rellenar el #posts-container con los datos de la API

*****/

/***** UTILIDADES NECESARIAS *****/
const pokeTemplate = (poke) => `<div class="col-4 post-item">
									<div class="card">
										<div class="card-body">
											<h5 class="card-title">${poke.name}</h5>
											<a href="#" class="card-link">VER MAS</a>
										</div>
									</div>
								</div>`;

/***** HEAP (T.I.) *****/

/**
 * Elementos HTML necesarios
 */
const btnSiguiente = document.querySelector("#btnSiguiente"),
	btnAtras = document.querySelector("#btnAtras"),
	postsContainer = document.querySelector("#posts-container");

/**
 * Registro de eventos
 */
btnSiguiente.addEventListener("click", btnSiguiente_Click);
btnAtras.addEventListener("click", btnAtras_Click);

/**
 * Carga inicial de los datos
 */
fetch("https://pokeapi.co/api/v2/pokemon")
	.then((res) => res.json())
	.then(peticion_Load);

/***** CALL-STACK (T.P.) *****/
function btnSiguiente_Click(e) {
	e.preventDefault();

	fetch(e.target.href)
		.then((res) => res.json())
		.then(peticion_Load);
}

function btnAtras_Click(e) {
	e.preventDefault();

	fetch(e.target.href)
		.then((res) => res.json())
		.then(peticion_Load);
}

function peticion_Load(datos) {
    const 
        response = datos,    
        pokes = datos.results;

	postsContainer.innerHTML = "";

	pokes.forEach(function (p) {
		// p representa cada item
		postsContainer.innerHTML += pokeTemplate(p);
	});

	btnSiguiente.href =
		response.next === null ? "#" : response.next;
	btnAtras.href =
		response.previous === null ? "#" : response.previous;
}
