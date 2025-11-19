document.addEventListener("DOMContentLoaded", function () {

    const imgs = document.querySelectorAll(".carousel-img");
    let index = 0;

    function show(i) {
        imgs.forEach((img, n) => {
            img.classList.toggle("active", n === i);
        });
    }

    function next() {
        index = (index + 1) % imgs.length;
        show(index);
    }

    // автопрокрутка
    setInterval(next, 3000);

    // смена по клику
    document.getElementById("carousel").addEventListener("click", next);

    show(index);
});

document.addEventListener("DOMContentLoaded", function () {

    const swiper = new Swiper(".reviews-swiper", {
        slidesPerView: 3,
        spaceBetween: 30,
        loop: true,
        centeredSlides: true,
        speed: 600,
        allowTouchMove: false
    });

    const clickArea = document.getElementById("reviewsClickArea");

    clickArea.addEventListener("click", (e) => {
        const rect = clickArea.getBoundingClientRect();
        const center = rect.left + rect.width / 2;

        if (e.clientX > center) {
            swiper.slideNext();
        } else {
            swiper.slidePrev();
        }
    });
});