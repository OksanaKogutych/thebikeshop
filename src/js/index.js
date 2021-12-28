import '../styles/styles.scss';
import Banner from './main-slider';
import Slider from './product-slider';
import Header from './header';
import Comments from './comments';
import Products from './products';
// import 'regenerator-runtime/runtime';


/*==================== Banner ====================*/

// const mainBanner = new Banner('banner-slider');
// mainBanner.init();
const mainBanner = new Banner({
            container: '.banner__slider',
        //items: 1,
        loop: false,
        controlsContainer: "#customize-controls",
        //slideBy: 1,
        nav: true,
        navContainer: "#customize-paginations",
        autoplay: true,
        autoplayButtonOutput: false
});
// const mainBanner = new Banner (
//     {
//         container: '.banner__slider',
//         //items: 1,
//         loop: false,
//         controlsContainer: "#customize-controls",
//         //slideBy: 1,
//         nav: true,
//         navContainer: "#customize-paginations",
//         autoplay: true,
//         autoplayButtonOutput: false
//     }
// )


/*==================== Header ====================*/

const header = new Header(
    document.querySelector('.header__toggle__burger'),
    document.querySelector('.header__menu')
)
header.init();

/*==================== Comments ====================*/
const comments = new Comments ('comments-block');
comments.init();



/*==================== Products block ====================*/

let tab = function () {
    let tabNav = document.querySelectorAll('.products__tabs-links'),
    tabContent = document.querySelectorAll('.products__list'),
    tabName;
    

    tabNav.forEach(item => {
        item.addEventListener('click', selectTabNav)
    });

    function selectTabNav() {
        tabNav.forEach(item => {
            item.classList.remove('is-active');
        });
        this.classList.add('is-active');
        tabName = this.getAttribute('data-tab-name');
        selectTabContent(tabName);

    }
    function selectTabContent(tabName) {
        tabContent.forEach(item => {
            item.classList.contains(tabName) ? item.classList.add('is-active') : item.classList.remove('is-active');
        })
    }
}


tab();

// const productsBlock = new Products ('.products__tabs-links', '.products__list');
// productsBlock.init();



/*==================== Products slider ====================*/


const kidsBike = new Banner({
    container: '.tab-1',
    items: 2,
    autoplay: true,
    autoplayButtonOutput: false,
    // responsive: {
    //     768: {
    //     edgePadding: 20,
    //     gutter: 20,
    //     items: 2,
    //     controls: true,
    //     },
    //     700: {
    //     gutter: 30
    //     },
    //     900: {
    //     items: 3
    //     }
    // },
    loop: true,
    nav: false,
    controlsContainer: ".products #customize-controls"
});

const sportsBike = new Banner({
    container: '.tab-2',
    items: 1,
    autoplay: true,
    autoplayButtonOutput: false,
    // responsive: {
    //     768: {
    //     edgePadding: 20,
    //     gutter: 20,
    //     items: 2,
    //     controls: true,
    //     },
    //     700: {
    //     gutter: 30
    //     },
    //     900: {
    //     items: 3
    //     }
    // },
    loop: true,
    nav: false,
    controlsContainer: ".products #customize-controls"
});

const newBike = new Banner({
    container: '.tab-3',
    items: 1,
    autoplay: true,
    autoplayButtonOutput: false,
    // responsive: {
    //     768: {
    //     edgePadding: 20,
    //     gutter: 20,
    //     items: 2,
    //     controls: true,
    //     },
    //     700: {
    //     gutter: 30
    //     },
    //     900: {
    //     items: 3
    //     }
    // },
    loop: true,
    nav: false,
    controlsContainer: ".products #customize-controls"
});


// function slider () {
//     let tabNav = document.querySelectorAll('.products__tabs-links'),
//     tabContent = document.querySelectorAll('.products__list'),
//     tabName;

//     tabNav.forEach(item => {
//         item.addEventListener('click', selectTabNav)
//     });

//     function selectTabNav() {
       
//         tabName = this.getAttribute('data-tab-name');
//         selectTabContent(tabName);


//     }

//     function selectTabContent(tabName) {
//         tabContent.forEach(item => {
//             if (item.classList.contains(tabName) ) {
//                 const slider = new Slider (`${item.id}`);
//                 slider.init();
//             }
            
//         })
//     }

// }
// slider ();

// const mainBanner = new Banner ('banner-slider')
// mainBanner.init();

// const tabs = document.querySelectorAll('.products__tabs-links');
// tabs.forEach(tab => {
//     tab.addEventListener('cliDOM() => {
//        const id = tab.id;
//        const kidsSlider = new Banner(`${id}`);
// kidsSlider.init();
        
//     });
    
// })

// const kidsSlider = new Banner('kids-bikes');
// kidsSlider.init();
// const sportSlider = new Banner('sport-bikes');
// sportSlider.init();
// const newSlider = new Banner('new-bikes');
// newSlider.init();

// const productBlock = new Banner (
//     {
//         container: '.products__list',
//         //items: 3,
//         loop: true,
//         controlsContainer: ".products #customize-controls",
//         slideBy: 1,
//         nav: false,
//         //navContainer: "#customize-paginations",
//         autoplay: true,
//         autoplayButtonOutput: false
//     }

// )






/*NOMEWORK*/

// const buttons = document.getElementsByClassName('product-item__add-btn');

// let emptyBody = document.getElementById('tableBody').childElementCount;
// console.log(emptyBody);
// if (emptyBody === 0) {
//     let table = document.querySelector('table');
//     table.style.display = 'none';
// }




// for (let button of buttons) {
//     button.addEventListener('click', function (e) {
//         e.preventDefault;        
//         const id = e.target.parentElement.dataset.id;   
//         let table = document.querySelector('table');
//     table.style.display = 'table';
//         checkRow (id);


//         rowNumber();
//         deleteRow ()

//     }, true);
// }

// function rowNumber() {
//     //console.log(document.querySelectorAll('tr'));
//     var str = Array.from(document.querySelectorAll('tr'));
//     for (var i = 1; i < str.length; i += 1) {

//         str[i].children[0].innerHTML = i;
//     }
// }



// function createRow(id) {



//     let tableBody = document.getElementById('tableBody')


//     let newRow = document.createElement("tr");
//     newRow.setAttribute("id", `prod_${id}`);


//     tableBody.appendChild(newRow);

//     let numberColumn = document.createElement("td");
//     numberColumn.classList.add("first");


//     let nameColumn = document.createElement("td");
//     nameColumn.appendChild(document.createTextNode(document.querySelector(`[data-id= "${id}"] .product-item__name`).innerHTML));

//     let priceColumn = document.createElement("td");
//     priceColumn.appendChild(document.createTextNode(document.querySelector(`[data-id="${id}"] .product-item__price`).innerHTML));

//     let quantityColumn = document.createElement("td");
//     quantityColumn.classList.add("one");
//     quantityColumn.innerText = 1;

//     let removeColumn = document.createElement("td");
//     let button = document.createElement("button");    
//     button.innerHTML = "REMOVE";
//     button.setAttribute("id", "remove");
//     removeColumn.appendChild(button);


//     newRow.appendChild(numberColumn);
//     newRow.appendChild(nameColumn);
//     newRow.appendChild(priceColumn);
//     newRow.appendChild(quantityColumn);
//     newRow.appendChild(removeColumn);
// }

// function deleteRow (id) {
//     let removeButtons = Array.from(document.querySelectorAll('#remove'));

//     removeButtons.forEach(element => {
//         element.addEventListener('click', function (e) {
//             e.target.closest("tr").remove();

//             rowNumber() 

//         })
//     });


// }


// function checkRow (id) {
//     let productInfo = document.getElementById(`prod_${id}`);
//     console.log(productInfo);
//     if (productInfo) {
//         let productQuantity = document.querySelector(`#prod_${id} .one`).innerHTML;
//         productQuantity++;
//         document.querySelector(`#prod_${id} .one`).innerHTML = productQuantity;
//         console.log(productQuantity)
//     }
//     else {
//         createRow(id);
//     }


// }
