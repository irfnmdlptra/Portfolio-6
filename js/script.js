let menu = document.querySelector('#menu-btn');
let Close = document.querySelector('#nav-btn');
let nav = document.querySelector('.nav-menu');
// let navAtas = document.querySelectorAll('.nav-header');
// let atas = document.querySelector('.atas');

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


  
window.addEventListener('scroll', function() {
    if (window.scrollY > 0) {
      atas.style.backgroundColor = '#e6e6e6';
        for (let i=0; i <= navAtas.length; i++ ){
          
            navAtas[i].style.backgroundColor = 'transparent';
            navAtas[i].style.Color = '#fff';
        }
    } else {
      atas.style.backgroundColor = 'transparent';
      atas.style.backdropFilter = 'none';
    }
  });
  
  
  


  const box1 = document.querySelector('.box1');
const box2 = document.querySelector('.box2');
const box3 = document.querySelector('.box3');

window.addEventListener('scroll', () => {
  const scrollY = window.scrollY;

  if (scrollY >= 100) {
    box1.style.boxShadow = '0.4rem 0.4rem 1rem #111, -0.4rem -0.4rem 1rem #333';
  } else {
    box1.style.boxShadow = 'none';
  }

  if (scrollY >= 200) {
    box2.style.boxShadow = '0.4rem 0.4rem 1rem #111, -0.4rem -0.4rem 1rem #333';
  } else {
    box2.style.boxShadow = 'none';
  }

  if (scrollY >= 300) {
    box3.style.boxShadow = '0.4rem 0.4rem 1rem #111, -0.4rem -0.4rem 1rem #333';
  } else {
    box3.style.boxShadow = 'none';
  }
});
