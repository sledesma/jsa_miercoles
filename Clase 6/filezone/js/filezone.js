// OPCIONES
const
    FZ_CLASS_NAME = 'filezone';


// HEAP
document.querySelectorAll(`.${FZ_CLASS_NAME}`).forEach(Configure_FileZone);

let fileList = [];


// CALL-STACK
function Configure_FileZone(fz) {

    const data = fz.dataset;

    fz.innerHTML = data.msgInicial;

    fz.addEventListener('dragover', e => {
        e.preventDefault();
        Fz_In(fz, data);
    });

    fz.addEventListener('drop', e => {
        e.preventDefault();
        Fz_Out(fz, data);

        const archivos = [...e.dataTransfer.files];

        fileList = [];

        const html = archivos.reduce(function(prev, actual){
            const url = URL.createObjectURL(actual);
            fileList.push({
                file: actual,
                url: url
            })
            return prev + `
            <div class="filezone-item">
                <div>
                    ${actual.name} (${actual.type}) |
                    Tamaño: ${actual.size}
                </div>
                <div>
                    <a href="${url}" target="_blank">Ver</a>
                </div>
            </div>
            `;
        }, '');

        fz.innerHTML = html;
    });

    fz.addEventListener('dragleave', e => {
        Fz_Out(fz, data);
    })

}

function Fz_In(fz, data) {
    fz.innerHTML = data.msgOver;
        
    if(!fz.classList.contains('filezone-over'))
        fz.classList.add('filezone-over')
}

function Fz_Out(fz, data) {
    fz.innerHTML = data.msgInicial;
    if(fz.classList.contains('filezone-over'))
        fz.classList.remove('filezone-over')
}

/*
function CreateItem(name, type, size) {
    const el = document.createElement('div');

}
*/



/*

USAR PROMESAS PARA COMPLETAR EL ENVIO AL SERVIDOR

function PedirArchivo(url, callback) {
    const xhr = new XMLHttpRequest();
    xhr.responseType = "blob";
    xhr.open('GET', url);
    xhr.send();
    xhr.addEventListener('load', e => {
        callback(xhr.response);
    });
}

PedirArchivo('URL1', function(archivo){
    PedirArchivo('URL2', function(archivo2){
        PedirArchivo('URL3', function(archivo3){

        });
    });
});

*/