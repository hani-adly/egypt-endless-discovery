let slide = document.querySelectorAll('.slides');
let index = 0;

//next function
function nextt(){
    slide[index].classList.remove('active');
    index = (index + 1) % slide.length;
    slide[index].classList.add('active');
}

//prev function
function prevous(){
    slide[index].classList.remove('active');
    index = (index - 1 + slide.length) % slide.length;
    slide[index].classList.add('active');
}

// //autoplay
// setInterval(next, 7000);