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

//swipper .js Effect
var swiper = new Swiper(".mySwiper", {
  slidesPerView: 4,
  spaceBetween: 30,
  freeMode: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

