
    //nav menu
const menuBtn = document.querySelector(".menu-btn");
const navigation = document.querySelector(".navigation");

menuBtn.addEventListener("click", () => {
    menuBtn.classList.toggle("active");
    navigation.classList.toggle("active");
});
//slider-nav video
const bTns = document.querySelectorAll(".button")
const slides = document.querySelectorAll(".background")

var sliderNav = function(manual){
    bTns.forEach((bTn) => {
        bTn.classList.remove("active");
    });

    slides.forEach((slide) => {
        slide.classList.remove("active");
    });

    bTns[manual].classList.add("active")
    slides[manual].classList.add("active")
}

bTns.forEach((bTn, i) => {
    bTn.addEventListener("click",() => {
        sliderNav(i);
    });
});
