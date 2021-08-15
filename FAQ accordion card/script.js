const questionContent = document.querySelectorAll(".question-content");
const question = document.querySelectorAll(".question");

questionContent.forEach(content => {
    content.children[0].addEventListener("click", (e) => {
        // open question-toggle
        if(content.children[1].classList.contains("hidden") || content.children[1].classList.contains("slide-out")) {
            content.children[0].children[0].className = "question strong";
            content.children[0].children[1].style.transform = "rotate(180deg)";
            content.children[1].className = "answer slide-in";
        }
        // close question-toggle
        else if(content.children[1].classList.contains("slide-in")) {
            content.children[0].children[0].className = "question";
            content.children[0].children[1].style.transform = "rotate(0deg)";
            content.children[1].className = "answer slide-out";
        }
    });
});