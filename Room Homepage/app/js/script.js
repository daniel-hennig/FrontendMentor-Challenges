const angleLeft = document.getElementById('angle-left');
const angleRight = document.getElementById('angle-right');
const angleLeft2 = document.getElementById('angle-left2');
const angleRight2 = document.getElementById('angle-right2');
const heroImg = document.getElementById('hero-img');
const h1 = document.getElementById('h1');
const hP = document.getElementById('hero-p');
const hamburger = document.getElementById('hamburger');
const hamburgerImg = document.getElementById('hamburger-img');
const logo = document.querySelector('.header__logo');
const links = document.querySelector('.header__links');
const overlay = document.querySelector('.overlay');
const body = document.querySelector('body');

let imgNumber = 1;

function changeText() {
    if(imgNumber === 1) {
        h1.textContent = 'Discover innovative ways to decorate';
        hP.textContent = `Our multifunctional collection blends design and function to suit your individual taste.
        Make each room unique, or pick a cohesive theme that best express your interests and what
        inspires you. Find the furniture pieces you need, from traditional to contemporary styles
        or anything in between. Product specialists are available to help you create your dream space.`;
    } else if(imgNumber === 2) {
        h1.textContent = 'We are available all across the globe';
        hP.textContent = `With stores all over the world, it's easy for you to find furniture for your home or place of business. 
        Locally, we’re in most major cities throughout the country. Find the branch nearest you using our 
        store locator. Any questions? Don't hesitate to contact us today.`;
    } else if(imgNumber === 3) {
        h1.textContent = 'Manufactured with the best materials';
        hP.textContent = `Our modern furniture store provide a high level of quality. Our company has invested in advanced technology 
        to ensure that every product is made as perfect and as consistent as possible. With three decades of 
        experience in this industry, we understand what customers want for their home and office.`;
    }
}

angleLeft.addEventListener('click', (event) => {
    imgNumber--;

    if(imgNumber < 1) {
        imgNumber = 3
    }

    changeText();
    heroImg.src = `dist/images/desktop-image-hero-${imgNumber}.jpg`;
    event.preventDefault();
});

angleRight.addEventListener('click', (event) => {    
    imgNumber++;
    
    if(imgNumber > 3) {
        imgNumber = 1;
    }

    changeText();
    heroImg.src = `dist/images/desktop-image-hero-${imgNumber}.jpg`;
    event.preventDefault();
});

angleLeft2.addEventListener('click', (event) => {
    if(window.innerWidth < 376) {    
        imgNumber--;
    
        if(imgNumber < 1) {
            imgNumber = 3
        }
    
        changeText();
        heroImg.style.content = `url("dist/images/mobile-image-hero-${imgNumber}.jpg")`;
        event.preventDefault();
    } else {    
        imgNumber--;
    
        if(imgNumber < 1) {
            imgNumber = 3
        }
    
        changeText();
        heroImg.src = `dist/images/desktop-image-hero-${imgNumber}.jpg`;
        event.preventDefault();
    }
});

angleRight2.addEventListener('click', (event) => {
    if(window.innerWidth < 376) {        
        imgNumber++;
        
        if(imgNumber > 3) {
            imgNumber = 1;
        }
    
        changeText();
        heroImg.style.content = `url("dist/images/mobile-image-hero-${imgNumber}.jpg")`;
        event.preventDefault();
    } else {        
        imgNumber++;
        
        if(imgNumber > 3) {
            imgNumber = 1;
        }
    
        changeText();
        heroImg.src = `dist/images/desktop-image-hero-${imgNumber}.jpg`;
        event.preventDefault();
    }
});

hamburger.addEventListener('click', () => {
    if(hamburger.classList.contains('open')) { //close hamburger menu
        logo.classList.remove('hidden');
        hamburgerImg.src = 'dist/images/icon-hamburger.svg';
        links.classList.remove('show');
        heroImg.style.marginTop = '0';
        overlay.classList.add('hidden');
        body.classList.remove('noscroll');

        hamburger.classList.remove('open');
    } else { //open hamburger menu
        logo.classList.add('hidden');
        hamburgerImg.src = 'dist/images/icon-close.svg';
        links.classList.add('show');
        heroImg.style.marginTop = '110px';
        overlay.classList.remove('hidden');
        body.classList.add('noscroll');

        hamburger.classList.add('open');
    }
});