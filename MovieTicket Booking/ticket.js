const movieSelect = document.getElementById("movie");
const seats = document.querySelectorAll(".row .seat:not(.occupied)");
const count = document.getElementById("count");
const total = document.getElementById("total");
const checkoutBtn = document.getElementById("checkout");

let ticketPrice = +movieSelect.value;

movieSelect.addEventListener("change", () => {
    ticketPrice = +movieSelect.value;
    updateTotal();
});

seats.forEach(seat => {
    seat.addEventListener("click", () => {
        if (!seat.classList.contains("occupied")) {
            seat.classList.toggle("selected");
            updateTotal();
        }
    });
});

function updateTotal() {
    const selectedSeats = document.querySelectorAll(".row .seat.selected");
    const selectedCount = selectedSeats.length;
    count.innerText = selectedCount;
    total.innerText = selectedCount * ticketPrice;
}

checkoutBtn.addEventListener("click", () => {
    if (parseInt(count.innerText) > 0) {
        alert(`Proceeding to checkout! Total: $${total.innerText}`);
    } else {
        alert("Please select at least one seat.");
    }
});
