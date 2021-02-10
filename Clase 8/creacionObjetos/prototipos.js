// EL PROTOTIPO ES UN ROL QUE CUMPLE UN OBJETO
// Es el rol del objeto a partir del cual se crea otro objeto.

const Persona = {
    nombre: '',
    apellido: '',
    json: function() {
        return JSON.stringify({
            nombre: this.nombre,
            apellido: this.apellido
        })
    }
}

const carlos = Object.create(Persona); // Asigna como valor del this el NUEVO objeto

carlos.nombre = 'Carlos';
carlos.apellido = 'Perez';

console.log(carlos.json());

// undefined = la propiedad no fue encontrada en este objeto ni en la cadena de prototipos
// JavaScript prioriza este objeto particular, por sobre el prototipo general


const User = {
    id: 0,
    name: '',
    username: '',
    email: '',
    address: {
        city: '',
        geo: {
            lat: '',
            long: ''
        },
        street: '',
        suite: '',
        zipcode: ''
    },
    company: {
        bs: '',
        catchPhrase: '',
        name: ''
    },
    phone: '', 
    website: '',
    log() {
        console.log(this);
    }
}


fetch('https://jsonplaceholder.typicode.com/users')
.then(r => r.json())
.then(data => {
    const usuarios = data.map((val) => {
        const obj = val;
        obj.__proto__ = User;
        return obj;
    });

    usuarios[1].log();
});