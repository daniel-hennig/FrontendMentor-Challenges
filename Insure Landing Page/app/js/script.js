'use strict'

const hamburger = document.getElementById('menu-hamburger');
const menu = document.getElementById('menu');
const nav = document.getElementById('nav');
const body = document.querySelector('body');
const attribute = document.getElementById('attribute');

let active = false;

hamburger.addEventListener('click', (e) => {
    if(active) { // close menu
        e.preventDefault();
        hamburger.classList.remove('open');
        menu.classList.remove('menu__open');
        nav.classList.remove('fade-in');
        nav.classList.add('fade-out');
        attribute.classList.remove('hidden');
        body.style.overflow = 'initial';
        
        active = false;
    } else { // open menu
        e.preventDefault();
        hamburger.classList.add('open');
        nav.classList.remove('invisible');
        nav.classList.add('nav_overlay');
        nav.classList.add('fade-in');
        nav.classList.remove('fade-out');
        attribute.classList.add('hidden');
        body.style.overflow = 'hidden';
        
        active = true;
    }
});