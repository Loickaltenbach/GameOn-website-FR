function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const modalCross = document.querySelectorAll(".close");
const modalSubmit = document.querySelectorAll(".btn-submit");
const formData = document.querySelectorAll(".formData");
const firstName = document.getElementById("#first").value;
const lastName = document.getElementById("#last").value;
const email = document.getElementById("#email").value;
const date = document.getElementById("#birthdate").value;
const quantity = document.getElementById("#quantity").value;
const place = document.getElementsByName("location").value;
const checkbox1 = document.getElementById("#checkbox1").checked;
const checkbox2 = document.getElementById("#checkbox2").checked;

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

// close modal event
modalCross.forEach((close) => close.addEventListener("click,", closeModal));

// close modal form
function closeModal() {
  modalbg.style.display = "none";
}

// submit modal event
modalSubmit.forEach((sub) => sub.addEventListener("submit", validate));

// Function to validate Form before submitting
// function validate() {
//   if( firstName === null ) {
//     setErrorFor(firstName);
//   } else {
//     setSuccessFor(firstName);
//   }
//   if( lastName === null ) {
//     setErrorFor(lastName);
//   } else {
//     setSuccessFor(lastName);
//   }
//   if( email === null ) {
//     setErrorFor(email);
//   } else if(!isEmail(email)) {
//     setErrorFor(email);
//   } else {
//     setSuccessFor(email);
//   }
//   if( date === undefined ) {
//     setErrorFor(date);
//   } else if (!isDate(date)) {
//     setErrorFor(date);
//   } else {
//     setSuccessFor(date);
//   }
//   if( quantity === null ) {
//     setErrorFor(quantity);
//   } else {
//     setSuccessFor(quantity);
//   }
//   if( place === null ) {
//     setErrorFor(place);
//   } else {
//     setSuccessFor(place);
//   }
//   if( checkbox1 === false) {
//     setErrorFor(checkbox1);
//   } else {
//     setSuccessFor(checkbox1);
//   }
// }

// function setErrorFor(input) {
// 	const formControl = input.parentElement;
// 	formControl.className = 'formData';
// }

// function setSuccessFor(input) {
// 	const formControl = input.parentElement;
// 	formControl.className = 'formData';
// }

// REGEX to check email format
function isEmail(email) {
	return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}

// REGEX to check date format
function isDate(date) {
  return /^(?:(?:31(\/|-|\.)(?:0?[13578]|1[02]))\1|(?:(?:29|30)(\/|-|\.)(?:0?[13-9]|1[0-2])\2))(?:(?:1[6-9]|[2-9]\d)?\d{2})$|^(?:29(\/|-|\.)0?2\3(?:(?:(?:1[6-9]|[2-9]\d)?(?:0[48]|[2468][048]|[13579][26])|(?:(?:16|[2468][048]|[3579][26])00))))$|^(?:0?[1-9]|1\d|2[0-8])(\/|-|\.)(?:(?:0?[1-9])|(?:1[0-2]))\4(?:(?:1[6-9]|[2-9]\d)?\d{2})$/.test(date);
}