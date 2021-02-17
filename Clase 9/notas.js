// Clases = Las clases son una mejora SINTACTICA de los prototipos
// Typescript

// JS (front)
//// POO basada en Prototipos (JS)
// PHP (back)
//// POO basada en Clases (.Net, Python, PHP, Java)
// MySQL (bbdd)

class Persona extends EventTarget {
	constructor() {
		// Funcion constructora propiamente dicha

		// Propiedades de ESTE objeto
		this.Nombre = "Carlos";
	}
	/*
			    // Propiedades de su PROTOTIPO
			    get Nombre() {
			        return "Carlos";
			    }

			    set Nombre(val) {
			     console.log('Cambiando el nombre a: ', val);
			    }
			    */

	json() {
		this.dispatchEvent(new Event("tojson"));
		return JSON.stringify(this);
	}
}

var carlos = new Persona();

console.log(carlos.Nombre);
carlos.Nombre = "Andres";

carlos.addEventListener("tojson", () => {
	console.log("Haciendo JSON");
});

console.log(carlos.json());

console.log({
	get Nombre() {},

	set Nombre() {},
});
