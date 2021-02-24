class Requerimiento {}

class Componente extends Requerimiento {}

class Decorator extends Requerimiento {

    constructor(componente) {
        super();
        this.componente = componente;
    }

}

