let menu = document.querySelector('#menu-btn');
let Close = document.querySelector('#nav-btn');
let nav = document.querySelector('.nav-menu');

menu.onclick = () =>{
    menu.classList.toggle('fa-times');
}

menu.addEventListener('click', function(){
    nav.classList.toggle('active');

})

Close.onclick = () =>{
    Close.classList.toggle('fa-bars');
    nav.classList.remove('active');
}

window.onscroll = () =>{
    menu.classList.remove('fa-times');
    nav.classList.remove('active');
}

let themeToggler = document.querySelector('#theme-toggler');

themeToggler.onclick = () =>{
    themeToggler.classList.toggle('fa-sun');
    if(themeToggler.classList.contains('fa-sun')){
        document.body.classList.add('active');
    }else{
        document.body.classList.remove('active');
    }
}


  
  
  
  