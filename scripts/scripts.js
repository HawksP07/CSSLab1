// For the contact form
let username = document.getElementById("nameInput");
let phone = document.getElementById("inputPhone");
let email = document.getElementById("inputEmail");
let message = document.getElementById("inputMessage");

function handleFormSubmit(){
    console.log(username.value);
    console.log(phone.value);
    console.log(email.value);
    console.log(message.value);
    window.location.href="index.html";
}