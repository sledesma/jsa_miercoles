// API HTML Drag And Drop
// F (funciones): -
// E (eventos):
//  Al DOM: drag, dragend, dragenter, dragexit, dragleave, dragover, dragstart, drop
// O (objetos): -
const colors = document.querySelectorAll(".color");
const main = document.querySelector(".color-zone");

let nombreEnDrag = "";

colors.forEach((color) => {
	color.draggable = true;
	color.style = `background-color: ${color.dataset.color}`;
	addDndListeners(color);
});

// FIN DE LA OPERACION
main.addEventListener("drop", (e) => {
	// ACA NO TIENE QUE IR EL DROP
	e.preventDefault();
	main.style = `transition: all 0.2s ;background-color: ${e.dataTransfer.getData(
		"color"
	)}`;

	let el = document.querySelector(".color-dragging");
	el.classList.remove("color-dragging");
	el.innerHTML = nombreEnDrag;
});

main.addEventListener("dragover", (e) => {
	e.preventDefault();
	//console.log(e);
});

function addDndListeners(elemento) {
	// INICIO DE LA OPERACION
	elemento.addEventListener("dragstart", (e) => {
		e.dataTransfer.setData("color", elemento.dataset.color);
		nombreEnDrag = elemento.innerHTML;
		elemento.innerHTML = "";
	});

	elemento.addEventListener("drag", (e) => {
		if (
			e.screenX == 0 &&
			e.screenY == 0 &&
			elemento.classList.contains("color-dragging")
		) {
			elemento.classList.remove("color-dragging");
		} else {
			elemento.classList.add("color-dragging");
		}
	});
}
