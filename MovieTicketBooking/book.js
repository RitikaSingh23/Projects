// Typed.js Effect
var typed = new Typed("#typed", {
    strings: ["Movies🎬", "Tickets🎞", "Fun😃", "Popcorn🍿!"],
    typeSpeed: 50,
    backSpeed: 30,
    loop: true
  });
// Booking Form Validation
let sub=()=>{
    let inpname=document.querySelector("#name").value;
    let inpnum=document.querySelector("#number").value;
    let inpemail=document.querySelector("#email").value;
    let inpdate=document.querySelector("#date").value;
    let inpseat=document.querySelector("#seats").value;
    let inpmovie=document.querySelector("#movie").value;
    let inptime=document.querySelector("#time").value;

    let errname=document.querySelector("#errname")
    let errnum=document.querySelector("#errnumber")
    let erremail=document.querySelector("#erremail")
    let errdate=document.querySelector("#errdate")
    let errseat=document.querySelector("#errseat")
    let errmovie=document.querySelector("#errmovie")
    let errtime=document.querySelector("#errtime")



    if(inpname=="")
    {
        errname.innerHTML="*Please fill the name field"
        errname.style.color="red"
        document.querySelector("#name").style.border = "2px solid red"
        document.querySelector("#name").focus()
        return false;
    }

    else if(isNaN(inpnum))
    {
        errnum.innerHTML="*Please enter number only"
        errnum.style.color="red"
        document.querySelector("#name").style.border = ""
        errname.innerHTML=""
        document.querySelector("#number").style.border = "2px solid red"
        document.querySelector("#number").focus()
        return false
    }

    else if(inpnum.length!=10)
    {
        errnum.innerHTML="*please enter 10 digits only"
        errnum.style.color="red"
        document.querySelector("#number").style.border = "2px solid red"
        document.querySelector("#number").focus()
        errname.innerHTML=""
        return false;
    }

    else if(!(inpemail.includes('@') && inpemail.includes('.com')))
    {
        erremail.innerHTML="*Please enter valid email"
        erremail.style.color="red"
        document.querySelector("#email").style.border = "2px solid red"
        document.querySelector("#email").focus()
        errname.innerHTML=""
        errnum.innerHTML=""
        errnum.innerHTML=""
        return false;
    }

    else if(inpmovie=="")
    {
        errmovie.innerHTML="*Please fill the field"
        errname.style.color="red"
        document.querySelector("#movie").style.border = "2px solid red"
        document.querySelector("#movie")
        errname.innerHTML=""
        errnum.innerHTML=""
        erremail.innerHTML=""
        return false;
    }


        localStorage.setItem("Name",inpname)
        localStorage.setItem("Number",inpnum)
        localStorage.setItem("E-mail",inpemail)
        localStorage.setItem("Password",inppass)
        localStorage.setItem("Cpassword",inpcpass)

        location.href="pay.html";

    return false
}



















// Generate Seat Selection Grid
// const seatGrid = document.querySelector(".seat-grid");
// const seats = 100; // Total seats
// const occupiedSeats = [3, 7, 12, 18]; // Sample occupied seats

// for (let i = 1; i <= seats; i++) {
//     const seat = document.createElement("div");
//     seat.classList.add("seat");
//     if (occupiedSeats.includes(i)) {
//         seat.classList.add("occupied");
//     }
//     seat.addEventListener("click", () => {
//         if (!seat.classList.contains("occupied")) {
//             seat.classList.toggle("selected");
//         }
//     });
//     seatGrid.appendChild(seat);
// }

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
// document.querySelector(".paypal-btn").addEventListener("click", () => {
//     alert("Redirecting to PayPal...");
// });

// // Stripe Payment
// document.querySelector(".stripe-btn").addEventListener("click", () => {
//     alert("Redirecting to Stripe...");
// });
