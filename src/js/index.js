import '../styles/styles.scss'


/*==================== SLIDER ====================*/

import { tns } from "../../node_modules/tiny-slider/src/tiny-slider"

var slider = tns({
    container: '.banner__slider',
    //items: 1,
    loop: false,
    controlsContainer: "#customize-controls",
    //slideBy: 1,
    nav: true,
    navContainer: "#customize-paginations",
    autoplay: true,
    autoplayButtonOutput: false,

});

/*==================== CLOSE BUTTON ====================*/

const menuBtn = document.querySelector('.header__toggle');
const closeBtn = document.querySelector('.header__toggle__burger');
menuBtn.addEventListener('click', () => {
    if (!closeBtn.classList.contains('open')) {
        closeBtn.classList.add('open');

    } else {
        closeBtn.classList.remove('open');

    }
});

/*==================== SHOW MENU ====================*/
const showMenu = (toggleId, navId) => {
    const toggle = document.getElementById(toggleId),
        nav = document.getElementById(navId);


    if (toggle && nav) {
        toggle.addEventListener('click', () => {
            nav.classList.toggle('show-menu');
        });
    }
}
showMenu('nav__toggle', 'nav__menu');





/*NOMEWORK*/


const buttons = document.getElementsByClassName('product-item__add-btn');
console.log(document.getElementsByClassName('product-item__add-btn'));



for (let button of buttons) {
    button.addEventListener('click', function (e) {
        e.preventDefault;
        const id = e.target.parentElement.dataset.id;
        
        createRow(id);
        rowNumber();
    }, true);
}

function rowNumber () {
    console.log(document.querySelectorAll('tr'));
    var str = Array.from(document.querySelectorAll('tr'));
    for (var i = 1; i < str.length; i += 1) {

        str[i].children[0].innerHTML = i;
    }
}  



function createRow(id) {

   // console.log(id);

    let tableBody = document.getElementById('tableBody')
    let newRow = document.createElement("tr");

    tableBody.appendChild(newRow);

    let numberColumn = document.createElement("td");
    numberColumn.classList.add("first");


    let nameColumn = document.createElement("td");
    nameColumn.appendChild(document.createTextNode(document.querySelector(`[data-id= "${id}"] .product-item__name`).innerHTML));

    let priceColumn = document.createElement("td");
    priceColumn.appendChild(document.createTextNode(document.querySelector(`[data-id="${id}"] .product-item__price`).innerHTML));
    
    newRow.appendChild(numberColumn);
    newRow.appendChild(nameColumn);
    newRow.appendChild(priceColumn);
}
