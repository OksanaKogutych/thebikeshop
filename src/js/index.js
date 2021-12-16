import '../styles/styles.scss';
import Banner from './main-slider';
import Header from './header';
import Comments from './comments';
// import 'regenerator-runtime/runtime';


/*==================== Banner ====================*/

const mainBanner = new Banner();
mainBanner.init();

/*==================== Header ====================*/

const header = new Header(
    document.querySelector('.header__toggle__burger'),
    document.querySelector('.header__menu')
)
header.init();

/*==================== Comments ====================*/
const comments = new Comments ('comments-block');
comments.init();








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
