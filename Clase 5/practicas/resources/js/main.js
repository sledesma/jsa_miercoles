// Heap (Tareas inmediatas)
const pages = [
	{
		path: "index",
        contentUrl: "pages/inicio.html"
	},
	{
		path: "detalle",
		contentUrl: "pages/detalle.html",
	},
];

history.pushState(pages[0], "", ""); // Cargar página de inicio
window.addEventListener("popstate", Window_PopState);
document.addEventListener("DOMContentLoaded", DOM_Loaded);


// Call-Stack (Tareas en espera)

// Callbacks de eventos iniciales
function DOM_Loaded() {
	loadPage(); // Prueba
}

function Window_PopState(e) {
	// Se dispara al presionar las flechas "siguiente" y "previo" del browser
	e.preventDefault();
	loadPage();
}

// Renderizar la página solicitada por HTTP
function renderPage(e) {
    switch(history.state.path) {
        case 'index':
            Index_Load(e.target.response);
            break;

        case 'detalle':
            Detalle_Load(e.target.response);
            break;
    }
}

// Solicitar la página por HTTP
function loadPage() {
	const xhr = new XMLHttpRequest();
	xhr.open("GET", history.state.contentUrl);
	xhr.send();
	xhr.addEventListener("load", renderPage);
}

// Caragas de cada 'página'
function Index_Load(content) {
    
    const xhr = new XMLHttpRequest();
    xhr.responseType = 'json';
    xhr.open('GET', 'https://jsonplaceholder.typicode.com/posts');
    xhr.send();
    xhr.addEventListener('load', function(){
        Index_DataLoaded(xhr.response, content);
    });

}

function Index_DataLoaded(json, template) {
    document.querySelector("main").innerHTML = json.reduce(function(prev, actual){
        return prev + template
                        .replace('_TITULO_', actual.title)
                        .replace('_DESC_', actual.body)
                        .replace('_ID_', actual.id);
    }, '');
    
    document.querySelectorAll(".nav-link").forEach(function (link) {
        link.addEventListener("click", function(e) {
            e.preventDefault();
            // Renderizar Detalle
            history.pushState(pages[1], "", "");
            loadPage();
        });
    });
}

function Detalle_Load(content) {
    document.querySelector("main").innerHTML = content;
    document.querySelectorAll(".back-link").forEach(function (link) {
        link.addEventListener("click", function(e) {
            e.preventDefault();
            // Renderizar Detalle
            history.pushState(pages[0], "", "");
            loadPage();
        });
    });  
}