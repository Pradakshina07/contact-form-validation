const form = document.getElementById("contactForm");

form.addEventListener("submit", function(e){
e.preventDefault();

let name = document.getElementById("name").value.trim();
let email = document.getElementById("email").value.trim();
let message = document.getElementById("message").value.trim();

let nameError = document.getElementById("nameError");
let emailError = document.getElementById("emailError");
let messageError = document.getElementById("messageError");
let successMsg = document.getElementById("successMsg");

nameError.textContent="";
emailError.textContent="";
messageError.textContent="";
successMsg.textContent="";

let isValid = true;

if(name === ""){
nameError.textContent="Name cannot be empty";
isValid=false;
}

let emailPattern=/^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
if(email === ""){
emailError.textContent="Email required";
isValid=false;
}
else if(!email.match(emailPattern)){
emailError.textContent="Enter valid email";
isValid=false;
}

if(message === ""){
messageError.textContent="Message cannot be empty";
isValid=false;
}

if(isValid){
successMsg.textContent="Form submitted successfully!";
form.reset();
}
});