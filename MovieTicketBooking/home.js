// VANTA.js Configuration
VANTA.BIRDS({
  el: "#vanta-bg",
  mouseControls: true, 
  touchControls: true, 
  minHeight: 200.00, 
  minWidth: 200.00, 
  speed: 1.00, 
  density: 150.00 
});

// Typed.js Configuration
const options = {
  strings: ["Book Your Tickets Now!", "Find the Latest Movies!", "Enjoy with Friends!"],
  typeSpeed: 50,
  backSpeed: 25,
  loop: true
};

new Typed("#typed", options);

// Swiper.js Initialization
const swiper = new Swiper('.swiper-container', {
  loop: true,
  pagination: {
      el: '.swiper-pagination',
      clickable: true,
  },
  navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
  },
});

// Swiper.js Initialization1
const swiper1 = new Swiper('.swiper-container1', {
  loop: true,
  pagination: {
      el: '.swiper-pagination1',
      clickable: true,
  },
  navigation: {
      nextEl: '.swiper-button-next1',
      prevEl: '.swiper-button-prev1',
  },
});