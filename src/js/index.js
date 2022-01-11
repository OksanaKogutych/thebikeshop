import '../styles/styles.scss';
import Banner from './main-slider';
import Header from './header';
import Comments from './comments';
import Products from './products';
import Modal from './modal';



/*==================== Banner ====================*/


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

/*==================== Products block ====================*/


const productsBlock = new Products ('.products__tabs-links', '.products__list');
let tabNav = document.querySelectorAll('.products__tabs-links');
tabNav.forEach(item => {
    item.addEventListener('click', productsBlock.init.bind(productsBlock))
   
});


/*==================== Products slider ====================*/

const kidsBike = new Banner({
    container: '.tab-1',
    items: 4,
    autoplay: true,
    autoplayButtonOutput: false,
    loop: false,
    nav: false,
    controlsContainer: "#products-customize-controls",
    responsive: {
        768: {
        edgePadding: 20,
        gutter: 20,
        items: 2,
        controls: true,
        },
        700: {
        gutter: 30
        },
        900: {
        items: 3
        }
    },
});
kidsBike.init()

const sportsBike = new Banner({
    container: '.tab-2',
    items: 1,
    autoplay: false,
    autoplayButtonOutput: false,    
    loop: true,
    nav: false,
    controlsContainer: "#products-customize-controls"
});
sportsBike.init();

const newBike = new Banner({
    container: '.tab-3',
    items: 1,
    autoplay: false,
    autoplayButtonOutput: false,
    nav: false,
    controlsContainer: "#products-customize-controls"
});
newBike.init();




/*==================== Modal ====================*/

const modal = new Modal ('.modal', '.close');
modal.init();