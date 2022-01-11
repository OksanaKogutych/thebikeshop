

export default class Products {
    constructor (tabNav, tabContent) {
        this.tabNav = document.querySelectorAll(tabNav);
        this.tabContent = document.querySelectorAll(tabContent);
        this.tabName;
    }

    init (e) {
        this.selectTabNav(e);
    }

    selectTabNav(e) {
        
        this.tabNav.forEach(item => {        
            item.classList.remove('is-active');
        });
        e.target.classList.add('is-active');     
        let tabName = e.target.getAttribute('data-tab-name');
        this.selectTabContent(tabName);

    }
    selectTabContent(tabName) {
        this.tabContent.forEach(item => {            
            item.classList.contains(tabName) ? item.classList.add('is-active') : item.classList.remove('is-active');
        })
    }
}