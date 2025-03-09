// Vanta.js Background Animation
VANTA.WAVES({
    el: "#bg-animation",
    color: 0xff5a00,
    // color: 0xff5733,
    shininess: 50,
    waveHeight: 20,
    waveSpeed: 0.5,
});

// Initialize AOS (Animations)
AOS.init();

// Typed.js for Animated Text
var typed = new Typed("#typed-text", {
    strings: ["Movies🎬", "Tickets🎞", "Fun😃","Popcorn🍿!"],
    typeSpeed: 100,
    backSpeed: 100,
    loop: true,
});

// Login Form Validation
let login=()=>{
    let inpemail=document.querySelector("#email").value;
    let inppass=document.querySelector("#password").value;
    let inpnumber=document.querySelector("#number").value;


    let erremail=document.querySelector("#erroremail")
    let errpass=document.querySelector("#errorpass")
    let errnumber=document.querySelector("#errornumber")

    let email=localStorage.getItem("E-mail")
    let number=localStorage.getItem("Number")
    let pass=localStorage.getItem("Password")

 

    if(inpemail!=email){
       erremail.innerHTML="*invalid e-mail";
       erremail.style.color="red"
       return false
    }
   
    else if(inppass!=pass){
        errpass.innerHTML="*invalid password";
        errpass.style.color="red"
        erremail.innerHTML=""
       
       return false

    }
    else if(inpnumber!=number){
        errnumber.innerHTML="*invalid number";
        errnumber.style.color="red"
        erremail.innerHTML=""
        errpass.innerHTML="";

       return false

    }

    location.href="home.html"
    return false
     
}
let pshow=()=>
{
    let password=document.querySelector("#password")
    let textt=document.querySelector("#show")
    if(password.type=="password")
    {
    password.type="text";
    textt.innerHTML="Hide";
    }
    else{
    password.type="password";
    textt.innerHTML="Show";
    } 
}