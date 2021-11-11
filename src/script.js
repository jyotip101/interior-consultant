const navBar = document.querySelector('.nav-bar');
const nav = document.querySelector('.mobile-nav');
const mobileNav = document.querySelector('.mobile-links');
let menuText; 
nav.addEventListener('click', function () {
    
    menuText = navBar.textContent; 
     
    // navBar.textContent = menuText == 'menu' ? 'close' : 'menu';

    if(menuText == 'close') {
        navBar.textContent = 'menu';
        mobileNav.style.display = 'none';
    } else {
        navBar.textContent = 'close';
        mobileNav.style.display = 'flex';
    }
});