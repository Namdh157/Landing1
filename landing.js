const navbar = document.querySelector("#menu");
const sticky = navbar.scrollTop;
window.onscroll = function () {
    stickyMenu()
};

function stickyMenu() {
    if (window.pageYOffset > sticky ) {
        navbar.classList.add("sticky");
    } else {
        navbar.classList.remove("sticky");
    }
}
// js hiện dần các trang
let items = document.querySelectorAll('.allowActive');
var landing_page = document.querySelector('#landing-page');
window.addEventListener('scroll', () => {
    items.forEach(item => {
        if (item.getBoundingClientRect().top <= window.innerHeight / (4/5)) {
            item.classList.add('active');
        } else {
            item.classList.remove('active');
        }
    })
})
//js slide ảnh 
// menu mobile
var btmenu = document.querySelector('.button-menu');
var menumb = document.querySelector('.menu-mobile');
btmenu.onclick = () =>{
 menumb.classList.add('list-mb');
 btmenu.style.opacity = '0';
}
menumb.addEventListener('click', () =>{
     console.log('hi')
     menumb.classList.remove('list-mb');
     btmenu.style.opacity = '1';
})