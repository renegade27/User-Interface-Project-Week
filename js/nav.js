// JS goes here

class Nav {
    constructor(object) {
        this.header = object.header;
        this.hamburger = object.hamburger;
        this.switch = object.switch;
        this.id = object.id;
        this.hamburgerHandler();
        if (this.id === 'Home') {
            this.switchHandlerHome();
        }
        if (this.id === 'Services') {
            this.switchHandlerServices();
        }
    }
    hamburgerHandler() {
        this.header.innerHTML = `S&J - ${id}`;
        this.hamburger.addEventListener('click', () => {
            document.querySelector(`.header-${this.id.toLowerCase()}`).style.display = "none";
            document.querySelector(`.${this.id.toLowerCase()}-block`).style.display = "none";
            document.querySelector(`.${this.id.toLowerCase()}`).style.height = '80px';
            document.querySelector(`.${this.id.toLowerCase()}`).style.margin = '0 auto';
            document.querySelector('.expanded-nav-view').style.display = "flex";
            TweenMax.to('.expanded-nav-view', 1.0, {opacity:'1', height: "1000px"});
            for(var i = 1; i <= 4; i++) {
                TweenMax.to(`#link${i}`, 1.15, {opacity:'1', y:`${i*175}`, ease: Bounce.easeOut, delay:1.15});
            }
            this.hamburger.src="img/nav-hamburger-close.png";
            this.hamburger.addEventListener('click', () => {
                document.querySelector(`.${this.id.toLowerCase()}`).style.transition = '0.5s ease-in-out';
                document.querySelector(`.header-${this.id.toLowerCase()}`).style.display = "flex";
                document.querySelector(`.${this.id.toLowerCase()}-block`).style.display = "";
                document.querySelector(`.${this.id.toLowerCase()}`).style.height = '100%';
                document.querySelector(`.${this.id.toLowerCase()}`).style.marginBottom = '20px';
                document.querySelector('.expanded-nav-view').style.display = "none";
                this.hamburger.src="img/nav-hamburger.png";
                for(var i = 1; i <= 4; i++) {
                    TweenMax.to(`#link${i}`, 0.1, {opacity:'0', y:`90px`});
                }
                TweenMax.to('.expanded-nav-view', 0.1, {height:'1px', opacity:'0'});
                this.hamburgerHandler();
            });
        });
    }
    findColor() {
        return dropdown.options[dropdown.selectedIndex].text;
    }
    switchHandlerHome() {
        this.switch.addEventListener('click', () => {
            TweenMax.to('nav', 1, { backgroundColor:`${colorCodes[0][dropdown.options[dropdown.selectedIndex].value].dark[0]}` });
            TweenMax.to('footer', 1, { backgroundColor:`${colorCodes[0][dropdown.options[dropdown.selectedIndex].value].dark[0]}` });
            TweenMax.to('.copyright', 1, { backgroundColor:`${colorCodes[0][dropdown.options[dropdown.selectedIndex].value].dark[0]}` });
            TweenMax.to('.container', 1, { backgroundColor:`${colorCodes[0][dropdown.options[dropdown.selectedIndex].value].dark[1]}` });
            TweenMax.to('.container.home-block', 1, { backgroundColor:`${colorCodes[0][dropdown.options[dropdown.selectedIndex].value].dark[1]}` });
            document.querySelectorAll('.img-overlay').forEach(img => img.style.backgroundColor = colorCodes[0][dropdown.options[dropdown.selectedIndex].value].dark[2]);
            this.switch.src = "img/switch-on.png";
            document.querySelector('#switch').addEventListener('click', () => {
                TweenMax.to('nav', 1, { backgroundColor:`${colorCodes[0][dropdown.options[dropdown.selectedIndex].value].light[0]}` });
                TweenMax.to('footer', 1, { backgroundColor:`${colorCodes[0][dropdown.options[dropdown.selectedIndex].value].light[0]}` });
                TweenMax.to('.copyright', 1, { backgroundColor:`${colorCodes[0][dropdown.options[dropdown.selectedIndex].value].light[0]}` });
                TweenMax.to('.container', 1, { backgroundColor:`${colorCodes[0][dropdown.options[dropdown.selectedIndex].value].light[1]}` });
                TweenMax.to('.container.home-block', 1, { backgroundColor:`${colorCodes[0][dropdown.options[dropdown.selectedIndex].value].light[1]}` });
                document.querySelector('.img-overlay').style.backgroundColor = colorCodes[0][dropdown.options[dropdown.selectedIndex].value].light[2];
                this.switch.src = "img/switch-off.png";
                this.switchHandlerHome();
            });
        });
    }
    switchHandlerServices() {
        this.switch.addEventListener('click', () => {
            TweenMax.to('nav', 1, { backgroundColor:`${colorCodes[0][dropdown.options[dropdown.selectedIndex].value].dark[0]}` });
            TweenMax.to('footer', 1, { backgroundColor:`${colorCodes[0][dropdown.options[dropdown.selectedIndex].value].dark[0]}` });
            TweenMax.to('.copyright', 1, { backgroundColor:`${colorCodes[0][dropdown.options[dropdown.selectedIndex].value].dark[0]}` });
            TweenMax.to('.container', 1, { backgroundColor:`${colorCodes[0][dropdown.options[dropdown.selectedIndex].value].dark[1]}` });
            TweenMax.to('.container.home-block', 1, { backgroundColor:`${colorCodes[0][dropdown.options[dropdown.selectedIndex].value].dark[1]}` });
            document.querySelector('.services-content-tabs').querySelectorAll('button').forEach(btn => btn.style.backgroundColor = colorCodes[0][dropdown.options[dropdown.selectedIndex].value].dark[2]);
            document.querySelector('.services-content-tabs').querySelectorAll('button').forEach(btn => btn.style.color = "#ffffff");
            this.switch.src = "img/switch-on.png";
            document.querySelector('#switch').addEventListener('click', () => {
                TweenMax.to('nav', 1, { backgroundColor:`${colorCodes[0][dropdown.options[dropdown.selectedIndex].value].light[0]}` });
                TweenMax.to('footer', 1, { backgroundColor:`${colorCodes[0][dropdown.options[dropdown.selectedIndex].value].light[0]}` });
                TweenMax.to('.copyright', 1, { backgroundColor:`${colorCodes[0][dropdown.options[dropdown.selectedIndex].value].light[0]}` });
                TweenMax.to('.container', 1, { backgroundColor:`${colorCodes[0][dropdown.options[dropdown.selectedIndex].value].light[1]}` });
                TweenMax.to('.container.services-block', 1, { backgroundColor:`${colorCodes[0][dropdown.options[dropdown.selectedIndex].value].light[1]}` });
                document.querySelector('.services-content-tabs').querySelectorAll('button').forEach(btn => btn.style.backgroundColor = '#ffffff');
                document.querySelector('.services-content-tabs').querySelectorAll('button').forEach(btn => btn.style.color = "#222222");
                this.switch.src = "img/switch-off.png";
                this.switchHandlerServices();
            });
        });
    }
}

const hText = document.querySelector('h1');

const id = document.querySelector('nav').dataset.title;

const hamburger = document.querySelector('#hamburger');

const lightswitch = document.querySelector('#switch');

const dropdown = document.querySelector('#color-dropdown');

const findColor = function() {
    return ;
}

const colorCodes = [{
    // [nav/footer, bg, overlay]
    'grey' : {
        light : ['#828282', '#ffffff', '#D8D8D8'],
        dark : ['#514f4f', '#969191', '#B4B4B4']
    }, 
    'salmon' : {
        light : ['#f27777', '#ecafaf', '#d88b8b'],
        dark: ['#B66464', '#f29d9d' ,'#e38181']
    },
    'purple' : {
        light : ['#B25FC7', '#F1C0FD', '#D961F7'],
        dark: ['#6A4074', '#876F8C','#8F4D9C']
    }
}];

const navbar = new Nav({ 
    'header' : hText, 
    'id' : id, 
    'hamburger' : hamburger, 
    'switch' : lightswitch
});