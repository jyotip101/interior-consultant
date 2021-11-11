const navBar = document.querySelector('.nav-bar');
const nav = document.querySelector('.mobile-nav');

const desktopNav = document.querySelector('.header-links'); 
const navbarDesktopLink = desktopNav.querySelectorAll('.link');
const mobileNav = document.querySelector('.mobile-links'); 
const navbarMobileLink = mobileNav.querySelectorAll('.link'); 
let menuText; 
const menuClick = () => {
    menuText = navBar.textContent; 
      
    if(menuText == 'close') {
        navBar.textContent = 'menu';
        mobileNav.style.display = 'none';

    } else {
        navBar.textContent = 'close';
        mobileNav.style.display = 'flex';
         
    }
}

const closeMenu = () => {
    navBar.textContent = 'menu';
    mobileNav.style.display = 'none'; 
}

// clink on menu 
nav.addEventListener('click', menuClick); 

navbarDesktopLink.forEach(element => {

    element.addEventListener('click', function(){

// click on links to add active class
        navbarDesktopLink.forEach(n => n.classList.remove('active'));
        this.classList.add('active');
    });
});

navbarMobileLink.forEach(element => {
    element.addEventListener('click', function(){

// click on links to add active class
    navbarMobileLink.forEach(n => n.classList.remove('active'));
    this.classList.add('active');

// click on links to close 
    closeMenu();

    });
});
  