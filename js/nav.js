// JS goes here

class Nav {
    constructor(object) {
        this.header = object.header;
        this.button = object.button;
        this.id = object.id;
        this.setup();
    }
    setup() {
        this.header.innerHTML = `S&J - ${id}`;
        // this.button.addEventListener('click', () => {
        // });
    }
}

const hText = document.querySelector('h1');

const id = document.querySelector('nav').dataset.title;

const button = document.querySelector(`.nav-${id.toLowerCase()}`).querySelector('button');

const navbar = new Nav({ 'header' : hText, 'id' : id, 'button' : button });