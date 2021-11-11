const navBar = document.querySelector('.nav-bar');
const nav = document.querySelector('.mobile-nav');

let menuText; 
nav.addEventListener('click', function () {
    
    menuText = navBar.textContent; 
     
    navBar.textContent = menuText == 'menu' ? 'close' : 'menu';
});