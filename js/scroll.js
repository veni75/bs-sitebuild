document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});


let scroll = document.querySelector(".scroll");
let scrollTop = document.querySelector(".scrollTop");

document.querySelector('.html, body').onscroll = lgSrl;
function lgSrl(e) {
    let tav=document.querySelector('html,body').scrollTop;
    scroll.classList.remove("d-none");
    scrollTop.classList.add("d-none");
    scroll.classList.add("fixed-top");
    scroll.classList.add("bg-white");

    if (tav === 0) {
        scroll.classList.add("d-none");
        scrollTop.classList.remove("d-none");
    }
}



/* const cls = ['menuMozog', 'fixed-top']
const menu = document.querySelector('.navbar');
const menuA = document.querySelectorAll('.nav-link');

document.querySelector('.html, body').onscroll = lgSrl;
 function lgSrl(e) {
    let aktTav=$('html,body').scrollTop();
    menu.classList.add(...cls);
    menuA.forEach(item => item.classList.add('fekete'));

    if (aktTav === 0) {
        menu.classList.remove(...cls);
        menuA.forEach(item => item.classList.remove('fekete'));
    }
 } */