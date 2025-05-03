// MANAGE LOGO ON NAVBAR
const logo1 = document.getElementById('logo-1');
const logo2 = document.getElementById('logo-2');
const logoWrapper = document.getElementById('logo-wrapper');
const indexNav = document.getElementById('index-nav');

window.addEventListener('scroll', () => {
    if(window.scrollY >= 80) {
        logo2.style.opacity = 0;
        logo1.style.opacity = 1;
        logo2.style.transition = "opacity 1s ease-out";
        indexNav.style.backgroundColor =  "#00d668";
        indexNav.style.transition = "backgroundColor 1s ease-out";
    }
    else if(window.scrollY < 80) {
        indexNav.style.backgroundColor =  "transparent";
        indexNav.style.transition = "backgroundColor 1s ease-out";
        logo2.style.opacity = 1;
        logo1.style.opacity = 0;
        logo1.style.transition = "opacity 1s ease-in";
    }
})

// MANAGE "READ MORE" BUTTONS
let noOfXters = 250;
let texts = document.querySelectorAll(".text");
let dots = document.querySelectorAll(".dots");
let extras = document.querySelectorAll(".extra");

texts.forEach(text => {
    // If text length < the no of xters, hide the lire plus button

    if(text.textContent.length < noOfXters){
        text.children.style.display = "none"; 
    }
    else {
        dots.forEach(dots => {
            dots.innerHTML = "...lire plus...";
            dots.style.color = "purple";
            dots.style.fontWeight = "bold";
            dots.style.cursor = "pointer";
        });
        extras.forEach(extra => {
            extra.style.display = "none";
        });
    }   
    
});

function lirePlus(btn){
    let post = btn.parentElement;
    let readIndex = 0;

    if(readIndex == 0){
        post.children[1].style.display = "block";
        post.children[0].classList.replace('d-block', 'd-none');
        post.children[2].classList.replace('d-none', 'd-block');
        post.children[2].innerHTML = "...lire moins...";
        post.children[2].style.color = "purple";
        post.children[2].style.fontWeight = "bold";
        post.children[2].style.cursor = "pointer"; 
        readIndex++;
    }
    else {
        post.children[0].classList.replace('d-none', 'd-block');
        post.children[2].classList.replace('d-block', 'd-none');
        post.children[1].style.display = "none";
        post.children[0].innerHTML = "...lire moins...";
        post.children[0].style.color = "purple";
        post.children[0].style.fontWeight = "bold";
        post.children[0].style.cursor = "pointer"; 
        readIndex--;
    }
     
}

function lireMoins(btn){
    let post = btn.parentElement;
    let readIndex = 0;

    if(readIndex == 0){
        post.children[1].style.display = "none";
        post.children[0].classList.replace('d-none', 'd-block');
        post.children[2].classList.replace('d-block', 'd-none');
        post.children[0].innerHTML = "...lire plus...";
        post.children[0].style.color = "purple";
        post.children[0].style.fontWeight = "bold";
        post.children[0].style.cursor = "pointer"; 
        readIndex++;
    }
    else {
        post.children[0].classList.replace('d-block', 'd-none');
        post.children[2].classList.replace('d-none', 'd-block');
        post.children[1].style.display = "block";
        post.children[0].innerHTML = "...lire plus...";
        post.children[0].style.color = "purple";
        post.children[0].style.fontWeight = "bold";
        post.children[0].style.cursor = "pointer"; 
        readIndex--;
    }
}
