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

var video = document.getElementById("video");

window.addEventListener("load", function(event) {
    // setTimeout(() => {
    //     video.autoplay = true;
    //     video.load();
    //     console.log(video);
    // }, 2000);
});


Email.send({
    Host: "smtp.gmail.com",
    Username: "mavlon4658@gmail.com",
    Password: "mavlonbek465899ab",
    To: 'mavlon4658.1@gmail.com',
    From: "mavlon4658@gmail.com",
    Subject: "Sending Email using javascript",
    Body: "Well that was easy!!",
})
    .then(function (message) {
        // alert("mail sent successfully")
    });