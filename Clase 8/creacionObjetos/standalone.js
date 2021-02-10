console.log({
    nombre: 'Sebastian',
    apellido: 'Perez'
});

// Se usa siempre que quiera agrupar elementos
async function cargarDependencias(dependencias) {

    let resultado = {};
    let i = 0;

    for (const dep in dependencias) {
        if(dependencias.hasOwnProperty(dep)) {
            console.log('Propiedad: ', dep);

            const res = await fetch(dependencias[dep]);
            const data = await res.json();

            Object.defineProperty(resultado, dep, {
                value: data
            });
            Object.defineProperty(resultado, i, {
                value: data,
                enumerable: true
            });
            i++;
            // resultado[dep] = data;
        }
    }

    Object.defineProperty(resultado, 'length', {
        value: i++
    })

    return resultado;
}

cargarDependencias({
    posts: 'https://jsonplaceholder.typicode.com/posts',
    users: 'https://jsonplaceholder.typicode.com/users'
}).then(deps => {
    for (let index = 0; index < deps.length; index++) {
        const element = deps[index];
        console.log('Elemento: ', element);
    }
});