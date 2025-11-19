document.addEventListener("DOMContentLoaded", () => {

    /* ————— APPLICATION GALLERY ————— */
    new Swiper(".app-swiper", {
        loop: true,
        pagination: { el: ".swiper-pagination", clickable: true },
        autoplay: { delay: 2500 },
        speed: 600,
    });

    /* ————— REVIEWS SWIPER ————— */
    new Swiper(".reviews-swiper", {
        slidesPerView: 3,
        spaceBetween: 30,
        loop: true,
        centeredSlides: true,
        speed: 600,
    });

    /* ————— MODAL ————— */
    const modal = document.getElementById("reviewModal");
    const modalPhoto = modal.querySelector(".modal-photo");
    const modalName = modal.querySelector(".modal-name");
    const modalPosition = modal.querySelector(".modal-position");
    const modalText = modal.querySelector(".modal-full-text");
    const closeBtn = modal.querySelector(".modal-close");

    function openModal(card) {
        modalPhoto.src = card.dataset.photo;
        modalName.textContent = card.dataset.name;
        modalPosition.textContent = card.dataset.position;
        modalText.textContent = card.querySelector(".review-text").textContent;

        modal.classList.add("active");
        document.body.style.overflow = "hidden";
    }

    document.querySelectorAll(".review-card").forEach(card => {
        card.addEventListener("click", () => openModal(card));
    });

    function closeModal() {
        modal.classList.remove("active");
        document.body.style.overflow = "";
    }

    modal.addEventListener("click", e => {
        if (e.target === modal) closeModal();
    });

    closeBtn.addEventListener("click", closeModal);

    document.addEventListener("keydown", e => {
        if (e.key === "Escape") closeModal();
    });
});
/* Треугольники анимация */
const triangles = document.querySelector(".hero-triangles");

document.addEventListener("mousemove", (e) => {
    const x = (window.innerWidth / 2 - e.clientX) / 40;
    const y = (window.innerHeight / 2 - e.clientY) / 40;

    triangles.style.transform = `translate(${x}px, ${y}px)`;
});

document.querySelectorAll('.review-card').forEach(card => {
    const photo = card.dataset.photo;
    const name = card.dataset.name;
    const position = card.dataset.position;

    const header = document.createElement('div');
    header.className = 'review-header';

    header.innerHTML = `
        <img src="${photo}" class="review-photo" alt="">
        <div>
            <div class="review-name">${name}</div>
            <div class="review-position">${position}</div>
        </div>
    `;

    card.prepend(header);
});
