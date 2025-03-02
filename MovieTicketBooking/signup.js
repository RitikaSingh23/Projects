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
    strings: ["Movies🎬", "Tickets🎞", "Fun😃", "Popcorn🍿!"],
    typeSpeed: 100,
    backSpeed: 50,
    loop: true,
});

// Sign-Up Form Validation
document.getElementById("signupForm").addEventListener("submit", function (event) {
    event.preventDefault();

    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var confirmPassword = document.getElementById("confirmPassword").value;

    if (password !== confirmPassword) {
        alert("Passwords do not match!");
        return;
    }

    alert("Sign-up successful! Redirecting to login...");
    window.location.href = "index.html";
});
