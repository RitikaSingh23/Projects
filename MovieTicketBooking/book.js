// Booking Form Validation
document.getElementById("booking-form").addEventListener("submit", function(event) {
    event.preventDefault();

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let movie = document.getElementById("movie").value;
    let date = document.getElementById("date").value;
    let seats = document.getElementById("seats").value;

    if (name && email && movie && date && seats) {
        document.getElementById("success-message").classList.remove("hidden");
        this.reset();
        setTimeout(() => {
            document.getElementById("success-message").classList.add("hidden");
        }, 3000);
    }
});

// Generate Seat Selection Grid
const seatGrid = document.querySelector(".seat-grid");
const seats = 100; // Total seats
const occupiedSeats = [3, 7, 12, 18]; // Sample occupied seats

for (let i = 1; i <= seats; i++) {
    const seat = document.createElement("div");
    seat.classList.add("seat");
    if (occupiedSeats.includes(i)) {
        seat.classList.add("occupied");
    }
    seat.addEventListener("click", () => {
        if (!seat.classList.contains("occupied")) {
            seat.classList.toggle("selected");
        }
    });
    seatGrid.appendChild(seat);
}

// Booking Form Submission
// document.getElementById("booking-form").addEventListener("submit", function(event) {
//     event.preventDefault();

//     let name = document.getElementById("name").value;
//     let email = document.getElementById("email").value;
//     let movie = document.getElementById("movie").value;
//     let time = document.getElementById("time").value;
//     let selectedSeats = document.querySelectorAll(".seat.selected").length;

//     if (name && email && movie && time && selectedSeats > 0) {
//         document.getElementById("success-message").classList.remove("hidden");
//         this.reset();
//         setTimeout(() => {
//             document.getElementById("success-message").classList.add("hidden");
//         }, 3000);
//     } else {
//         alert("Please complete all fields and select at least one seat!");
//     }
// });

// PayPal Payment
document.querySelector(".paypal-btn").addEventListener("click", () => {
    alert("Redirecting to PayPal...");
});

// Stripe Payment
document.querySelector(".stripe-btn").addEventListener("click", () => {
    alert("Redirecting to Stripe...");
});
