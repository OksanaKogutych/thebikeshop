/*==================== CLOSE BUTTON ====================*/

const menuBtn = document.querySelector('.nav__toggle');
const closeBtn = document.querySelector('.nav__toggle__burger');
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
    
    // Validate that variables exist
    if(toggle && nav){
        toggle.addEventListener('click', ()=>{
            // We add the show-menu class to the div tag with the nav__menu class
            nav.classList.toggle('show-menu');
        });
    }
}
showMenu('nav__toggle','nav__menu');

// $(document).ready(function(){
//     $('.slider').slick();

// });