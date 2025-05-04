
// CODE FOR ALTERNATING TEXT VISIBILTY ON CLICK IN SUCCURSALES PAGE

const textBlock = document.querySelectorAll('#text-tab section');
const menuBlock = document.querySelectorAll('#menu-tab li');
const linksBlock = document.querySelectorAll('#menu-tab a');
// 
const docText = document.getElementById('agroa-text');
const eventText = document.getElementById('arkana-text');
const projetText = document.getElementById('immob-text');
const galerieText = document.getElementById('prest-text');
// 
const docItem = document.getElementById('agroa-item');
const eventItem = document.getElementById('arkana-item');
const projetItem = document.getElementById('immob-item');
const galerieItem = document.getElementById('prest-item');
// 
const docLink = document.getElementById('agroa-link');
const eventLink = document.getElementById('arkana-link');
const projetLink = document.getElementById('immob-link');
const galerieLink = document.getElementById('prest-link');

menuBlock.forEach( (e) => {
    e.addEventListener("click", (i) => {
        if((i.target) !== i.currentTarget) {
            let clickedItem = i.target.id;
            console.log(clickedItem);
            
            if(clickedItem === "arkana-link") {
                for(i = 0; i < menuBlock.length; i++) {
                    menuBlock[i].classList.remove('active-tab');
                    textBlock[i].classList.replace('d-block', 'd-none');
                }
                eventItem.classList.add('active-tab');
                eventText.classList.replace('d-none', 'd-block');
            } else if(clickedItem === "agroa-link") {
                for(i = 0; i < menuBlock.length; i++) {
                    menuBlock[i].classList.remove('active-tab');
                    textBlock[i].classList.replace('d-block', 'd-none');
                }
                docItem.classList.add('active-tab');
                docText.classList.replace('d-none', 'd-block');

            } else if(clickedItem === "immob-link") {
                for(i = 0; i < menuBlock.length; i++) {
                    menuBlock[i].classList.remove('active-tab');
                    textBlock[i].classList.replace('d-block', 'd-none');
                }
                projetItem.classList.add('active-tab');
                projetText.classList.replace('d-none', 'd-block');
            } else if(clickedItem === "prest-link") {
                for(i = 0; i < menuBlock.length; i++) {
                    menuBlock[i].classList.remove('active-tab');
                    textBlock[i].classList.replace('d-block', 'd-none');
                }
                galerieItem.classList.add('active-tab');
                galerieText.classList.replace('d-none', 'd-block');
            }  else {
                for(i = 0; i < menuBlock.length; i++) {
                    menuBlock[i].classList.remove('active-tab');
                    textBlock[i].classList.replace('d-block', 'd-none');
                }
                eventItem.classList.add('active-tab');
                eventText.classList.replace('d-none', 'd-block');
            }
        }
    });
});