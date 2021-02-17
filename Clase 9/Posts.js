const API_ENDPOINT = "https://jsonplaceholder.typicode.com/posts";

/**
 * Clase para UN recurso
 */
/*
class Post {
    constructor(userId, id, title, body) {
        this.__userId__ = userId;
        this.__id__ = id;
        this.__title__ = title;
        this.__body__ = body;
    }

    get UserId() {
        return this.__userId__;
    }

    get Id() {
        return this.__id__;
    }

    get Title() {
        return this.__title__;
    }

    get Body() {
        return this.__body__;
    }
}
*/
/*
class Post {
    constructor({ userId, id, title, body }) {
        Object.defineProperties(this, {
            UserId: {
                configurable: false,
                value: userId
            },
            Id: {
                configurable: false,
                value: id
            },
            Title: {
                configurable: false,
                value: title
            },
            Body: {
                configurable: false,
                value: body
            }
        })
    }
}
*/
function Post({ userId, id, title, body }) {
    Object.defineProperties(this, {
        UserId: {
            configurable: false,
            value: userId,
        },
        Id: {
            configurable: false,
            value: id,
        },
        Title: {
            configurable: false,
            value: title,
        },
        Body: {
            configurable: false,
            value: body,
        },
    });
}	

class Lista extends EventTarget {
    constructor() {
        super();
        this.length = 0;
    }

    addItem(item) {
        const nombre = this.length;
        Object.defineProperty(this, nombre, {
            enumerable: true,
            configurable: true,
            writable: true,
            value: item,
        });
        this.length++;
    }

    addAll(items = []) {
        for (let i = 0; i < items.length; i++) {
            const el = items[i];
            this.addItem(el);
        }
    }

    find(val) {
        for (let i = 0; i < this.length; i++) {
            const el = this[i];
            if (el == val) return true;
        }

        return false;
    }
}

/**
 * Clase para la Coleccion de recursos
 */
// Opcion 1

class PostList extends Lista {
    constructor() {
        super();
    }

    fill(json = []) {
        const mapJson = json.map((post) => new Post(post));
        this.addAll(mapJson);
    }

    find(val) {
        for (let i = 0; i < this.length; i++) {
            const el = this[i];

            switch (typeof val) {
                case "string":
                    if (el.Title.includes(val)) return el;

                case "number":
                    if (el.Id == val) return el;
            }
        }

        return false;
    }
}

// Opcion 2
/*
class PostList extends Array {
    constructor() {
        super();

        this.eventHandler = new EventTarget();
    }
}
*/

fetch(API_ENDPOINT)
    .then((res) => res.json())
    .then((datos) => {
        const list = new PostList();
        list.fill(datos);
        console.log(list);
        console.log(list.find(15));
    });