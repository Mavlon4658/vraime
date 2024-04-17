let reviewSwiper = new Swiper('.review .swiper', {
    slidesPerView: 'auto',
    spaceBetween: 30,
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