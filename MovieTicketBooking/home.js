// Vanta.js Background Animation
VANTA.WAVES({
  el: "#bg-animation",
  color: 0xff5a00,
  shininess: 50,
  waveHeight: 20,
  waveSpeed: 0.5,
});

// Initialize AOS (Animations)
AOS.init();

// Initialize Swiper.js
var swiper = new Swiper(".swiper-container", {
  loop: true,
  pagination: {
      el: ".swiper-pagination",
      clickable: true,
  },
});

// Typed.js for Animated Text
var typed = new Typed("#typed-text", {
  strings: ["Tickets", "Seats", "Popcorn", "Movies!"],
  typeSpeed: 100,
  backSpeed: 50,
  loop: true,
});

// Booking Form Validation
document.getElementById("bookingForm").addEventListener("submit", function (event) {
  event.preventDefault();

  var movie = document.getElementById("movieSelect").value;
  var date = document.getElementById("dateSelect").value;

  if (movie === "Select a Movie" || !date) {
      alert("Please select a movie and date!");
  } else {
      alert("Your tickets for " + movie + " on " + date + " are booked!");
  }
});
