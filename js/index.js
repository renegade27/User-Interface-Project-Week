
class Tab {
    constructor(object) {
        this.element = object.element;
        this.text1 = object.text1;
        this.text2 = object.text2;
        this.img = object.img;
        this.id = object.id
        this.setup();
    }
    setup() {
        this.element.addEventListener('click', () => {
            document.querySelector('.services-content-tabs').querySelectorAll('button').forEach(button => 
                button.classList.remove('tab-link-selected')
             );
            this.element.classList.toggle('tab-link-selected');
            this.setupContent();
        });
    }
    setupContent() {
        contentBlock.querySelector('h2').innerHTML = this.element.innerHTML;
        contentBlock.querySelector('img').src = this.img;
        contentBlock.querySelectorAll('.tab-text')[0].innerHTML = this.text1;
        contentBlock.querySelectorAll('.tab-text')[1].innerHTML = this.text2;
    }
}

const contentBlock = document.querySelector('.services-content-block');

const precontab = new Tab({
    'element' : document.querySelector('.services-content-tabs').querySelectorAll('button')[0],
    'text1' : 'Completely synergize resource taxing relationships via premier niche markets. Professionally cultivate one-to-one customer service with robust ideas. Dynamically innovate resource-leveling customer service for state of the art customer service.',
    'text2' : 'Completely synergize resource taxing relationships via premier niche markets. Professionally cultivate one-to-one customer service with robust ideas. Dynamically innovate resource-leveling customer service for state of the art customer service.',
    'img' : "./img/services/services-tab-pre-construction-img.png",
    'id' : 1
});

const contab = new Tab({
    'element' : document.querySelector('.services-content-tabs').querySelectorAll('button')[1],
    'text1' : 'Completely synergize resource taxing relationships via premier niche markets. Professionally cultivate one-to-one customer service with robust ideas. Dynamically innovate resource-leveling customer service for state of the art customer service.',
    'text2' : 'Completely synergize resource taxing relationships via premier niche markets. Professionally cultivate one-to-one customer service with robust ideas. Dynamically innovate resource-leveling customer service for state of the art customer service.',
    'img' : "./img/services/services-tab-construction-img.png",
    'id' : 2
});

const designtab = new Tab({
    'element' : document.querySelector('.services-content-tabs').querySelectorAll('button')[2],
    'text1' : 'Completely synergize resource taxing relationships via premier niche markets. Professionally cultivate one-to-one customer service with robust ideas. Dynamically innovate resource-leveling customer service for state of the art customer service.',
    'text2' : 'Completely synergize resource taxing relationships via premier niche markets. Professionally cultivate one-to-one customer service with robust ideas. Dynamically innovate resource-leveling customer service for state of the art customer service.',
    'img' : "./img/services/services-tab-design-build-img.png",
    'id' : 3
});

const sustaintab = new Tab({
    'element' : document.querySelector('.services-content-tabs').querySelectorAll('button')[3],
    'text1' : 'Completely synergize resource taxing relationships via premier niche markets. Professionally cultivate one-to-one customer service with robust ideas. Dynamically innovate resource-leveling customer service for state of the art customer service.',
    'text2' : 'Completely synergize resource taxing relationships via premier niche markets. Professionally cultivate one-to-one customer service with robust ideas. Dynamically innovate resource-leveling customer service for state of the art customer service.',
    'img' : "./img/services/services-tab-sustainability-img.png",
    'id' : 4
});