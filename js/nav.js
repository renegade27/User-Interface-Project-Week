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
        this.button.addEventListener('click', () => {
            document.querySelector(`.${this.id.toLowerCase()}`).style.transition = '0.8s ease-in-out';
            document.querySelector(`.header-${this.id.toLowerCase()}`).style.display = "none";
            document.querySelector(`.${this.id.toLowerCase()}-block`).style.display = "none";
            document.querySelector(`.${this.id.toLowerCase()}`).style.height = '80px';
            document.querySelector(`.${this.id.toLowerCase()}`).style.margin = '0 auto';
            document.querySelector('.expanded-nav-view').style.display = "flex";
            this.button.src="img/nav-hamburger-close.png";
            this.button.addEventListener('click', () => {
                document.querySelector(`.${this.id.toLowerCase()}`).style.transition = '0.2s ease-in-out';
                document.querySelector(`.header-${this.id.toLowerCase()}`).style.display = "flex";
                document.querySelector(`.${this.id.toLowerCase()}-block`).style.display = "";
                document.querySelector(`.${this.id.toLowerCase()}`).style.height = '100%';
                document.querySelector(`.${this.id.toLowerCase()}`).style.marginBottom = '20px';
                document.querySelector('.expanded-nav-view').style.display = "none";
                this.button.src="img/nav-hamburger.png";
                this.setup();
            });
        });
    }
}

const hText = document.querySelector('h1');

const id = document.querySelector('nav').dataset.title;

const button = document.querySelector(`.nav-${id.toLowerCase()}`).querySelector('img');

const navbar = new Nav({ 'header' : hText, 'id' : id, 'button' : button });