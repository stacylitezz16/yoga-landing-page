const slider = document.querySelector('.reviews__list');

const nextBtn = document.querySelector('.reviews__icon--right');
const prevBtn = document.querySelector('.reviews__icon--left');

const slides = document.querySelectorAll('.reviews__list-item');

let currentSlide = 0;

nextBtn.addEventListener('click', () => {

    currentSlide++;

    if (currentSlide >= slides.length) {
        currentSlide = 0;
    }

    slider.style.transform =
        `translateX(-${currentSlide * 100}%)`;
});

prevBtn.addEventListener('click', () => {

    currentSlide--;

    if (currentSlide < 0) {
        currentSlide = slides.length - 1;
    }

    slider.style.transform =
        `translateX(-${currentSlide * 100}%)`;
});