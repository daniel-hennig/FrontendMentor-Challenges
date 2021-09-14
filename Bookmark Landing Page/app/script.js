'use strict'

// hamburger + overlay
const hamburger = document.getElementById("hamburger");
const navBar = document.getElementById("nav-bar");
const navLogoImg = document.getElementById("nav-logo-img");
const navBarItem = document.querySelectorAll(".nav_bar_item");
const body = document.querySelector("body");

let active = false;

hamburger.addEventListener("click", (e) => {
    if(active) { // close menu
        e.preventDefault();

        navBar.classList.remove("fade-in");
        navBar.classList.add("fade-out");
        
        hamburger.children[0].classList.remove("first-span-anima");
        hamburger.children[2].classList.remove("third-span-anima");
        
        hamburger.children[0].classList.add("reverse-first-span-anima");
        hamburger.children[2].classList.add("reverse-third-span-anima");
        hamburger.children[1].style.opacity = 1;

        navLogoImg.children[0].classList.remove("logo-change");
        navLogoImg.children[1].children[0].classList.remove("logo-change");
        navLogoImg.children[1].children[1].classList.remove("logo-change");
        
        body.style.overflow = "initial";

        active = false;
    } else { // open menu
        e.preventDefault();

        if(!navBar.classList.contains("overlay")) {
            navBar.classList.add("overlay");
            navBar.classList.add("fade-in");
        } else {
            navBar.classList.remove("fade-out");
            navBar.classList.add("fade-in");
        }

        if(hamburger.children[0].classList.contains("reverse-first-span-anima") && hamburger.children[2].classList.contains("reverse-third-span-anima")) {
            hamburger.children[0].classList.remove("reverse-first-span-anima");            
            hamburger.children[2].classList.remove("reverse-third-span-anima");            
        }

        hamburger.children[1].style.opacity = 0;
        hamburger.children[0].classList.add("first-span-anima");
        hamburger.children[2].classList.add("third-span-anima");

        navLogoImg.children[0].classList.add("logo-change");
        navLogoImg.children[1].children[0].classList.add("logo-change");
        navLogoImg.children[1].children[1].classList.add("logo-change");

        navBarItem.forEach(item => {
            item.style.opacity = "1";
        });

        body.style.overflow = "hidden";

        active = true;
    }
});

// slider
const tabList = document.getElementById("tab-list").children;
const slideContainer = document.querySelectorAll(".slide-container");

for(let i = 0; i < tabList.length; i++) {
    tabList[i].firstChild.addEventListener(("click"), function(e) {

        e.preventDefault();

        if(tabList[i].firstChild.id === "tab-bookmarking") {
            slideContainer.forEach(slide => {
                for(let j = 0; j < tabList.length; j++) {
                    tabList[j].firstChild.className = "";
                }

                tabList[i].firstChild.className = "active";
                slide.style.transform = "translateX(100%)";
            });
        }

        if(tabList[i].firstChild.id === "tab-searching") {
            slideContainer.forEach(slide => {
                for(let j = 0; j < tabList.length; j++) {
                    tabList[j].firstChild.className = "";
                }

                tabList[i].firstChild.className = "active";
                slide.style.transform = "translateX(0)";
            });
        }

        if(tabList[i].firstChild.id === "tab-sharing") {
            slideContainer.forEach(slide => {
                for(let j = 0; j < tabList.length; j++) {
                    tabList[j].firstChild.className = "";
                }

                tabList[i].firstChild.className = "active";
                slide.style.transform = "translateX(-100%)";
            });
        }
    });
}

// accordion
const accordion = document.getElementsByClassName("accordion-box");

for(let i = 0; i < accordion.length; i++) {
    accordion[i].addEventListener(("click"), function() {
        this.classList.toggle("active");

        // toggle transition
        if(this.children[1].style.height === "" || this.children[1].style.height === "0px") {
            this.children[1].style.height = this.children[1].scrollHeight + "px";
        } else {
            this.children[1].style.height = 0;
        }
    });
}

// form email-validation
const contactBtn = document.getElementById("contact-btn");

contactBtn.addEventListener("click", (e) => {
    const emailInput = document.getElementById("email-input").value;
    const exclamationMark = document.querySelector(".exclamation-mark");
    const errorMessage = document.querySelector(".error-message");
    
    e.preventDefault();

    function validateEmail(email) {
        const regex = /^(([^<>()äüöü\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        // const regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;    

        return regex.test(email);
    }    

    if(validateEmail(emailInput) === true) {
        if(exclamationMark.classList.contains("error") || errorMessage.classList.contains("error")) {
            exclamationMark.classList.remove("error");            
            errorMessage.classList.remove("error");            
        }
    } else {
        exclamationMark.classList.add("error");
        errorMessage.classList.add("error");
    }
});