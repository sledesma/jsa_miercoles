// Base
class Requerimiento {
    log() {
        console.log('[Requerimiento] log')
    }
}


// DECORATOR
// Req No Funcionales
// Un "Aspecto" del sistema (POA) (Angular / Nest.Js / ... )
class Aspecto extends Requerimiento {
    constructor(requerimientoFuncional) {
        super();
        this.rf = requerimientoFuncional;
    }

    log() {
        console.log('[Aspecto] log');
    }
}

class Jsonable extends Aspecto {
    constructor(requerimientoFuncional) {
        super(requerimientoFuncional);

        this.rf.mostrar = function() {
            alert('Holaaa desde Jsonable');
        }
    }

    log() {
        console.log('[Jsonable] log');
    }

    toJson() {
        console.log(JSON.stringify(this.rf));
    }
}

// Req Funcional
// Un requerimiento concreto
class Persona extends Requerimiento {
    constructor(n) {
        super();
        this.nombre = n;
    }

    log() {
        console.log('[Persona] log');
    }
} 

let carla = new Persona('Carla');
console.log('Carla (Persona) ', carla);
carla = new Jsonable(carla);
console.log('Carla (Jsonable) ', carla);
console.log(carla);