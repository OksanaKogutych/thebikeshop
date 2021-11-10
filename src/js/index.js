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
    if(!closeBtn.classList.contains('open')) {
        closeBtn.classList.add('open'); 
             
    } else {
        closeBtn.classList.remove('open');
        
    }
});

/*==================== SHOW MENU ====================*/
const showMenu = (toggleId, navId) =>{
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId);
    
    
    if(toggle && nav){
        toggle.addEventListener('click', ()=>{            
            nav.classList.toggle('show-menu');
        });
    }
}
showMenu('nav__toggle','nav__menu');





  