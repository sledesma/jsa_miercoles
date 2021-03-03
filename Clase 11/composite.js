class Component {

    constructor(tag, props) {
        this.tag = tag;
        this.props = props;

        this.children = []; // SON DEL MISMO TIPO QUE EL PADRE. Hay un solo TIPO de dato
        // en el arbol
    }

    addChild(component) {
        this.children.push(component);
    }
}

const div = new Component('div', {style: 'color: red'});

const link = new Component('a', {});

div.addChild(link);