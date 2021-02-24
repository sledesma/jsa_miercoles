/**
 * 
 * @param definition - Definición del servicio (clase o función constructora)
 */
function createService(definition) {
    return (function (baseClass) {
        let public = {};
        let private = {};

        private.instancia = null;

        public.obtenerInstancia = function () {
            if (private.instancia == null) {
                private.instancia = new baseClass();
            }
            return private.instancia;
        };

        return public.obtenerInstancia();
        
    })(definition);
}