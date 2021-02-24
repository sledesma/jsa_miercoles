			// Requerimientos NO funcionales
			class ApiClient extends Decorator {
				constructor(componente) {
					super(componente);
				}

				async getAll() {
					const res = await fetch(
						"https://jsonplaceholder.typicode.com/posts"
					);
					const json = await res.json();
					return json;
				}
			}

			// Requerimientos funcionales
			class PostsList extends Componente {
				constructor() {
					super();
				}

				log() {
					console.log(this);
				}
			}

			// Implementación
			let pl = new PostsList();
			pl = new ApiClient(pl);

			console.log(pl);