// Vanta.js Background Effect
VANTA.NET({
  el: "#vanta-bg",
  color: 0xff5733,
  backgroundColor: 0x000000,
  points: 12.0,
  maxDistance: 20.0
});

// Typed.js Effect
var typed = new Typed("#typed", {
  strings: ["Movie Ticket Booking", "Your Favorite Movies", "Best Cinema Experience"],
  typeSpeed: 50,
  backSpeed: 30,
  loop: true
});

const progressCircle = document.querySelector(".autoplay-progress svg");
const progressContent = document.querySelector(".autoplay-progress span");
var swiper = new Swiper(".mySwiper", {
  spaceBetween: 30,
  centeredSlides: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev"
  },
  on: {
    autoplayTimeLeft(s, time, progress) {
      progressCircle.style.setProperty("--progress", 1 - progress);
      progressContent.textContent = `${Math.ceil(time / 1000)}s`;
    }
  }
});