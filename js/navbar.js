// MANAGE LOGO ON NAVBAR
const logo1 = document.getElementById('logo-1');
const logo2 = document.getElementById('logo-2');
const logoWrapper = document.getElementById('logo-wrapper');

window.addEventListener('scroll', () => {
    if(window.scrollY >= 80) {
        logo2.style.opacity = 0;
        logo1.style.opacity = 1;
        logo2.style.transition = "opacity 1s ease-out";
    }
    else if(window.scrollY < 80) {
        logo2.style.opacity = 1;
        logo1.style.opacity = 0;
        logo1.style.transition = "opacity 1s ease-in";
    }
})