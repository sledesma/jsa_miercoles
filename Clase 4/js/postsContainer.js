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
const peticionInicial = new XMLHttpRequest();
peticionInicial.responseType = "json";
peticionInicial.open("GET", "https://pokeapi.co/api/v2/pokemon");
peticionInicial.send();
peticionInicial.addEventListener("load", peticion_Load);




/***** CALL-STACK (T.P.) *****/
function btnSiguiente_Click(e) {
    e.preventDefault();

    const peticionSiguiente = new XMLHttpRequest();
    peticionSiguiente.responseType = "json";
    peticionSiguiente.open("GET", e.target.href);
    peticionSiguiente.send();
    peticionSiguiente.addEventListener("load", peticion_Load);
}

function btnAtras_Click(e) {
    e.preventDefault();

    const peticionAtras = new XMLHttpRequest();
    peticionAtras.responseType = "json";
    peticionAtras.open("GET", e.target.href);
    peticionAtras.send();
    peticionAtras.addEventListener("load", peticion_Load);
}

function peticion_Load(e) {

    console.log(e.target.response);

	const pokes = e.target.response.results;

	postsContainer.innerHTML = "";

	pokes.forEach(function (p) {
		// p representa cada item
		postsContainer.innerHTML += pokeTemplate(p);
    });
    
    btnSiguiente.href = e.target.response.next === null ? '#' : e.target.response.next;
    btnAtras.href = e.target.response.previous === null ? '#' : e.target.response.previous;

}
