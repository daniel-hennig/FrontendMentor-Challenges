const hamburger = document.getElementById("hamburger");
const navBar = document.getElementById("nav-bar");
const body = document.querySelector("body");

let active = false;

hamburger.addEventListener("click", (e) => {
    if(active) { // close menu
        e.preventDefault();

        hamburger.classList.remove("open");
        navBar.classList.remove("slideLeft");
        navBar.classList.add("slideRight");

        setTimeout(function() {
            for(let i = 0; i < navBar.children[0].children.length; i++) {
                navBar.children[0].children[i].firstChild.classList.remove("slideIn"); 
            }
        }, 200);

        body.style.overflow = "initial";

        active = false;
    } else { // open menu
        e.preventDefault();

        if(navBar.classList.contains("slideRight")) {
            navBar.classList.remove("slideRight");    
        }

        navBar.classList.add("slideLeft");
        navBar.classList.add("overlay-menu");
        
        for(let i = 0; i < navBar.children[0].children.length; i++) {
            navBar.children[0].children[i].firstChild.classList.add("slideIn");    
        }

        hamburger.classList.add("open");
        body.style.overflow = "hidden";

        active = true;
    }
});