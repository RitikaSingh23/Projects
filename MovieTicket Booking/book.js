//for Jsonn

let bring =async()=>{
    let url = 'http://localhost:3000/Detail'
    let response =await fetch(url,{method:"GET"})
    let data=await response.json()
    // console.log(data)
    paginationn(data)
}

let searchh=async()=>{

    let searchinp=document.querySelector("#searchinp").value.toLowerCase()
  
    let url = 'http://localhost:3000/Detail'
    let response =await fetch(url,{method:"GET"})
    let data=await response.json()
  
    let Filterdata=data.filter((e)=>{
  
  
      return e.Name.toLowerCase().includes(searchinp) || e.Number.toString().includes(searchinp)
  
    })
  
    paginationn(Filterdata)
  
  }

let paginationn=(data)=>{


$('#pag').pagination({
    dataSource: data,
    pageSize: 5,
    showPrevious: false,
    showNext: false,
    callback: function(data, pagination) {
       DataShow(data)
    }
})
}


  
  let DataShow=(data)=>{
      let tb=document.querySelector("#show")
      tb.innerHTML=""
  
      data.map((e)=>{
          tb.innerHTML+=`
          <tr>
          <td>${e.Name}</td>
          <td>${e.Number}</td>
          <td>${e.Email}</td>
          <td>${e.Date}</td>
          <td>${e.Seat}</td>
          <td>${e.Location}</td>
          <td>${e.Cinema}</td>
          <td>${e.Movie}</td>
          <td>${e.Time}</td>
          <td onclick="del('${e.id}')">Delete</td>
          <td onclick="upd('${e.id}')">Update</td>
          </tr>`
      })
  }
  
  let del=(id)=>{
      let url=`http://localhost:3000/Detail/${id}`
      fetch(url,{method:"DELETE"})
  }

  
  let upd=async(id)=>{
      let url=`http://localhost:3000/Detail/${id}`
      let res=await fetch(url,{method:"GET"})
      let data=await res.json()
  
      let formmm=`<form id="formm">
            <h1 id="head"> Upate your form</h1><br>
          <p id="errname"></p>
            <div class="input-group" data-aos="fade-right" data-aos-offset="300"data-aos-duration="3000" data-aos-easing="ease-in-sine">
                <i class="fa fa-user"></i> Name:
                <input type="text" id="updname"value="${data.Name}" placeholder="Full Name" required />
            </div>

            <p id="errnumber"></p>
            <div class="input-group" data-aos="fade-left"data-aos-offset="300"data-aos-duration="3000" data-aos-easing="ease-in-sine">
                <i class="fa fa-phone"></i> Mobile Number:
                <input type="text" id="updnumber"value="${data.Number}" placeholder="Mobile Number" required />
            </div>

            <p id="erremail"></p>
            <div class="input-group" data-aos="fade-right"data-aos-offset="300"data-aos-duration="3000" data-aos-easing="ease-in-sine">
                <i class="fa fa-envelope"></i> Email:
                <input type="email" id="updemail" value="${data.Email}"placeholder="Email Address" required />
            </div>
            

            <p id="errdate" ></p>
            <div class="input-group" data-aos="fade-up" data-aos-duration="3000">
                <label for="date"><i class="fa-solid fa-calendar"></i> Date</label>
                <input type="date" id="upddate" value="${data.Date}"required>
            </div>

            <p id="errseat" ></p>
            <div class="input-group" data-aos="fade-up" data-aos-duration="3000">
                <label for="seats"><i class="fa-solid fa-chair"></i> Number of Seats</label>
                <input type="number" id="updseats"value="${data.Seat}" min="1" max="10" value="1" required>
            </div><br>

            <p id="errloc"></p>
            <div class="input-group" data-aos="fade-left"data-aos-offset="300"data-aos-duration="3000" data-aos-easing="ease-in-sine">
                <label for="movie"><i class="fa-solid fa-location-dot"></i> Select Location:</label>
                <select id="updlocation"value="${data.Location}" required>
                    <option value="" disabled selected>Choose a City</option>
                    <option value="Bhopal">Bhopal</option>
                    <option value="Indore">Indore</option>
                    <option value="Jhansi">Jhansi</option>
                    <option value="Mumbai">Mumbai</option>
                    <option value="Goa">Goa</option>
                </select>
            </div><br>

            <p id="errcinema"></p>
            <div class="input-group" data-aos="fade-left"data-aos-offset="300"data-aos-duration="3000" data-aos-easing="ease-in-sine">
                <label for="movie"><i class="fa-solid fa-house"></i> Select Cinema:</label>
                <select id="updcinema" value="${data.Cinema}"required>
                    <option value="" disabled selected>Choose a Cinema Hall</option>
                    <option value="PVR">PVR</option>
                    <option value="Cinepolis">Cinepolis</option>
                    <option value="DDX">DDX</option>
                    <option value="Inox">Inox</option>
                    <option value="Drive In">Drive In</option>
                </select>
            </div><br>

            <p id="errmovie"></p>
            <div class="input-group" data-aos="fade-left"data-aos-offset="300"data-aos-duration="3000" data-aos-easing="ease-in-sine">
                <label for="movie"><i class="fa-solid fa-film"></i> Select Movie:</label>
                <select id="updmovie"value="${data.Movie}" required>
                    <option value="" disabled selected>Choose a movie</option>
                    <option value="Sanam Teri kasam">Sanam Teri kasam</option>
                    <option value="Chhaava">Chhaava</option>
                    <option value="GOAT">GOAT</option>
                    <option value="Thandel">Thandel</option>
                    <option value="Stree">Stree</option>
                    <option value="Conjuring">Conjuring</option>
                </select>
            </div><br>

            <p id="errtime" ></p>
            <div class="input-group" data-aos="fade-up" data-aos-duration="3000">
                <label for="time"><i class="fa-solid fa-clock"></i> Select Show Time</label>
                <select id="updtime" value="${data.Time}"required>
                    <option value="" disabled selected>Choose a time</option>
                    <option value="10:00 AM">10:00 AM</option>
                    <option value="1:00 PM">1:00 PM</option>
                    <option value="4:00 PM">4:00 PM</option>
                    <option value="7:00 PM">7:00 PM</option>
                    <option value="10:00 PM">10:00 PM</option>
                </select>
            </div><br>
  
          <input type="submit" value="submit" onclick="return finalupd('${data.id}')"> 
      </form>`
  
      document.querySelector("#frm").innerHTML=formmm
  }
  let finalupd=(id)=>{
    let inpname=document.querySelector("#updname").value;
    let inpnum=document.querySelector("#updnumber").value;
    let inpemail=document.querySelector("#updemail").value;
    let inpdate=document.querySelector("#upddate").value;
    let inpseat=document.querySelector("#updseats").value;
    let inploc=document.querySelector("#updlocation").value;
    let inpcinema=document.querySelector("#updcinema").value;
    let inpmovie=document.querySelector("#updmovie").value;
    let inptime=document.querySelector("#updtime").value;
     let url=`http://localhost:3000/Detail/${id}`
  
      fetch(url,{
          method:"PUT",
          headers:{
              "Content-type":"application/json"
          },
          body:JSON.stringify(
              {
              "Name":inpname,
              "Number" :inpnum,
              "Email":inpemail,
              "Date":inpdate,
              "Seat":inpseat,
              "Location":inploc,
              "Cinema":inpcinema,
              "Movie":inpmovie,
              "Time":inptime,
              }
          )
      })
      return false;
  
  }
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
    let inploc=document.querySelector("#location").value;
    let inpcinema=document.querySelector("#cinema").value;
    let inpmovie=document.querySelector("#movie").value;
    let inptime=document.querySelector("#time").value;

    let errname=document.querySelector("#errname")
    let errnum=document.querySelector("#errnumber")
    let erremail=document.querySelector("#erremail")
    let errdate=document.querySelector("#errdate")
    let errseat=document.querySelector("#errseat")
    let errloc=document.querySelector("#errloc")
    let errcinema=document.querySelector("#errcinema")
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
        document.querySelector("#number").style.border = "2px solid red"
        document.querySelector("#number").focus()
        document.querySelector("#name").style.border = ""
        errname.innerHTML=""
        return false
    }

    else if(inpnum.length!=10)
    {
        errnum.innerHTML="*please enter 10 digits only"
        errnum.style.color="red"
        document.querySelector("#number").style.border = "2px solid red"
        document.querySelector("#number").focus()
        document.querySelector("#name").style.border = ""
        errname.innerHTML=""
        return false;
    }

    else if(!(inpemail.includes('@') && inpemail.includes('.com')))
    {
        erremail.innerHTML="*Please enter valid email"
        erremail.style.color="red"
        document.querySelector("#email").style.border = "2px solid red"
        document.querySelector("#email").focus()
        document.querySelector("#name").style.border = ""
        document.querySelector("#number").style.border = ""
        errname.innerHTML=""
        errnum.innerHTML=""
        return false;
    }

    else if(inpdate=="")
    {
        errdate.innerHTML="*Please choose the date"
        errdate.style.color="red"
        document.querySelector("#date").style.border = "2px solid red"
        document.querySelector("#date").focus()
        document.querySelector("#name").style.border = ""
        document.querySelector("#number").style.border = ""
        document.querySelector("#email").style.border = ""
        errname.innerHTML=""
        errnum.innerHTML=""
        erremail.innerHTML=""
        return false;
    }

    else if(inpseat=="")
    {
        errseat.innerHTML="*Please choose the seat"
        errseat.style.color="red"
        document.querySelector("#seats").style.border = "2px solid red"
        document.querySelector("#seats").focus()
        document.querySelector("#name").style.border = ""
        document.querySelector("#number").style.border = ""
        document.querySelector("#email").style.border = ""
        document.querySelector("#date").style.border = ""
        errname.innerHTML=""
        errnum.innerHTML=""
        erremail.innerHTML=""
        errdate.innerHTML=""
        return false;
    }

    else if(inploc=="")
    {
        errloc.innerHTML="*Please choose the location"
        errloc.style.color="red"
        document.querySelector("#location").style.border = "2px solid red"
        document.querySelector("#location").focus()
        document.querySelector("#name").style.border = ""
        document.querySelector("#number").style.border = ""
        document.querySelector("#email").style.border = ""
        document.querySelector("#date").style.border = ""
        document.querySelector("#seats").style.border = ""
        errname.innerHTML=""
        errnum.innerHTML=""
        erremail.innerHTML=""
        errdate.innerHTML=""
        errseat.innerHTML=""
        return false;
    }


    else if(inpcinema=="")
    {
        errcinema.innerHTML="*Please choose the cinema"
        errcinema.style.color="red"
        document.querySelector("#cinema").style.border = "2px solid red"
        document.querySelector("#cinema").focus()
        document.querySelector("#name").style.border = ""
        document.querySelector("#number").style.border = ""
        document.querySelector("#email").style.border = ""
        document.querySelector("#date").style.border = ""
        document.querySelector("#seats").style.border = ""
        document.querySelector("#location").style.border = ""
        errname.innerHTML=""
        errnum.innerHTML=""
        erremail.innerHTML=""
        errdate.innerHTML=""
        errseat.innerHTML=""
        errloc.innerHTML=""
        return false;
    }

    else if(inpmovie=="")
    {
        errmovie.innerHTML="*Please choose the movies"
        errmovie.style.color="red"
        document.querySelector("#movie").style.border = "2px solid red"
        document.querySelector("#movie").focus()
        document.querySelector("#name").style.border = ""
        document.querySelector("#number").style.border = ""
        document.querySelector("#email").style.border = ""
        document.querySelector("#date").style.border = ""
        document.querySelector("#seats").style.border = ""
        document.querySelector("#location").style.border = ""
        document.querySelector("#cinema").style.border = ""
        errname.innerHTML=""
        errnum.innerHTML=""
        erremail.innerHTML=""
        errdate.innerHTML=""
        errseat.innerHTML=""
        errloc.innerHTML=""
        errcinema.innerHTML=""
        return false;
    }

    else if(inptime=="")
    {
        errtime.innerHTML="*Please choose the time"
        errtime.style.color="red"
        document.querySelector("#time").style.border = "2pxsolid red"
        document.querySelector("#time").focus()
        document.querySelector("#name").style.border = ""
        document.querySelector("#number").style.border = ""
        document.querySelector("#email").style.border = ""
        document.querySelector("#date").style.border = ""
        document.querySelector("#seats").style.border = ""
        document.querySelector("#location").style.border = ""
        document.querySelector("#cinema").style.border = ""
        document.querySelector("#movie").style.border = ""
        errname.innerHTML=""
        errnum.innerHTML=""
        erremail.innerHTML=""
        errdate.innerHTML=""
        errmovie.innerHTML=""
        errseat.innerHTML=""
        errloc.innerHTML=""
        errcinema.innerHTML=""
        return false;
    }
    let amt =inpseat*250;

    alert(`Your seats are booked , you have payed ${amt} for ${inpseat} seats`)
    
    let url='http://localhost:3000/Detail'
  
    fetch(url,{
        method:"POST",
        headers:{
            "Content-type":"application/json"
        },
        body:JSON.stringify(
            {
            "Name":inpname,
            "Number" :inpnum,
            "Email":inpemail,
            "Date":inpdate,
            "Seat":inpseat,
            "Location":inploc,
            "Cinema":inpcinema,
            "Movie":inpmovie,
            "Time":inptime,
            }
        )
    })

    return false;
}
