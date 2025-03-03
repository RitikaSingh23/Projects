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
let submit=()=>{
    let inpname=document.querySelector("#name").value;
    let inpnum=document.querySelector("#number").value;
    let inpemail=document.querySelector("#email").value;
    let inppass=document.querySelector("#password").value;
    let inpcpass=document.querySelector("#cpassword").value;

    let errname=document.querySelector("#errname")
    let errnum=document.querySelector("#errnumber")
    let erremail=document.querySelector("#erremail")
    let errpass=document.querySelector("#errpass")
    let errcpass=document.querySelector("#errcpass")

    if(inpname=="")
    {
        errname.innerHTML="*Please fill the name field"
        errname.style.color="red"
        document.querySelector("#name").style.border = "2px solid red"
        document.querySelector("#name")
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

    else if(inppass!=inpcpass)
    {
        errcpass.innerHTML="*Please enter same password"
        errcpass.style.color="red"
        document.querySelector("#cpassword").style.border = "2px solid red"
        document.querySelector("#cpassword").value=""
        document.querySelector("#cpassword").focus()
        errname.innerHTML=""
        errnum.innerHTML=""
        errnum.innerHTML=""
        return false;
    }

    else if(!(inppass.match(/[1234567890]/) 
        && inppass.match(/[!@#%&]/)
        &&inppass.match(/[ a-z]/)
        && inppass.match(/[A-Z]/)))
    {
        errpass.innerHTML="*please enter strong password"
        errpass.style.color="red"
        errname.innerHTML=""
        return false
    }

        localStorage.setItem("Name",inpname)
        localStorage.setItem("Number",inpnum)
        localStorage.setItem("E-mail",inpemail)
        localStorage.setItem("Password",inppass)
        localStorage.setItem("Cpassword",inpcpass)


        alert("Sign-up successful! Redirecting to login...")
        location.href="Login.html";


        return false
}