'use strict';

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', animation);
});

function animation (e){
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
    });
}


let scroll = document.querySelector(".scroll");
let scrollTop = document.querySelector(".scrollTop");

document.querySelector('.html, body').onscroll = lgSrl;
function lgSrl(e) {
    let tav = document.querySelector('html,body').scrollTop;
    scroll.classList.remove("d-none");
    scrollTop.classList.add("d-none");
    scroll.classList.add("fixed-top");
    scroll.classList.add("bg-white");

    if (tav === 0) {
        scroll.classList.add("d-none");
        scrollTop.classList.remove("d-none");
    }
}
