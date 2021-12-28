
// let tab = function () {
//     let tabNav = document.querySelectorAll('.products__tabs-links'),
//     tabContent = document.querySelectorAll('.products__list'),
//     tabName;
    

//     tabNav.forEach(item => {
//         item.addEventListener('click', selectTabNav)
//     });

//     function selectTabNav() {
//         tabNav.forEach(item => {
//             item.classList.remove('is-active');
//         });
//         this.classList.add('is-active');
//         tabName = this.getAttribute('data-tab-name');
//         selectTabContent(tabName);

//     }
//     function selectTabContent(tabName) {
//         this.tabContent.forEach(item => {
//             item.classList.contains(tabName) ? item.classList.add('is-active') : item.classList.remove('is-active');
//         })
//     }
// }


export default class Products {
    constructor (tabNav, tabContent) {
        this.tabNav = document.querySelectorAll(tabNav);
        this.tabContent = document.querySelectorAll(tabContent);

    }

    init () {
        this.tabNav.forEach(item => {
            item.addEventListener('click', this.selectTabNav())
        });
    }

    selectTabNav() {
        this.tabNav.forEach(item => {
            item.classList.remove('is-active');
        });
        this.classList.add('is-active');
        let tabName = this.getAttribute('data-tab-name');
        this.selectTabContent(tabName);

    }
    selectTabContent(tabName) {
        tabContent.forEach(item => {
            item.classList.contains(tabName) ? item.classList.add('is-active') : item.classList.remove('is-active');
        })
    }
}