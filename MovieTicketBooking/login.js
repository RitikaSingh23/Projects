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
    strings: ["Movies🎬", "Tickets🎞", "Fun😃","Popcorn🍿!"],
    typeSpeed: 100,
    backSpeed: 100,
    loop: true,
});

// Login Form Validation
document.getElementById("loginForm").addEventListener("submit", function (event) {
    event.preventDefault();

    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;

    if (!email.includes("@") || password.length < 6) {
        alert("Invalid email or password must be at least 6 characters!");
        return;
    }

    alert("Login successful! Redirecting to home...");
    window.location.href = "home.html";
});
