AOS.init();

let reviewSwiper = new Swiper('.review .swiper', {
    slidesPerView: 'auto',
    spaceBetween: 10,
    breakpoints: {
        992: {
            spaceBetween: 30,
        }
    }
})

let reviewCard = document.querySelectorAll('.review__card')

reviewCard.forEach(card => {
    let p = card.querySelector('p')
    let btn = card.querySelector('button');
    btn.onclick = () => {
        p.classList.add('active');
        btn.classList.add('hidden');
    }
})

let bars = document.querySelector('.bars');
let menuClose = document.querySelector('.mobile_menu__close')
let mobileMenu = document.querySelector('.mobile_menu');

bars.onclick = () => {
    mobileMenu.classList.remove('end-active');
    mobileMenu.classList.add('active');
}

menuClose.onclick = () => {
    mobileMenu.classList.remove('active');
    mobileMenu.classList.add('end-active');
}

let toTop = document.querySelector('.to_top');
toTop.onclick = e => {
    e.preventDefault();
    window.scrollTo(0, 0);
}