/* =========================
   REVIEWS SLIDER
========================= */

const slider = document.querySelector('.reviews__list');

const nextBtn = document.querySelector('.reviews__icon--right');
const prevBtn = document.querySelector('.reviews__icon--left');

const slides = document.querySelectorAll('.reviews__list-item');

let currentSlide = 0;

/* NEXT SLIDE */

nextBtn.addEventListener('click', () => {

    currentSlide++;

    if (currentSlide >= slides.length) {
        currentSlide = 0;
    }

    slider.style.transform =
        `translateX(-${currentSlide * 100}%)`;
});

/* PREVIOUS SLIDE */

prevBtn.addEventListener('click', () => {

    currentSlide--;

    if (currentSlide < 0) {
        currentSlide = slides.length - 1;
    }

    slider.style.transform =
        `translateX(-${currentSlide * 100}%)`;
});

/* =========================
   FAQ ACCORDION
========================= */


const items = document.querySelectorAll('.faq-item');

items.forEach(item => {
    item.addEventListener('toggle', () => {
        if (item.open) {
            items.forEach(other => {
                if (other !== item) {
                    other.removeAttribute('open');
                }
            });
        }
    });
});

/* =========================
   DOCUMENTS MODAL
========================= */

const modal = document.getElementById("documentsModal");
const openBtn = document.getElementById("openDocuments");
const overlay = document.querySelector(".modal__overlay");

openBtn.addEventListener("click", () => {
    modal.classList.add("active");
    document.body.style.overflow = "hidden";
});

overlay.addEventListener("click", () => {
    modal.classList.remove("active");
    document.body.style.overflow = "";
});

/* =========================
   CERTIFICATE VIEWER
========================= */

const documents = document.querySelectorAll('.modal__document--clickable');

const viewer = document.getElementById('certificateViewer');

const viewerImage = document.getElementById('viewerImage');

const viewerOverlay = document.querySelector('.certificate-viewer__overlay');


/* OPEN CERTIFICATE */

documents.forEach(documentItem => {

    documentItem.addEventListener('click', () => {

        viewer.classList.add('active');

        viewerImage.src = documentItem.src;

    });

});


/* CLOSE CERTIFICATE */

viewerOverlay.addEventListener('click', () => {

    viewer.classList.remove('active');

});

// ===============================
// SMOOTH SCROLL (EASING)
// ===============================

function smoothScrollToElement(target, duration = 1000) {
    const start = window.scrollY;
    const end = target.getBoundingClientRect().top + window.scrollY;
    const distance = end - start;

    let startTime = null;

    function animation(currentTime) {
        if (!startTime) startTime = currentTime;

        const timeElapsed = currentTime - startTime;
        const progress = Math.min(timeElapsed / duration, 1);

        // smooth easing (ease-out cubic)
        const ease = 1 - Math.pow(1 - progress, 3);

        window.scrollTo(0, start + distance * ease);

        if (timeElapsed < duration) {
            requestAnimationFrame(animation);
        }
    }

    requestAnimationFrame(animation);
}


// ===============================
// NAVIGATION SCROLL
// ===============================

const educationBtn = document.querySelector('.navbar__list li:nth-child(2) button');
const pricingBtn = document.querySelector('.navbar__list li:nth-child(3) button');

const educationSection = document.getElementById('education');
const pricingSection = document.getElementById('pricing');

educationBtn.addEventListener('click', () => {
    smoothScrollToElement(educationSection, 1100);
});

pricingBtn.addEventListener('click', () => {
    smoothScrollToElement(pricingSection, 1100);
});

// =========================
// VK CHAT
// =========================

// =========================
// VK CHAT
// =========================

function openVKChat() {
    window.open("https://vk.me/id282846234", "_blank");
}

const vkButtons = document.querySelectorAll('[data-vk="true"]');

vkButtons.forEach(btn => {
    btn.addEventListener('click', openVKChat);
});

// ===============================
// INTRO VIDEO MODAL
// ===============================

const introModal = document.getElementById("introModal");
const introOpenBtn = document.getElementById("openIntro");
const introOverlay = introModal.querySelector(".modal__overlay");
const videoFrame = introModal.querySelector(".modal__video");

const VIDEO_URL = "https://www.youtube.com/embed/XXXXXXXX?autoplay=1";

function openIntroModal() {
    introModal.classList.add("active");
    document.body.style.overflow = "hidden";

    videoFrame.src = VIDEO_URL;
}

function closeIntroModal() {
    introModal.classList.remove("active");
    document.body.style.overflow = "";

    videoFrame.src = "";
}

introOpenBtn.addEventListener("click", openIntroModal);
introOverlay.addEventListener("click", closeIntroModal);