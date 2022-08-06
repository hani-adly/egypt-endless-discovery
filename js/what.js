

let slid = document.querySelectorAll('.slids');
let inde = 0;


// next function 
function next(){
    slid[inde].classList.remove('active');
    inde = (inde + 1) % slid.length;
    slid[inde].classList.add('active');
}

//pre function
function prev(){
    slid[inde].classList.remove('active');
    inde = (inde - 1 + slid.length) % slid.length;
    slid[inde].classList.add('active');

}