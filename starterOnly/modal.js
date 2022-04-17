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

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

// close modal event
modalCross.forEach((btn) => btn.addEventListener("click", closeModal));

// close modal form
function closeModal() {
  modalbg.style.display = "none";
};

// form inputs + REGEX for formatting data
const form = document.getElementById ('form');
const firstName = document.getElementById ('first');
const lastName = document.getElementById ('last');
const mail = document.getElementById ('email');
const birthDate = document.getElementById ('birthdate');
const quantity = document.getElementById ('quantity');
const loc1 = document.getElementById ('location1');
const loc2 = document.getElementById ('location2');
const loc3 = document.getElementById ('location3');
const loc4 = document.getElementById ('location4');
const loc5 = document.getElementById ('location5');
const loc6 = document.getElementById ('location6');

const nameFormat = /(.*[a-z]){2}/i;
const mailFormat = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const dateFormat = /^\d{4}\-(0?[1-9]|1[012])\-(0?[1-9]|[12][0-9]|3[01])$/;
const numbers = /^[0-9]+$/;

// HANDLE error
const validation = document.getElementById ('checkbox1');

const errorFirstName = document.getElementById ('error-first-name');
const errorLastName = document.getElementById ('error-last-name');
const errorMail = document.getElementById ('error-mail');
const errorBirthDate = document.getElementById ('error-birth-date');
const errorQuantity = document.getElementById ('error-quantity');
const errorLocation = document.getElementById ('error-location');
const errorValidation = document.getElementById ('error-validation');

const confirmation = document.getElementById ('confirmation');
const confirmationCloseBtn = document.getElementsByClassName('btn-close');

form.addEventListener('submit', (e) => {
  e.preventDefault();
})

// Function to check if fields are correctly filled before submitting
function validate () {
  let firstChecked;
  let lastChecked;
  let mailChecked;
  let birthChecked;
  let tournamentChecked;
  let radioChecked;
  let conditionsChecked;

  if (!firstName.value.match(nameFormat) || firstName.value == ' ' || firstName.value == null || firstName.value.length < 2) {
    errorFirstName.innerText = 'Entrez 2 caractères ou plus pour ce champ.';
    errorFirstName.style.color = 'red';
    errorFirstName.style.fontSize = '12px';
    errorFirstName.style.marginTop = '5px';
    firstName.style.border = 'solid red 2px';
  } else {
    errorFirstName.style.display = 'none';
    firstName.style.border = 'none';
    firstChecked = true;
  };

    if (!lastName.value.match(nameFormat) || lastName.value == ' ' || lastName.value == null || lastName.value.length < 2) { 
      errorLastName.innerText = 'Entrez 2 caractères ou plus pour ce champ.';
      errorLastName.style.color = 'red';
      errorLastName.style.fontSize = '12px';
      errorLastName.style.marginTop = '5px';
      lastName.style.border = 'solid red 2px';      
  }  else {
    errorLastName.style.display = 'none';
    lastName.style.border = 'none';
    lastChecked = true;
  };

    if (!mailFormat.test(mail.value)) { 
      errorMail.innerText = 'Renseignez une addresse mail valide';
      errorMail.style.color = 'red';
      errorMail.style.fontSize = '12px';
      errorMail.style.marginTop = '5px';
      mail.style.border = 'solid red 2px';
  } else {
    errorMail.style.display = 'none';
    mail.style.border = 'none';
    mailChecked = true;
  };

  if (!birthDate.value.match(dateFormat)) { 
    errorBirthDate.innerText = 'Remplissez votre date danniversaire';
    errorBirthDate.style.color = 'red';
    errorBirthDate.style.fontSize = '12px';
    errorBirthDate.style.marginTop = '5px';
    errorBirthDate.style.marginBottom = '5px';
    birthDate.style.border = 'solid red 2px';
    } else {
    errorBirthDate.style.display = 'none';
    birthDate.style.border = 'none';
    birthChecked = true;      
    }

  if (!quantity.value.match(numbers)) { 
    errorQuantity.innerText = 'Indiquez un nombre';
    errorQuantity.style.color = 'red';
    errorQuantity.style.fontSize = '12px';
    errorQuantity.style.marginTop = '5px';
    quantity.style.border = 'solid red 2px';
  } else {
    errorQuantity.style.display = 'none';
    quantity.style.border = 'none';
    tournamentChecked = true;
  };

  if (!loc1.checked && !loc2.checked && !loc3.checked && !loc4.checked && !loc5.checked && !loc6.checked) { 
    errorLocation.innerText = 'Choisissez une ville';
    errorLocation.style.color = 'red';
    errorLocation.style.fontSize = '12px';
    errorLocation.style.marginTop = '5px';          
  } else {
    errorLocation.style.display = 'none';
    radioChecked = true;
  };

  if (!validation.checked) {
    errorValidation.innerText = 'Vérifiez que vous acceptez les termes et conditions';
    errorValidation.style.color = 'red';
    errorValidation.style.fontSize = '12px';
  } else {
    errorValidation.style.display = 'none';
    conditionsChecked = true;
  };

  if (firstChecked == true && lastChecked == true && mailChecked == true && tournamentChecked == true && radioChecked == true && conditionsChecked == true && birthChecked == true) {
    form.style.display = "none";
    confirmation.style.display = "flex";
  }
}

// ADD button to close modal after success
confirmationCloseBtn[0].addEventListener("click", closeModal);
