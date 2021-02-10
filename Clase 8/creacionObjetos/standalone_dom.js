// HTML
// (medio)
// JS

var App = {

    data: {
        nombre: 'Sebastian',
        apellido: 'Perez',
        mostrarTexto: false
    },

    getData: function(key) {
        return this.data[key];
    },

    load() {
        // this = App
        // function cambia el valor del this
        // arrow function NO cambia el valor del this
        document.addEventListener('DOMContentLoaded', () => {
            // this = App
            this.render();
        });
    },

    render() {
        document.querySelectorAll('*[data-mostrar]').forEach(item => {
            item.innerHTML = this.getData(item.dataset.mostrar);
        });

        document.querySelectorAll('*[data-if]').forEach(item => {
            if(!this.getData(item.dataset.if)){
                item.style = 'display: none';
            }
        });
    }

}
