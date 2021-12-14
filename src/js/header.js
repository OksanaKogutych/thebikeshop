export default class Header {
    constructor (menuBtn, menu) {

        this.menuBtn = menuBtn;
        this.menu = menu;

    }

    init () {
        this.addlisteners ()
    }

    addlisteners () {
        this.menuBtn.addEventListener('click', this.toggleActiveMenu.bind(this));
    }

    toggleActiveMenu() {
  
        this.menuBtn.classList.toggle('open');
        this.menu.classList.toggle('show-menu');
    }
}