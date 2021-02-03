// El único rol que puede tomar HTML/CSS/JS es el del CLIENTE
// XMLHttpRequest nos da las herramientas para crear una nueva
// petición HTTP.

/**TAREAS INMEDIATAS**/
// 1. Crear la petición (y configurarla)
const peticion = new XMLHttpRequest();

peticion.responseType = "json";

// 2. Abrir la conexión
/**
 * 1) URL: ¿Qué pido?  !!!!
 * 2) Método: ¿Para qué lo pido?
 *      Leer: GET
 *      Escribir: POST, PUT / PATCH, DELETE
 */
peticion.open("GET", "https://pokeapi.co/api/v2/pokemon");

// 3. Enviar la petición
peticion.send();

// 4. Escuchar el evento 'load'
peticion.addEventListener("load", peticion_CargaCompleta);

/**TAREAS PENDIENTES**/
function peticion_CargaCompleta(e) {
	// ACA tengo la respuesta del servidor
	console.log(e.target.response);

	// ACA, CUANDO TENGO LA RESPUESTA, lleno los posts
	const pokes = e.target.response.results,
		postContainer = document.querySelector("#posts-container");

	postContainer.innerHTML = "";

	pokes.forEach(function (p) {
		// p representa cada item
		postContainer.innerHTML += pokeTemplate(p);
	});
}

/** UTILIDADES **/
const pokeTemplate = (poke) => `<div class="col-4 post-item">
									<div class="card">
										<div class="card-body">
											<h5 class="card-title">${poke.name}</h5>
											<a href="#" class="card-link">VER MAS</a>
										</div>
									</div>
								</div>`;
