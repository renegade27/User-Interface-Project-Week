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
            // document.querySelector(`.${this.id.toLowerCase()}`).style.transition = '0.8s ease-in-out';
            document.querySelector(`.header-${this.id.toLowerCase()}`).style.display = "none";
            document.querySelector(`.${this.id.toLowerCase()}-block`).style.display = "none";
            document.querySelector(`.${this.id.toLowerCase()}`).style.height = '80px';
            document.querySelector(`.${this.id.toLowerCase()}`).style.margin = '0 auto';
            document.querySelector('.expanded-nav-view').style.display = "flex";
            TweenMax.to('.expanded-nav-view', 1.0, {opacity:'1', height: "800px"});
            for(var i = 1; i <= 4; i++) {
                TweenMax.to(`#link${i}`, 1.15, {opacity:'1', y:`${i*150}`, ease: Bounce.easeOut, delay:1.15});
            }
            this.button.src="img/nav-hamburger-close.png";
            this.button.addEventListener('click', () => {
                document.querySelector(`.${this.id.toLowerCase()}`).style.transition = '0.5s ease-in-out';
                document.querySelector(`.header-${this.id.toLowerCase()}`).style.display = "flex";
                document.querySelector(`.${this.id.toLowerCase()}-block`).style.display = "";
                document.querySelector(`.${this.id.toLowerCase()}`).style.height = '100%';
                document.querySelector(`.${this.id.toLowerCase()}`).style.marginBottom = '20px';
                document.querySelector('.expanded-nav-view').style.display = "none";
                this.button.src="img/nav-hamburger.png";
                for(var i = 1; i <= 4; i++) {
                    TweenMax.to(`#link${i}`, 0.1, {opacity:'0', y:`90px`});
                }
                TweenMax.to('.expanded-nav-view', 0.1, {height:'1px', opacity:'0'});
                this.setup();
            });
        });
    }
}

const hText = document.querySelector('h1');

const id = document.querySelector('nav').dataset.title;

const button = document.querySelector(`.nav-${id.toLowerCase()}`).querySelector('img');

const navbar = new Nav({ 'header' : hText, 'id' : id, 'button' : button });