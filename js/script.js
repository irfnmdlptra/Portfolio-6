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

// mengambil semua elemen a dalam elemen dengan kelas navbar-utama
const links = document.querySelectorAll('.navbar-utama a');
const ubahWarna = document.getElementById('ubahWarna');

// menambahkan event listener click pada setiap elemen a
links.forEach(link => {
  link.addEventListener('click', () => {
    // menghapus class "click" dari semua elemen a
    links.forEach(otherLink => {
      otherLink.classList.remove('click');
    });
    // menambahkan class "click" ke elemen a yang diklik
    link.classList.add('click');
  });
});

ubahWarna.addEventListener('click', function(){
    const r = Math.round(Math.random() * 255 + 1);
    const g = Math.round(Math.random() * 255 + 1);
    const b = Math.round(Math.random() * 255 + 1);
    document.body.style.background = 'rgb('+ r +','+ g +','+ b +')'
});


  

// JavaScript
window.addEventListener("scroll", function() {
    var navbar = document.querySelector(".navbar");
    if (window.pageYOffset > 0) {
      navbar.classList.add("scroll");
    } else {
      navbar.classList.remove("scroll");
    }
  });
  
  // CSS