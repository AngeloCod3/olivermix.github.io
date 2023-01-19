let open = document.querySelector('.open');
let close = document.querySelector('.close');
let menu = document.querySelector('menu');
let a = false

function toggle () {
    
    !a ?  menu.style.transform = "translateX(-200px)" :  menu.style.transform = "translateX(50px)";
    a = !a
}

open.addEventListener('click', toggle)
close.addEventListener('click', toggle)