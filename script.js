function loginshow() {
    var loginOpen = document.querySelector(".form").style;

    if (loginOpen.display == "block") {
        loginOpen.display = "none";
        loginOpen.width = "0%";
    }
    else {
        loginOpen.display = "block";
        loginOpen.width = "100%";
    }
}


function hide() {
    var loginClose = document.querySelector(".form").style;

    if (loginClose.display == "block") {
        loginClose.display = "none";
        loginClose.width = "0%";
    }
    else {
        loginClose.display = "block";
        loginClose.width = "100%";
    }

}

function toggleDropdown(className) {
    const dropdowns = document.querySelectorAll('.dropdown');
    dropdowns.forEach(dropdown => {
        if (dropdown.classList.contains(className)) {
            dropdown.style.display = dropdown.style.display === 'block' ? 'none' : 'block';
        } else {
            dropdown.style.display = 'none';
        }
    });
}

const images = document.querySelectorAll(".imhh");
let i = 0; 
let j = images.length; 

console.log(j)
function next(){
document.getElementById("photo" + (i+1)).style.display="none"

i = ( j + i + 1) % j;

  

  
document.getElementById("photo" + (i+1)).style.display="block"

 
 

} 

function prev(){
document.getElementById("photo" + (i+1)).style.display="none"
i = (j + i - 1) % j;
 
document.getElementById("photo" + (i+1)).style.display="block"

}

function home() {
    console.log("yes")
    document.querySelector("#image5").style.display = "block";
    document.querySelector("#image6").style.display = "none";
    document.querySelector("#image7").style.display = "none";
}
function service() {
    document.querySelector("#image6").style.display = "block";
    document.querySelector("#image5").style.display = "none";
    document.querySelector("#image7").style.display = "none";
}
function contact() {
    document.querySelector("#image7").style.display = "block";
    document.querySelector("#image6").style.display = "none";
    document.querySelector("#image5").style.display = "none";
}

function coffee() {
    document.querySelector("#box1").style.display = "flex";
    document.querySelector("#box2").style.display = "none";
    document.querySelector("#box3").style.display = "none";
    document.querySelector("#box4").style.display = "none";
}
function drink() {
    document.querySelector("#box2").style.display = "flex";
    document.querySelector("#box1").style.display = "none";
    document.querySelector("#box3").style.display = "none";
    document.querySelector("#box4").style.display = "none";
}
function fastfood() {
    document.querySelector("#box3").style.display = "flex";
    document.querySelector("#box1").style.display = "none";
    document.querySelector("#box2").style.display = "none";
    document.querySelector("#box4").style.display = "none";
}
function tea() {
    document.querySelector("#box4").style.display = "flex";
    document.querySelector("#box1").style.display = "none";
    document.querySelector("#box2").style.display = "none";
    document.querySelector("#box3").style.display = "none";
}

function validateForm() {
    var name = document.querySelector("#name").value;
    var email = document.querySelector("#email").value;
    var pass = document.querySelector("#password").value;
    var description = document.querySelector("#description").value;

    if (name == "") {
        document.getElementById("error1").innerHTML = "please Enter Your Nmae";
        return false;
    }

    if (name.length <= "2") {
        document.getElementById("error1").innerHTML = "minimum length is 2";
        return false;
    }
    if (email == "") {
        document.getElementById("error2").innerHTML = "please Enter email";
        return false;
    }

    if (email <= "2" && email >= "30") {
        document.getElementById("error2").innerHTML = "email Length Shoud be beetween 3 and 30 ";
        return false;
    }

    if (email.indexOf('@') <= 0) {
        document.getElementById("error2").innerHTML = "emailid is not Valid ";
        return false;
    }

    if ((email.charAt(email.length - 4) != '.') && (email.charAt(email.length - 3) != '.')) {
        document.getElementById("error2").innerHTML = "email is not Valid";
        return false;
    }

    if (pass == "") {
        document.getElementById("error3").innerHTML = "please Enter Password";
        return false;
    }

    if (pass.length <= "8" && pass.length >= "15") {
        document.getElementById("error3").innerHTML = "character should be 8 to 15";
        return false;
    }

    if (description == "") {
        document.getElementById("error4").innerHTML = "please Enter Your Message";
        return false;
    }
}


