const navbar = document.querySelector('#menu');
const menu = document.querySelector('.basic-infor')
const fixed = menu.scrollTop;
const sticky = navbar.scrollTop;
const car = document.querySelector('.img');
const abc = car.scrollTop;
console.log(window.pageYOffset);

window.onscroll = function () {
    stickyMenu()
};

function stickyMenu() {
    if (window.pageYOffset > sticky) {
        navbar.classList.add('sticky');
        menu.classList.add('fixed');
    } else {
        navbar.classList.remove('sticky');
        menu.classList.remove('fixed');
    }
}
// js hiện dần các trang
let items = document.querySelectorAll('.allowActive');
var landing_page = document.querySelector('#landing-page');
window.addEventListener('scroll', () => {
    items.forEach(item => {
        if (item.getBoundingClientRect().top <= window.innerHeight / (4 / 5)) {          //lắng nghe sự kiện scroll đặt dk khoảng cách phần tử với
            item.classList.add('active');                                               //màn hình để thêm class
        }
    })
})
//js slide ảnh 
var next = document.querySelector('.next');
var prev = document.querySelector('.prev');
var next1 = document.querySelector('.next1');
var prev1 = document.querySelector('.prev1');
let count = document.querySelectorAll('#list .item').length;
let show = 0;
let active = 0;
function nextSlide() {
    let hide = show - 1 < 0 ? count - 1 : show - 1;
    let lastHide = hide - 1 < 0 ? count - 1 : hide - 1;
    document.getElementById('item_' + lastHide).classList.remove('hide');
    document.getElementById('item_' + hide).classList.remove('show');                   //hàm thêm xóa claas chạy hiệu ứng slide
    document.getElementById('item_' + hide).classList.add('hide');
    document.getElementById('item_' + show).classList.add('show');
    // slide 2
    document.getElementById('image_' + lastHide).classList.remove('hide');
    document.getElementById('image_' + hide).classList.remove('show');
    document.getElementById('image_' + hide).classList.add('hide');
    document.getElementById('image_' + show).classList.add('show');
    show = show + 1 >= count ? 0 : show + 1;
}
let intervalId = null; 
function startSlideShow() {
    intervalId = setInterval(nextSlide, 2000); // gọi hàm nextSlide() sau mỗi 3 giây
}
setTimeout(()=>{
    startSlideShow();               //cho chạy hàm start sau 2 giây 
},2000)
function startSlideShow() {
    intervalId = setInterval(nextSlide, 3000); // gọi hàm nextSlide() sau mỗi 3 giây
}
function stopSlideShow() {
    clearInterval(intervalId); // dừng việc thực hiện hàm nextSlide()
}
prev.onclick = function(){
    console.log('hi')           //dùng chung hiệu ứng của next 
    nextSlide();
    stopSlideShow();
}
next.onclick = function () {
    nextSlide()                             //lắng nghe sự kiện click để chạy hàm nextSlide và hàm dừng hàm interval
    stopSlideShow();
};
prev1.onclick = function () {
    nextSlide()                               //lắng nghe sự kiện click để chạy hàm nextSlide và hàm dừng hàm interval
    stopSlideShow();
};
next1.onclick = function () {
    nextSlide()                               //lắng nghe sự kiện click để chạy hàm nextSlide và hàm dừng hàm interval
    stopSlideShow();
};
//js menu đứng
var btMenu = document.querySelector('.button-menu');
var menuMb = document.querySelector('.menu-mobile');
var menuTab = document.querySelector('.tab-menu');
btMenu.onclick = () => {
    menuMb.classList.add('list-mb');        //lắng nghe sự kiện click để thêm class và style
    btMenu.style.opacity = '0';
}
menuTab.onclick = () => {
    menuMb.classList.add('list-mb');         //lắng nghe sự kiện click để thêm class và style
    navbar.style.opacity = '0'
    menuTab.style.opacity = '0'

}
menuMb.addEventListener('click', () => {
    menuMb.classList.remove('list-mb');
    btMenu.style.opacity = '1';
    menuTab.style.opacity = '1';             //lắng nghe sự kiện click để xóa class và style
    navbar.style.opacity = '1';
})