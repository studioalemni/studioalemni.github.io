/*
Sticky Navigation
*/
const toggleHeaderStick = function() {
    let navbar = document.querySelector('.site-header');
    let pageContent = document.querySelector('.page-content');
    let sticky = navbar.offsetTop;

    if (window.scrollY >= sticky) {
        navbar.classList.add('sticky');
        pageContent.classList.add('sticky');
    } else {
        navbar.classList.remove('sticky');
        pageContent.classList.remove('sticky');
    }
};

window.onscroll = function() {toggleHeaderStick()};

window.onload = function() {
    document.querySelector('.site-header').classList.remove('sticky');
};