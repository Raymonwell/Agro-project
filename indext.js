// Homepage
var i = 0;
var images = ["./images/homeagro1.jpg", "./images/homeagro2.jpg", "./images/homeagro3.jpg"];
var time = 3000;

function changeImage() {
    document.slide.src = images[i];
    if (i < images.length - 1) {
        i++;
    } else {
        i = 0;
    }
    setTimeout("changeImage()", time);
}
window.onload = changeImage;

// Show nav
const menu = document.querySelector(".nav_page");
const menuBtn = document.querySelector(".open-nav-btn");
const closeBtn = document.querySelector(".close-nav-btn");

menuBtn.addEventListener("click", () =>  {
    menu.style.display = "flex"
    closeBtn.style.display = "inline-block"
    menuBtn.style.display = "none"
})
closeBtn.addEventListener("click", () => {
    menu.style.display = "none"
    closeBtn.style.display = "none"
    menuBtn.style.display = "inline-block"
})